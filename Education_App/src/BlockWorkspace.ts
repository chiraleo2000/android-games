/**
 * Touch-friendly block palette and workspace.
 * Tap a palette block to add it. Drag to reorder or drop inside Loop / If.
 */

import { Block, BlockType } from './types';

const NESTED_TYPES = new Set<string>([
  BlockType.LOOP,
  BlockType.IF_WALL,
  BlockType.IF_GEM,
  BlockType.IF_PATH,
  BlockType.WHILE_LOOP
]);

export class BlockWorkspace {
  private canvas: HTMLElement;
  private activeZone: HTMLElement;
  private dragSource: HTMLElement | null = null;
  private cloning = false;
  private moved = false;
  private pointerId: number | null = null;
  private startX = 0;
  private startY = 0;
  private ghost: HTMLElement | null = null;

  constructor(canvasId: string = 'canvas-area') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      throw new Error(`Canvas element with id "${canvasId}" not found`);
    }
    this.canvas = canvas;
    this.activeZone = canvas;
    this.bindPalette();
    this.bindCanvas();
    this.markActive();
  }

  public parseBlocks(): Block[] {
    const topLevel = Array.from(this.canvas.children).filter(
      (el) => el.classList.contains('puzzle-piece') && el.id !== 'start-node'
    ) as HTMLElement[];
    return topLevel.map((piece) => this.parseBlock(piece));
  }

  public clear(): void {
    const pieces = this.canvas.querySelectorAll('.puzzle-piece');
    pieces.forEach((piece) => {
      if (piece.id !== 'start-node') piece.remove();
    });
    this.activeZone = this.canvas;
    this.markActive();
  }

  public getBlockCount(): number {
    return this.canvas.querySelectorAll('.puzzle-piece:not(#start-node)').length;
  }

  public focusMainProgram(): void {
    this.activeZone = this.canvas;
    this.markActive();
  }

  private bindPalette(): void {
    const pieces = document.querySelectorAll('#block-palette .puzzle-piece');
    pieces.forEach((node) => {
      const piece = node as HTMLElement;
      if (piece.dataset.bound === '1') return;
      piece.dataset.bound = '1';
      piece.addEventListener('pointerdown', (event) => this.onPointerDown(event, piece, true));
      piece.addEventListener('click', () => this.onPaletteClick(piece));
      piece.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.addFromPalette(piece);
        }
      });
    });
  }

  private bindCanvas(): void {
    if (this.canvas.dataset.bound === '1') return;
    this.canvas.dataset.bound = '1';
    this.canvas.addEventListener('pointerdown', (event) => {
      const target = event.target as HTMLElement;
      if (target === this.canvas || target.id === 'start-node') {
        this.activeZone = this.canvas;
        this.markActive();
      }
    });
    document.getElementById('workspace-hint')?.addEventListener('click', () => {
      this.focusMainProgram();
    });
  }

  private onPaletteClick(piece: HTMLElement): void {
    if (piece.dataset.suppressClick === '1') {
      piece.dataset.suppressClick = '0';
      return;
    }
    this.addFromPalette(piece);
  }

  private onPointerDown(event: PointerEvent, piece: HTMLElement, fromPalette: boolean): void {
    if (event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (target.closest('.block-remove, .loop-count, .loop-count-input')) return;

    const nestedHit = target.closest('.nested-area');
    if (!fromPalette && nestedHit && piece.contains(nestedHit) && target.classList.contains('nested-area')) {
      this.activeZone = nestedHit as HTMLElement;
      this.markActive();
      return;
    }
    if (!fromPalette && nestedHit && piece.contains(nestedHit) && nestedHit !== piece) {
      return;
    }

    this.dragSource = piece;
    this.cloning = fromPalette;
    this.moved = false;
    this.pointerId = event.pointerId;
    this.startX = event.clientX;
    this.startY = event.clientY;
    piece.setPointerCapture?.(event.pointerId);

    const move = (ev: PointerEvent) => this.onPointerMove(ev);
    const up = (ev: PointerEvent) => this.onPointerUp(ev, move, up);
    piece.addEventListener('pointermove', move);
    piece.addEventListener('pointerup', up);
    piece.addEventListener('pointercancel', up);
  }

  private onPointerMove(event: PointerEvent): void {
    if (!this.dragSource || event.pointerId !== this.pointerId) return;
    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;
    if (!this.moved && dx * dx + dy * dy < 64) return;
    this.moved = true;
    event.preventDefault();
    if (!this.ghost) {
      this.ghost = this.dragSource.cloneNode(true) as HTMLElement;
      this.ghost.classList.add('drag-ghost');
      this.ghost.classList.remove('dragging');
      document.body.appendChild(this.ghost);
      this.dragSource.classList.add('dragging');
    }
    this.ghost.style.left = `${event.clientX - 24}px`;
    this.ghost.style.top = `${event.clientY - 24}px`;
  }

  private onPointerUp(
    event: PointerEvent,
    move: (ev: PointerEvent) => void,
    up: (ev: PointerEvent) => void
  ): void {
    const source = this.dragSource;
    if (!source || event.pointerId !== this.pointerId) return;
    source.removeEventListener('pointermove', move);
    source.removeEventListener('pointerup', up);
    source.removeEventListener('pointercancel', up);

    if (this.moved) {
      this.dropAt(event.clientX, event.clientY);
      if (this.cloning) source.dataset.suppressClick = '1';
    } else if (this.cloning) {
      source.dataset.suppressClick = '1';
      this.addFromPalette(source);
    } else if (NESTED_TYPES.has(source.dataset.type || '')) {
      const nest = this.nestedArea(source);
      if (nest) {
        this.activeZone = nest;
        this.markActive();
      }
    }
    this.endDrag();
  }

  private dropAt(x: number, y: number): void {
    const source = this.dragSource;
    if (!source) return;
    if (this.ghost) this.ghost.style.display = 'none';
    const zone = this.findZone(x, y);
    if (!zone) return;
    if (!this.cloning && (zone === source || source.contains(zone))) return;

    const block = this.cloning ? this.createWorkspaceBlock(source) : source;
    const after = this.getDragAfterElement(zone, y, block);
    if (after) zone.insertBefore(block, after);
    else zone.appendChild(block);
    if (this.cloning) this.focusContainer(block);
  }

  private addFromPalette(source: HTMLElement): void {
    const block = this.createWorkspaceBlock(source);
    this.activeZone.appendChild(block);
    this.focusContainer(block);
    block.animate?.([{ transform: 'scale(0.92)' }, { transform: 'scale(1)' }], { duration: 140 });
  }

  private focusContainer(block: HTMLElement): void {
    if (!NESTED_TYPES.has(block.dataset.type || '')) return;
    const nest = this.nestedArea(block);
    if (!nest) return;
    this.activeZone = nest;
    this.markActive();
  }

  private createWorkspaceBlock(source: HTMLElement): HTMLElement {
    const type = source.dataset.type || BlockType.MOVE_FORWARD;
    const piece = document.createElement('div');
    piece.className = source.className.replace('dragging', '').trim();
    piece.dataset.type = type;
    piece.id = `piece-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

    const header = document.createElement('div');
    header.className = 'piece-header';
    const icon = source.querySelector('.icon');
    if (icon) header.appendChild(icon.cloneNode(true));
    const label = document.createElement('span');
    label.className = 'piece-label';
    label.textContent = source.dataset.label || type;
    header.appendChild(label);

    if (type === BlockType.LOOP) {
      const countLabel = document.createElement('label');
      countLabel.className = 'loop-count';
      countLabel.append('×');
      const input = document.createElement('input');
      input.type = 'number';
      input.min = '1';
      input.max = '8';
      input.value = '3';
      input.className = 'loop-count-input';
      input.setAttribute('aria-label', 'Loop repeat count');
      input.addEventListener('pointerdown', (event) => event.stopPropagation());
      input.addEventListener('click', (event) => event.stopPropagation());
      countLabel.addEventListener('pointerdown', (event) => event.stopPropagation());
      countLabel.appendChild(input);
      header.appendChild(countLabel);
    }

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'block-remove';
    remove.textContent = '×';
    remove.setAttribute('aria-label', 'Remove block');
    remove.addEventListener('pointerdown', (event) => event.stopPropagation());
    remove.addEventListener('click', (event) => {
      event.stopPropagation();
      piece.remove();
      if (!this.canvas.contains(this.activeZone)) this.focusMainProgram();
    });
    header.appendChild(remove);
    piece.appendChild(header);

    if (NESTED_TYPES.has(type)) {
      piece.classList.add('loop-container');
      const nested = document.createElement('div');
      nested.className = 'nested-area';
      nested.addEventListener('pointerdown', (event) => {
        event.stopPropagation();
        this.activeZone = nested;
        this.markActive();
      });
      piece.appendChild(nested);
    }

    piece.addEventListener('pointerdown', (event) => this.onPointerDown(event, piece, false));
    return piece;
  }

  private parseBlock(element: HTMLElement): Block {
    const blockType = (element.dataset.type || BlockType.MOVE_FORWARD) as BlockType;
    const block: Block = {
      id: element.id || `block-${Date.now()}`,
      type: blockType
    };

    if (NESTED_TYPES.has(blockType)) {
      const nestedArea = this.nestedArea(element);
      if (nestedArea) {
        const nestedPieces = Array.from(nestedArea.children).filter((el) =>
          el.classList.contains('puzzle-piece')
        ) as HTMLElement[];
        block.nestedBlocks = nestedPieces.map((piece) => this.parseBlock(piece));
      }
      if (blockType === BlockType.LOOP) {
        const input = element.querySelector('input.loop-count-input') as HTMLInputElement | null;
        const parsed = input ? Number.parseInt(input.value, 10) : 3;
        block.loopCount = Number.isFinite(parsed) ? Math.min(8, Math.max(1, parsed)) : 3;
      }
    }

    return block;
  }

  private nestedArea(element: HTMLElement): HTMLElement | null {
    for (const child of Array.from(element.children)) {
      if (child.classList.contains('nested-area')) return child as HTMLElement;
    }
    return null;
  }

  private findZone(x: number, y: number): HTMLElement | null {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    if (!el || (!this.canvas.contains(el) && el !== this.canvas)) return null;
    const nested = el.closest('.nested-area');
    if (nested && this.canvas.contains(nested)) return nested as HTMLElement;
    const loop = el.closest('.loop-container');
    if (loop && this.canvas.contains(loop)) {
      const area = this.nestedArea(loop as HTMLElement);
      if (area) return area;
    }
    return this.canvas;
  }

  private getDragAfterElement(container: HTMLElement, y: number, moving: HTMLElement): HTMLElement | null {
    const draggable = Array.from(container.children).filter(
      (child) => child.classList.contains('puzzle-piece') && child !== moving && child.id !== 'start-node'
    ) as HTMLElement[];

    return draggable.reduce<{ offset: number; element: HTMLElement | null }>(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) return { offset, element: child };
        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    ).element;
  }

  private markActive(): void {
    this.canvas.classList.remove('active-zone');
    this.canvas.querySelectorAll('.nested-area').forEach((el) => el.classList.remove('active-zone'));
    this.activeZone.classList.add('active-zone');
    const hint = document.getElementById('workspace-hint');
    if (!hint) return;
    hint.textContent = this.activeZone === this.canvas
      ? 'Tap a block to add it. Tap here if you are inside a loop.'
      : 'Adding inside this block. Tap here to return to the main program.';
  }

  private endDrag(): void {
    this.dragSource?.classList.remove('dragging');
    this.ghost?.remove();
    this.ghost = null;
    this.dragSource = null;
    this.cloning = false;
    this.moved = false;
    this.pointerId = null;
  }
}

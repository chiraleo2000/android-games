import * as THREE from 'three';

export interface ActivityPanel3D {
  group: THREE.Group;
  setTitle(text: string): void;
  setSkills(skills: string[]): void;
  setProgress(current: number, total: number): void;
  show(): void;
  hide(): void;
}

const SKILL_COLORS: Record<string, number> = {
  software: 0x4361ee,
  logical: 0x06d6a0,
  soft_skills: 0xffd166,
  business: 0xef476f,
  presentation: 0x4cc9f0,
  ai_literacy: 0xa855f7,
};

/**
 * Floating 3D HUD panel showing current activity info,
 * positioned in front of the camera.
 */
export function createActivityPanel(): ActivityPanel3D {
  const group = new THREE.Group();
  group.visible = false;

  // Background plane
  const bgGeo = new THREE.PlaneGeometry(6, 3, 1, 1);
  const bgMat = new THREE.MeshBasicMaterial({
    color: 0x0a0a2e,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
  });
  const bg = new THREE.Mesh(bgGeo, bgMat);
  group.add(bg);

  // Border frame
  const edges = new THREE.EdgesGeometry(bgGeo);
  const lineMat = new THREE.LineBasicMaterial({ color: 0x4361ee, transparent: true, opacity: 0.7 });
  const frame = new THREE.LineSegments(edges, lineMat);
  group.add(frame);

  let titleSprite: THREE.Sprite | null = null;
  let skillSprites: THREE.Sprite[] = [];
  let progressBar: THREE.Mesh | null = null;

  function makeTextSprite(
    text: string,
    fontSize: number,
    color: string,
    maxWidth: number
  ): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = color;
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 256, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(maxWidth, maxWidth * 0.25, 1);
    return sprite;
  }

  return {
    group,
    setTitle(text: string) {
      if (titleSprite) group.remove(titleSprite);
      titleSprite = makeTextSprite(text, 36, '#ffffff', 5);
      titleSprite.position.set(0, 0.8, 0.01);
      group.add(titleSprite);
    },
    setSkills(skills: string[]) {
      for (const s of skillSprites) group.remove(s);
      skillSprites = [];
      const startX = -((skills.length - 1) * 1.1) / 2;
      skills.forEach((skill, i) => {
        const color = SKILL_COLORS[skill] ?? 0xffffff;
        const hex = '#' + new THREE.Color(color).getHexString();
        const sprite = makeTextSprite(skill.toUpperCase(), 20, hex, 1);
        sprite.position.set(startX + i * 1.1, 0.2, 0.01);
        group.add(sprite);
        skillSprites.push(sprite);
      });
    },
    setProgress(current: number, total: number) {
      if (progressBar) group.remove(progressBar);
      const fraction = total > 0 ? current / total : 0;
      const barGeo = new THREE.PlaneGeometry(5 * fraction, 0.15);
      const barMat = new THREE.MeshBasicMaterial({ color: 0x06d6a0 });
      progressBar = new THREE.Mesh(barGeo, barMat);
      progressBar.position.set(-2.5 + (5 * fraction) / 2, -0.5, 0.01);
      group.add(progressBar);

      // Track background
      const trackGeo = new THREE.PlaneGeometry(5, 0.15);
      const trackMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
      });
      const track = new THREE.Mesh(trackGeo, trackMat);
      track.position.set(0, -0.5, 0.005);
      group.add(track);
    },
    show() {
      group.visible = true;
    },
    hide() {
      group.visible = false;
    },
  };
}

import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { GameWorld } from './GameWorld';
import { PlayerManager } from './PlayerManager';
import { createActivityPanel, ActivityPanel3D } from './ActivityPanel3D';

export interface GameEngineOptions {
  container: HTMLElement;
}

/**
 * Main 3D game engine that combines scene, world, players,
 * and activity UI into a single controllable system.
 */
export class GameEngine {
  private readonly scene: SceneManager;
  private readonly world: GameWorld;
  private readonly players: PlayerManager;
  private readonly activityPanel: ActivityPanel3D;
  private running = false;

  constructor(opts: GameEngineOptions) {
    this.scene = new SceneManager(opts.container);
    this.world = new GameWorld();
    this.scene.scene.add(this.world.group);

    this.players = new PlayerManager(this.scene.scene);

    this.activityPanel = createActivityPanel();
    this.activityPanel.group.position.set(0, 5, -8);
    this.scene.scene.add(this.activityPanel.group);

    // Register update loop
    this.scene.onUpdate((delta) => {
      this.world.update(delta);
      this.players.update(delta);
    });
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.scene.start();
  }

  stop(): void {
    this.running = false;
    this.scene.stop();
  }

  // Player management
  addPlayer(id: string, username: string, slot: number): void {
    this.players.addPlayer(id, username, slot);
  }

  removePlayer(id: string): void {
    this.players.removePlayer(id);
  }

  movePlayer(id: string, x: number, z: number, immediate = false): void {
    this.players.movePlayerTo(id, x, z, immediate);
  }

  addBeacon(x: number, z: number, color: number): THREE.Mesh {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.45, 1.4, 12),
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.55,
        roughness: 0.35,
      }),
    );
    mesh.position.set(x, 0.7, z);
    this.scene.scene.add(mesh);
    return mesh;
  }

  // Activity display
  showActivity(title: string, skills: string[], step: number, totalSteps: number): void {
    this.activityPanel.setTitle(title);
    this.activityPanel.setSkills(skills);
    this.activityPanel.setProgress(step, totalSteps);
    this.activityPanel.show();
  }

  hideActivity(): void {
    this.activityPanel.hide();
  }

  // Camera controls
  setCameraTarget(x: number, y: number, z: number): void {
    this.scene.camera.lookAt(x, y, z);
  }

  setCameraPosition(x: number, y: number, z: number): void {
    this.scene.camera.position.set(x, y, z);
  }

  // Cleanup
  dispose(): void {
    this.stop();
    this.players.dispose();
    this.world.dispose();
    this.scene.dispose();
  }
}

export { SceneManager } from './SceneManager';
export { GameWorld } from './GameWorld';
export { PlayerManager } from './PlayerManager';
export { createActivityPanel } from './ActivityPanel3D';
export type { ActivityPanel3D } from './ActivityPanel3D';

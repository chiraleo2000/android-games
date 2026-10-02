import * as THREE from 'three';

export interface PlayerAvatar {
  id: string;
  username: string;
  mesh: THREE.Group;
  targetPos: THREE.Vector3;
  nameLabel?: THREE.Sprite;
}

const AVATAR_COLORS = [0x4361ee, 0x06d6a0, 0xffd166, 0xef476f, 0x4cc9f0, 0xa855f7];

/**
 * Manages player avatars in the 3D world — spawning, movement, labels.
 */
export class PlayerManager {
  private readonly avatars = new Map<string, PlayerAvatar>();
  private readonly scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  addPlayer(id: string, username: string, slotIndex: number): PlayerAvatar {
    const existing = this.avatars.get(id);
    if (existing) return existing;

    const group = new THREE.Group();

    // Body — capsule
    const bodyGeo = new THREE.CapsuleGeometry(0.4, 0.8, 8, 16);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: AVATAR_COLORS[slotIndex % AVATAR_COLORS.length],
      metalness: 0.4,
      roughness: 0.5,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.8;
    body.castShadow = true;
    group.add(body);

    // Head — sphere
    const headGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xfce4ec, roughness: 0.6 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.7;
    head.castShadow = true;
    group.add(head);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1a1a2e });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.12, 1.75, 0.3);
    group.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.12, 1.75, 0.3);
    group.add(rightEye);

    // Name label as sprite
    const label = this.createLabel(username);
    label.position.y = 2.3;
    group.add(label);

    // Position around platform
    const angle = (slotIndex / 4) * Math.PI * 2;
    const radius = 4;
    group.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

    this.scene.add(group);
    const avatar: PlayerAvatar = {
      id,
      username,
      mesh: group,
      targetPos: group.position.clone(),
      nameLabel: label,
    };
    this.avatars.set(id, avatar);
    return avatar;
  }

  removePlayer(id: string): void {
    const avatar = this.avatars.get(id);
    if (avatar) {
      this.scene.remove(avatar.mesh);
      this.avatars.delete(id);
    }
  }

  movePlayerTo(id: string, x: number, z: number, immediate = false): void {
    const avatar = this.avatars.get(id);
    if (!avatar) return;
    avatar.targetPos.set(x, 0, z);
    if (immediate) {
      avatar.mesh.position.x = x;
      avatar.mesh.position.z = z;
    }
  }

  update(delta: number): void {
    for (const avatar of this.avatars.values()) {
      // Smooth movement towards target
      avatar.mesh.position.x += (avatar.targetPos.x - avatar.mesh.position.x) * delta * 3;
      avatar.mesh.position.z += (avatar.targetPos.z - avatar.mesh.position.z) * delta * 3;

      // Idle bob animation
      const bob = Math.sin(Date.now() * 0.003 + avatar.mesh.position.x) * 0.05;
      avatar.mesh.position.y = bob;
    }
  }

  private createLabel(text: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.roundRect(0, 0, 256, 64, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2, 0.5, 1);
    return sprite;
  }

  dispose(): void {
    for (const avatar of this.avatars.values()) {
      this.scene.remove(avatar.mesh);
    }
    this.avatars.clear();
  }
}

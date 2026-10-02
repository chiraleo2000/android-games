import * as THREE from 'three';

/**
 * Creates the 3D game world — floating island platform with grid,
 * particle effects, and decorative elements.
 */
export class GameWorld {
  public group: THREE.Group;
  private readonly particles: THREE.Points;
  private readonly floatingOrbs: THREE.Mesh[] = [];
  private time = 0;

  constructor() {
    this.group = new THREE.Group();
    this.createPlatform();
    this.createGrid();
    this.particles = this.createParticles();
    this.createFloatingOrbs();
    this.createSkybox();
  }

  private createPlatform(): void {
    // Main platform — a rounded hexagonal island
    const platformGeo = new THREE.CylinderGeometry(12, 14, 1.5, 6, 1);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a3e,
      metalness: 0.3,
      roughness: 0.7,
      emissive: 0x0a0a2e,
      emissiveIntensity: 0.2,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.75;
    platform.receiveShadow = true;
    this.group.add(platform);

    // Edge glow ring
    const ringGeo = new THREE.TorusGeometry(13, 0.08, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x4361ee,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0;
    this.group.add(ring);
  }

  private createGrid(): void {
    const gridHelper = new THREE.GridHelper(24, 24, 0x4361ee, 0x1a1a4e);
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.3;
    gridHelper.position.y = 0.01;
    this.group.add(gridHelper);
  }

  private createParticles(): THREE.Points {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color(0x4361ee),
      new THREE.Color(0x4cc9f0),
      new THREE.Color(0x06d6a0),
      new THREE.Color(0xffd166),
      new THREE.Color(0xa855f7),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = Math.random() * 30 + 2;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    this.group.add(points);
    return points;
  }

  private createFloatingOrbs(): void {
    const orbData = [
      { pos: [-6, 3, -4], color: 0x4361ee, label: 'Software' },
      { pos: [6, 4, -3], color: 0x06d6a0, label: 'Logic' },
      { pos: [-4, 5, 5], color: 0xffd166, label: 'SoftSkills' },
      { pos: [5, 3.5, 4], color: 0xef476f, label: 'Business' },
      { pos: [0, 6, -6], color: 0x4cc9f0, label: 'Present' },
      { pos: [-7, 4.5, 0], color: 0xa855f7, label: 'AI' },
    ];

    for (const data of orbData) {
      const orbGeo = new THREE.SphereGeometry(0.5, 16, 16);
      const orbMat = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(data.pos[0], data.pos[1], data.pos[2]);
      orb.castShadow = true;
      orb.userData = { label: data.label, baseY: data.pos[1] };
      this.group.add(orb);
      this.floatingOrbs.push(orb);

      // Glow sphere
      const glowGeo = new THREE.SphereGeometry(0.8, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      orb.add(glow);
    }
  }

  private createSkybox(): void {
    const skyGeo = new THREE.SphereGeometry(200, 32, 32);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x0a0a2e) },
        bottomColor: { value: new THREE.Color(0x1a0a3e) },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.group.add(sky);
  }

  update(delta: number): void {
    this.time += delta;

    // Animate particles slowly upward
    const positions = this.particles.geometry.attributes.position;
    const arr = positions.array as Float32Array;
    for (let i = 1; i < arr.length; i += 3) {
      arr[i] += delta * 0.3;
      if (arr[i] > 32) arr[i] = 2;
    }
    positions.needsUpdate = true;

    // Bob floating orbs
    for (const orb of this.floatingOrbs) {
      const baseY = orb.userData.baseY as number;
      orb.position.y = baseY + Math.sin(this.time * 1.5 + orb.position.x) * 0.4;
      orb.rotation.y += delta * 0.5;
    }
  }

  dispose(): void {
    this.group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}

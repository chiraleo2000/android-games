/**
 * Draw a generated instrument mesh with WebGL 1 shaders.
 * Three's current renderer rejects a WebGL 1 context, so this path still
 * shows the procedural model on that surface.
 */

interface DrawNode {
  isMesh?: boolean;
  geometry?: {
    attributes?: {
      position?: {
        count: number;
        getX: (index: number) => number;
        getY: (index: number) => number;
        getZ: (index: number) => number;
      };
    };
    index?: { count: number; getX: (index: number) => number } | null;
  };
  matrixWorld?: { elements: ArrayLike<number> };
  material?: { color?: { r: number; g: number; b: number } } | Array<{ color?: { r: number; g: number; b: number } }>;
}

export interface MeshRoot {
  traverse: (visitor: (node: DrawNode) => void) => void;
  updateMatrixWorld?: (force?: boolean) => void;
}

interface MeshGL {
  drawingBufferWidth: number;
  drawingBufferHeight: number;
  COLOR_BUFFER_BIT: number;
  DEPTH_BUFFER_BIT: number;
  ARRAY_BUFFER: number;
  STATIC_DRAW: number;
  TRIANGLES: number;
  FLOAT: number;
  DEPTH_TEST: number;
  VERTEX_SHADER: number;
  FRAGMENT_SHADER: number;
  COMPILE_STATUS: number;
  LINK_STATUS: number;
  clearColor: (r: number, g: number, b: number, a: number) => void;
  clear: (mask: number) => void;
  enable: (cap: number) => void;
  viewport: (x: number, y: number, width: number, height: number) => void;
  createBuffer: () => object | null;
  bindBuffer: (target: number, buffer: object | null) => void;
  bufferData: (target: number, data: Float32Array, usage: number) => void;
  createShader: (type: number) => object | null;
  shaderSource: (shader: object, source: string) => void;
  compileShader: (shader: object) => void;
  getShaderParameter: (shader: object, pname: number) => boolean;
  createProgram: () => object | null;
  attachShader: (program: object, shader: object) => void;
  linkProgram: (program: object) => void;
  getProgramParameter: (program: object, pname: number) => boolean;
  useProgram: (program: object | null) => void;
  getAttribLocation: (program: object, name: string) => number;
  getUniformLocation: (program: object, name: string) => object | null;
  enableVertexAttribArray: (index: number) => void;
  vertexAttribPointer: (
    index: number,
    size: number,
    type: number,
    normalized: boolean,
    stride: number,
    offset: number,
  ) => void;
  uniformMatrix4fv: (location: object | null, transpose: boolean, value: Float32Array) => void;
  drawArrays: (mode: number, first: number, count: number) => void;
}

const VERT = `#version 100
attribute vec3 aPos;
attribute vec3 aColor;
uniform mat4 uMvp;
varying vec3 vColor;
void main() {
  gl_Position = uMvp * vec4(aPos, 1.0);
  vColor = aColor;
}
`;

const FRAG = `#version 100
precision mediump float;
varying vec3 vColor;
void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
`;

const programs = new WeakMap<object, { program: object; buffer: object; position: number; color: number; mvp: object | null }>();

function lookAt(eyeX: number, eyeY: number, eyeZ: number): Float32Array {
  let zx = eyeX;
  let zy = eyeY;
  let zz = eyeZ;
  const zlen = Math.hypot(zx, zy, zz) || 1;
  zx /= zlen;
  zy /= zlen;
  zz /= zlen;
  let xx = zz;
  let xy = 0;
  let xz = -zx;
  const xlen = Math.hypot(xx, xy, xz) || 1;
  xx /= xlen;
  xy /= xlen;
  xz /= xlen;
  const yx = zy * xz - zz * xy;
  const yy = zz * xx - zx * xz;
  const yz = zx * xy - zy * xx;
  return new Float32Array([
    xx, yx, zx, 0,
    xy, yy, zy, 0,
    xz, yz, zz, 0,
    -(xx * eyeX + xy * eyeY + xz * eyeZ),
    -(yx * eyeX + yy * eyeY + yz * eyeZ),
    -(zx * eyeX + zy * eyeY + zz * eyeZ),
    1,
  ]);
}

function perspective(aspect: number): Float32Array {
  const f = 1 / Math.tan((45 * Math.PI) / 180 / 2);
  const near = 0.1;
  const far = 100;
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ]);
}

function multiply(a: Float32Array, b: Float32Array): Float32Array {
  const out = new Float32Array(16);
  for (let column = 0; column < 4; column += 1) {
    for (let row = 0; row < 4; row += 1) {
      out[column * 4 + row] =
        a[row] * b[column * 4] +
        a[4 + row] * b[column * 4 + 1] +
        a[8 + row] * b[column * 4 + 2] +
        a[12 + row] * b[column * 4 + 3];
    }
  }
  return out;
}

function colorOf(material: DrawNode['material']): [number, number, number] {
  const source = Array.isArray(material) ? material[0] : material;
  const color = source?.color;
  if (!color) return [0.72, 0.45, 0.22];
  return [color.r, color.g, color.b];
}

function pushVertex(
  data: number[],
  matrix: ArrayLike<number>,
  x: number,
  y: number,
  z: number,
  color: [number, number, number],
): void {
  data.push(
    matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12],
    matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13],
    matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14],
    color[0],
    color[1],
    color[2],
  );
}

function shader(gl: MeshGL, type: number, source: string): object | null {
  const compiled = gl.createShader(type);
  if (!compiled) return null;
  gl.shaderSource(compiled, source);
  gl.compileShader(compiled);
  if (!gl.getShaderParameter(compiled, gl.COMPILE_STATUS)) return null;
  return compiled;
}

function programFor(gl: MeshGL): { program: object; buffer: object; position: number; color: number; mvp: object | null } | null {
  const cached = programs.get(gl);
  if (cached) return cached;
  const vertex = shader(gl, gl.VERTEX_SHADER, VERT);
  const fragment = shader(gl, gl.FRAGMENT_SHADER, FRAG);
  const program = vertex && fragment ? gl.createProgram() : null;
  const buffer = gl.createBuffer();
  if (!program || !vertex || !fragment || !buffer) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  const record = {
    program,
    buffer,
    position: gl.getAttribLocation(program, 'aPos'),
    color: gl.getAttribLocation(program, 'aColor'),
    mvp: gl.getUniformLocation(program, 'uMvp'),
  };
  programs.set(gl, record);
  return record;
}

export function drawGeneratedMesh(
  gl: MeshGL,
  root: MeshRoot,
  eye: { x: number; y: number; z: number } = { x: 0, y: 2, z: 5 },
): void {
  const width = gl.drawingBufferWidth || 1;
  const height = gl.drawingBufferHeight || 1;
  gl.viewport(0, 0, width, height);
  gl.clearColor(0.1, 0.1, 0.12, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  root.updateMatrixWorld?.(true);
  const data: number[] = [];
  root.traverse((node) => {
    const position = node.geometry?.attributes?.position;
    const matrix = node.matrixWorld?.elements;
    if (!node.isMesh || !position || !matrix || data.length > 72000) return;
    const color = colorOf(node.material);
    const index = node.geometry?.index;
    const count = index ? index.count : position.count;
    for (let i = 0; i + 2 < count && data.length <= 72000; i += 3) {
      for (const slot of [i, i + 1, i + 2]) {
        const vertex = index ? index.getX(slot) : slot;
        pushVertex(data, matrix, position.getX(vertex), position.getY(vertex), position.getZ(vertex), color);
      }
    }
  });
  if (data.length === 0) return;

  const gpu = programFor(gl);
  if (!gpu) return;
  gl.useProgram(gpu.program);
  gl.uniformMatrix4fv(gpu.mvp, false, multiply(perspective(width / height), lookAt(eye.x, eye.y, eye.z)));
  gl.bindBuffer(gl.ARRAY_BUFFER, gpu.buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  const stride = 24;
  gl.enableVertexAttribArray(gpu.position);
  gl.vertexAttribPointer(gpu.position, 3, gl.FLOAT, false, stride, 0);
  gl.enableVertexAttribArray(gpu.color);
  gl.vertexAttribPointer(gpu.color, 3, gl.FLOAT, false, stride, 12);
  gl.drawArrays(gl.TRIANGLES, 0, data.length / 6);
}

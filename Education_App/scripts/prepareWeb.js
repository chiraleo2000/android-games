const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const www = path.join(root, 'www');

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(www, { recursive: true });

copyFile(path.join(root, 'index.html'), path.join(www, 'index.html'));
copyFile(path.join(root, 'style.css'), path.join(www, 'style.css'));

const dist = path.join(root, 'dist');
for (const name of fs.readdirSync(dist)) {
  if (!name.endsWith('.js')) continue;
  copyFile(path.join(dist, name), path.join(www, 'dist', name));
}

const legal = path.join(root, 'legal');
for (const name of fs.readdirSync(legal)) {
  if (!name.endsWith('.html')) continue;
  copyFile(path.join(legal, name), path.join(www, 'legal', name));
}

const packed = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else packed.push(path.relative(www, full));
  }
}
walk(www);
if (packed.some((file) => file.split(path.sep).includes('node_modules'))) {
  console.error('Refusing to package node_modules');
  process.exit(1);
}
console.log('Copied web assets to www/');
console.log(packed.join('\n'));

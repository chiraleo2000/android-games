const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ is missing. Run tsc first.');
  process.exit(1);
}

for (const name of fs.readdirSync(dist)) {
  if (!name.endsWith('.js')) continue;
  const file = path.join(dist, name);
  const source = fs.readFileSync(file, 'utf8');
  const next = source.replace(/(from\s+['"])(\.\.?\/[^'"]+?)(['"])/g, (full, open, spec, close) => {
    if (spec.endsWith('.js')) return full;
    return `${open}${spec}.js${close}`;
  });
  if (next !== source) fs.writeFileSync(file, next);
}

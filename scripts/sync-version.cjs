const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join } = require('path');

const root = join(__dirname, '..');
const pkgPath = join(root, 'portafolio', 'package.json');
const version = JSON.parse(readFileSync(pkgPath, 'utf8')).version;

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error(`Invalid version in portafolio/package.json: ${version}`);
  process.exit(1);
}

const files = [join(root, 'README.md'), join(root, '.claude', 'SKILL.md')];

for (const file of files) {
  if (!existsSync(file)) {
    continue;
  }

  const original = readFileSync(file, 'utf8');
  const updated = original
    .replace(/^# Portfolio V \d+\.\d+\.\d+/m, `# Portfolio V ${version}`)
    .replace(/^# Portafolio V \d+\.\d+\.\d+/m, `# Portafolio V ${version}`);

  if (updated !== original) {
    writeFileSync(file, updated);
    console.log(`Updated ${file} -> V ${version}`);
  }
}

console.log(`Source of truth: portafolio/package.json -> ${version}`);

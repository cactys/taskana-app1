// generate-icon-index.mjs
import { readdir, writeFile } from 'fs/promises';
import { extname, basename, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const iconsDir = resolve(__dirname, 'src/components/icon/icons');
const illustrationsDir = resolve(
  __dirname,
  'src/components/illustration/illustrations'
);

const outputIconFile = join(iconsDir, 'index.js');
const outputIllustrationFile = join(illustrationsDir, 'index.js');

const getComponentName = (file) => basename(file, extname(file));

const iconFiles = (await readdir(iconsDir)).filter((file) =>
  ['.jsx', '.tsx'].includes(extname(file))
);

const illustrationFiles = (await readdir(illustrationsDir)).filter((file) =>
  ['.jsx', '.tsx'].includes(extname(file))
);

const iconLines = iconFiles.map((file) => {
  const baseName = basename(file, extname(file));
  const exportName = getComponentName(file);
  return `export { ${exportName} } from './${baseName}';`;
});

const illustrationLines = illustrationFiles.map((file) => {
  const baseName = basename(file, extname(file));
  const exportName = getComponentName(file);
  return `export { ${exportName} } from './${baseName}';`;
});

await writeFile(outputIconFile, iconLines.join('\n') + '\n', 'utf8');
await writeFile(
  outputIllustrationFile,
  illustrationLines.join('\n') + '\n',
  'utf8'
);

console.log(
  `✅ Generated ${outputIconFile} with ${iconFiles.length} named exports.`
);
console.log(
  `✅ Generated ${outputIllustrationFile} with ${illustrationFiles.length} named exports.`
);

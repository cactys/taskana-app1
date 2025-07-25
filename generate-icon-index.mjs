/**
 * Скрипт для автоматической генерации файла index.js с именованными экспортами
 * для компонентов иконок и иллюстраций.
 *
 * Сканирует директории icons и illustrations на наличие файлов .jsx и .tsx,
 * формирует строки экспортов и записывает их в index.js в соответствующих папках.
 *
 * Используется ES-модули и асинхронные функции.
 *
 * *Запуск из корня проекта: npm run build:icons
 */

import { readdir, writeFile } from 'fs/promises';
import { extname, basename, join, resolve } from 'path';
import { fileURLToPath } from 'url';

// Абсолютный путь к текущей директории скрипта
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Пути к папкам с иконками и иллюстрациями
const iconsDir = resolve(__dirname, 'src/components/icon/icons');
const illustrationsDir = resolve(__dirname, 'src/components/illustration/illustrations');

// Пути к файлам вывода index.js
const outputIconFile = join(iconsDir, 'index.js');
const outputIllustrationFile = join(illustrationsDir, 'index.js');

/**
 * Возвращает имя компонента, извлекая имя файла без расширения.
 * @param {string} file - Имя файла с расширением
 * @returns {string} - Имя компонента (без расширения)
 */
const getComponentName = (file) => basename(file, extname(file));

/**
 * Считывает список файлов в директории, фильтрует по расширениям .jsx и .tsx
 * @param {string} dir - Путь к директории
 * @returns {Promise<string[]>} - Массив подходящих имён файлов
 */
async function getComponentFiles(dir) {
  const files = await readdir(dir);
  return files.filter((file) => ['.jsx', '.tsx'].includes(extname(file)));
}

/**
 * Формирует строки с именованными экспортами для файлов из директории
 * @param {string[]} files - Список имён файлов
 * @returns {string[]} - Массив строк с экспортами
 */
const generateExportLines = (files) =>
  files.map((file) => {
    const baseName = basename(file, extname(file));
    const exportName = getComponentName(file);
    return `export { ${exportName} } from './${baseName}';`;
  });

async function main() {
  const iconFiles = await getComponentFiles(iconsDir);
  const illustrationFiles = await getComponentFiles(illustrationsDir);

  const iconLines = generateExportLines(iconFiles);
  const illustrationLines = generateExportLines(illustrationFiles);

  await writeFile(outputIconFile, iconLines.join('\n') + '\n', 'utf8');
  await writeFile(outputIllustrationFile, illustrationLines.join('\n') + '\n', 'utf8');

  console.log(`✅ Generated ${outputIconFile} with ${iconFiles.length} named exports.`);
  console.log(`✅ Generated ${outputIllustrationFile} with ${illustrationFiles.length} named exports.`);
}

main().catch((err) => {
  console.error('❌ Ошибка при генерации index.js:', err);
  process.exit(1);
});

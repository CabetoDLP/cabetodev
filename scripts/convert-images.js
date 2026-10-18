import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Configuración de carpetas a procesar dentro de public/
const TARGET_FOLDERS = [
  { path: './public/profile', maxWidth: 800, quality: 90 },       // Foto de perfil (Alta calidad)
  { path: './public/projects-icons', maxWidth: 160, quality: 85 }, // Iconos de proyectos (Pequeños)
  { path: './public/Technologies', maxWidth: 128, quality: 85 },   // Iconos de tecnologías
  { path: './public/icons', maxWidth: 128, quality: 85 },          // Iconos generales
];

async function processFolder({ path: folderPath, maxWidth, quality }) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️ La carpeta no existe, omitiendo: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    // Procesamos solo imágenes rasterizadas (ignoramos SVG y favicons directos)
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      const inputFile = path.join(folderPath, file);
      const filenameWithoutExt = path.basename(file, ext);
      
      // Guardamos la versión optimizada WebP en la misma carpeta
      const outputFile = path.join(folderPath, `${filenameWithoutExt}.webp`);
      const tempOutputFile = path.join(folderPath, `${filenameWithoutExt}_optimized.webp`);

      try {
        await sharp(inputFile)
          .resize({
            width: maxWidth,
            withoutEnlargement: true, // Evita agrandar imágenes si son más pequeñas
          })
          .webp({
            quality: quality,
            effort: 6, // Máximo esfuerzo de compresión
            smartSubsample: true,
          })
          .toFile(tempOutputFile);

        // Reemplazamos el archivo original/anterior por la versión optimizada
        if (fs.existsSync(outputFile) && inputFile !== outputFile) {
          fs.unlinkSync(inputFile); // Elimina el .png / .jpeg original si ya existe WebP
        }
        fs.renameSync(tempOutputFile, outputFile);

        console.log(`✅ ¡Optimizado!: ${outputFile}`);
      } catch (err) {
        console.error(`❌ Error en ${file}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('🚀 Iniciando optimización de imágenes para cabeto-dev-portfolio...\n');
  for (const folderConfig of TARGET_FOLDERS) {
    await processFolder(folderConfig);
  }
  console.log('\n🎉 ¡Todas las imágenes de public/ han sido optimizadas exitosamente!');
}

run();
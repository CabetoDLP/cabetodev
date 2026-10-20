import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Configuración de carpetas a procesar dentro de public/
const TARGET_FOLDERS = [
  { path: './public/profile', maxWidth: 800, quality: 90 },       // Foto de perfil (Alta calidad)
  { path: './public/projects-icons', maxWidth: 160, quality: 85 }, // Iconos de proyectos (Pequeños)
  { path: './public/Technologies', maxWidth: 128, quality: 85 },   // Iconos de tecnologías
  { path: './public/icons', maxWidth: 128, quality: 85 },          // Iconos generales
  { path: './public/benchmarks', maxWidth: 1200, quality: 85 },    // Capturas de PageSpeed
];

async function processFolder({ path: folderPath, maxWidth, quality }) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️ La carpeta no existe, omitiendo: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    // Procesamos solo JPG, JPEG y PNG. Ignoramos .webp para no re-procesarlos.
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputFile = path.join(folderPath, file);
      const filenameWithoutExt = path.basename(file, ext);
      
      const outputFile = path.join(folderPath, `${filenameWithoutExt}.webp`);
      const tempOutputFile = path.join(folderPath, `${filenameWithoutExt}_optimized.webp`);

      // Si el archivo .webp ya existe, omitimos la conversión por completo
      if (fs.existsSync(outputFile)) {
        console.log(`⏩ Omitiendo (WebP ya existe): ${file}`);
        continue;
      }

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

        // Renombramos el archivo temporal al nombre final .webp
        fs.renameSync(tempOutputFile, outputFile);

        // NOTA: El archivo original (inputFile) se conserva intacto.
        console.log(`✅ ¡Generado WebP!: ${outputFile}`);
      } catch (err) {
        // En caso de error, limpiamos el archivo temporal si se creó
        if (fs.existsSync(tempOutputFile)) {
          fs.unlinkSync(tempOutputFile);
        }
        console.error(`❌ Error procesando ${file}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('🚀 Iniciando conversión e imágenes para cabeto-dev-portfolio...\n');
  for (const folderConfig of TARGET_FOLDERS) {
    await processFolder(folderConfig);
  }
  console.log('\n🎉 ¡Proceso finalizado con éxito!');
}

run();
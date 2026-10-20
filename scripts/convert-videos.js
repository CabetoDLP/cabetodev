import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';

// Configurar el ejecutable de FFmpeg
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputFolder = './public/videos';
const outputFolder = './public/demo-videos';

// Asegurar que la carpeta de destino exista
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

function convertVideo(inputFile, outputFile, fileName) {
  return new Promise((resolve) => {
    console.log(`🎬 Convirtiendo ${fileName} a WebM...`);

    ffmpeg(inputFile)
      .outputOptions([
        '-c:v libvpx-vp9', // Códec WebM VP9
        '-crf 35',         // Factor de calidad/peso constante
        '-b:v 0',
      ])
      .toFormat('webm')
      .on('end', () => {
        console.log(`✅ ¡Convertido con éxito!: ${outputFile}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`❌ Error en ${fileName}:`, err.message);
        resolve(); // Resuelve para continuar con el siguiente video si falla uno
      })
      .save(outputFile);
  });
}

async function run() {
  if (!fs.existsSync(inputFolder)) {
    console.log(`⚠️ La carpeta de origen no existe: ${inputFolder}`);
    return;
  }

  console.log('🚀 Iniciando conversión de videos para cabeto-dev-portfolio...\n');

  const files = fs.readdirSync(inputFolder);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    // Procesamos solo videos .mp4
    if (ext === '.mp4') {
      const filenameWithoutExt = path.basename(file, ext);
      const inputFile = path.join(inputFolder, file);
      const outputFile = path.join(outputFolder, `${filenameWithoutExt}.webm`);

      // Si el archivo .webm ya existe en la carpeta de destino, se omite por completo
      if (fs.existsSync(outputFile)) {
        console.log(`⏩ Omitiendo (WebM ya existe): ${filenameWithoutExt}.webm`);
        continue;
      }

      await convertVideo(inputFile, outputFile, file);
    }
  }

  console.log('\n🎉 ¡Proceso de video finalizado con éxito!');
}

run();
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

fs.readdirSync(inputFolder).forEach((file) => {
  if (path.extname(file) === '.mp4') {
    const inputFile = path.join(inputFolder, file);
    const outputFile = path.join(outputFolder, `${path.basename(file, '.mp4')}.webm`);

    console.log(`Convirtiendo ${file} a WebM...`);

    ffmpeg(inputFile)
      .outputOptions([
        '-c:v libvpx-vp9', // Códec WebM VP9
        '-crf 35',         // Factor de calidad/peso constante
        '-b:v 0',
      ])
      .toFormat('webm')
      .on('end', () => console.log(`✓ ¡Convertido con éxito!: ${outputFile}`))
      .on('error', (err) => console.error(`Error en ${file}:`, err.message))
      .save(outputFile);
  }
});
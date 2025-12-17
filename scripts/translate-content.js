import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar la API key desde .env.local
const loadEnv = () => {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/GEMINI_API_KEY=(.+)/);
    if (match) {
      return match[1].trim();
    }
  }
  throw new Error('No se encontró GEMINI_API_KEY en .env.local');
};

const apiKey = loadEnv();
const genAI = new GoogleGenAI({ apiKey });

async function translateToEnglish(text) {
  const prompt = `Translate the following Spanish text to English.
  Keep the translation professional and suitable for a DJ/music producer press kit.
  Maintain any proper nouns (artist names, label names, song titles) as they are.
  Return ONLY the English translation, nothing else.

  Spanish text: ${text}`;

  const result = await genAI.models.generateContent({
    model: "gemini-pro",
    contents: prompt
  });

  const translation = result.text.trim();
  return translation;
}

async function translateObject(obj, path = '') {
  const translated = {};

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = path ? `${path}.${key}` : key;

    if (typeof value === 'string') {
      console.log(`Traduciendo: ${currentPath}`);
      translated[key] = await translateToEnglish(value);
      // Pequeña pausa para no saturar la API
      await new Promise(resolve => setTimeout(resolve, 500));
    } else if (Array.isArray(value)) {
      translated[key] = [];
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === 'string') {
          console.log(`Traduciendo: ${currentPath}[${i}]`);
          translated[key][i] = await translateToEnglish(value[i]);
          await new Promise(resolve => setTimeout(resolve, 500));
        } else if (typeof value[i] === 'object') {
          translated[key][i] = await translateObject(value[i], `${currentPath}[${i}]`);
        } else {
          translated[key][i] = value[i];
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      translated[key] = await translateObject(value, currentPath);
    } else {
      translated[key] = value;
    }
  }

  return translated;
}

async function main() {
  console.log('🌍 Iniciando traducción automática al inglés...\n');

  // Leer el JSON actual
  const jsonPath = path.join(__dirname, '..', 'public', 'data', 'artists.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // Obtener el contenido en español
  const spanishContent = data.artists['camilo-garcia'].content.es;

  console.log('📝 Traduciendo contenido en español...\n');

  // Traducir todo el contenido
  const englishContent = await translateObject(spanishContent);

  // Actualizar el JSON con el contenido traducido
  data.artists['camilo-garcia'].content.en = englishContent;

  // Guardar el JSON actualizado
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');

  // También actualizar en /data/
  const dataJsonPath = path.join(__dirname, '..', 'data', 'artists.json');
  fs.writeFileSync(dataJsonPath, JSON.stringify(data, null, 2), 'utf-8');

  console.log('\n✅ Traducción completada!');
  console.log('📁 Archivos actualizados:');
  console.log('   - public/data/artists.json');
  console.log('   - data/artists.json');
}

main().catch(console.error);

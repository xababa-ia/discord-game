import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3002;

// Cors pour autoriser Discord à intégrer l'application
app.use(cors({
  origin: ['https://discord.com', 'https://ptb.discord.com', 'https://canary.discord.com'],
  credentials: true,
}));

// Headers requis pour Discord Embedded App (allow framing from Discord)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Content-Security-Policy', "frame-ancestors https://discord.com https://ptb.discord.com https://canary.discord.com;");
  res.setHeader('X-Frame-Options', 'ALLOW-FROM https://discord.com');
  next();
});

// Servir les fichiers statiques du client React (build)
app.use(express.static(join(__dirname, '../client/dist')));

// Endpoint de santé
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rediriger toutes les autres requêtes vers index.html (pour le routing React)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🕹️  Discord Narrative Game server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🎮 Build the client first with: npm run build (in client/ directory)`);
});

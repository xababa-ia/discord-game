# 🎭 Jeu Narratif Discord - Embedded App

Une activité Discord (jeu narratif) avec animations CSS, personnages, et histoires branchées.

## 🚀 Démarrage rapide

### 1. Configuration Discord Developer Portal

1. Allez sur [Discord Developer Portal](https://discord.com/developers/applications)
2. Créez une nouvelle application
3. Dans **OAuth2 → General Information**:
   - Copiez votre **Client ID**
   - Ajoutez une **Redirect** : `http://localhost:3000` (pour développement)
4. Dans **Settings → Embedded App**:
   - Activez **Embedded App SDK**
5. Dans **Install App → Link**:
   - Ajoutez l'URL de votre application (ex: `http://localhost:3000`)

### 2. Configuration du projet

Dans le dossier `client/` :

```bash
# Copiez le fichier d'exemple d'environnement
cp .env.example .env
```

Éditez `.env` et ajoutez votre Client ID Discord :

```
VITE_DISCORD_CLIENT_ID=votre_client_id_ici
```

### 3. Installation des dépendances

```bash
# Dans le dossier client/
cd client
npm install

# Dans le dossier server/
cd ../server
npm install
```

### 4. Build et lancement

```bash
# Depuis la racine du projet :
npm run build:client     # Construit l'application React
npm run dev:server      # Lance le serveur Express
```

Ou séparément :

```bash
# Terminal 1 : Build client
cd client
npm run build

# Terminal 2 : Lancer le serveur
cd server
npm run dev
```

L'application sera disponible sur `http://localhost:3001`

### 5. Tester dans Discord

1. Dans un **voice channel**, cliquez sur l'icône Activité (🎮)
2. Sélectionnez votre application (elle doit apparaître)
3. Le jeu se lance dans l'iframe !

---

## 🗂️ Structure du projet

```
discord-game-test/
├── client/                 # Application React (Discord Activity)
│   ├── src/
│   │   ├── components/    # Composants React (SceneDisplay, Choices)
│   │   ├── types.ts       # Types TypeScript
│   │   ├── storyData.ts   # Histoire et personnages
│   │   ├── StoryContext.tsx # Gestion de l'état du jeu
│   │   ├── discordSdk.ts  # Intégration Discord SDK
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── server/                 # Serveur Express (pour production)
│   ├── server.js
│   └── package.json
├── CLAUDE.md
└── README.md
```

---

## 🎮 Comment créer/modifier l'histoire

L'histoire est définie dans `client/src/storyData.ts` :

1. **Définir les personnages** avec leurs images par état
2. **Créer les scènes** ( dialogues + choix )
3. **Créer les liens** entre scènes via les choix

Exemple de scène :

```typescript
{
  id: 'scene_1',
  backgroundUrl: 'https://...',
  dialogues: [
    {
      characterId: 'hero',
      text: 'Bonjour !',
      characterState: 'happy',
    },
  ],
  choices: [
    {
      id: 'choice_1',
      text: '► Répondre',
      nextSceneId: 'scene_2',
    },
  ],
}
```

---

## 🖼️ Images

Pour utiliser de vraies images :

1. Ajoutez vos images dans `client/public/` ou hébergez-les en ligne
2. Référencez-les dans `storyData.ts` :

```typescript
images: {
  neutral: '/images/hero-neutral.png',
  happy: '/images/hero-happy.png',
}
```

---

## 🛠️ Technologies

- **React 18** + TypeScript
- **Vite** (build rapide)
- **@discord/embedded-app-sdk** (communication avec Discord)
- **CSS animations** (respiration, transitions, effets)
- **Express** (serveur de production)

---

## 📦 Scripts utiles

**Client :**
- `npm run dev` - Mode développement (hot reload)
- `npm run build` - Build production dans `dist/`
- `npm run preview` - Preview du build

**Server :**
- `npm run dev` - Lance le serveur en mode dev

**Racine :**
- `npm run build && npm start` - Full production build

---

## ⚠️ Notes importantes

- **Pas de persistance** : la progression n'est pas sauvegardée entre sessions (une partie = un parcours)
- **Animations CSS** : sont possibles car c'est une application web complète dans l'iframe Discord
- **Taille d'iframe** : 800x600 recommandé par Discord
- **HTTPS requis** : pour la production, Discord nécessite HTTPS

---

## 📚 Ressources

- [Discord Embedded App SDK Docs](https://discord.com/developers/docs/embedded-apps)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Vite Docs](https://vitejs.dev/)

---

Profitez bien du jeu ! 🎉

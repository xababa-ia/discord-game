# ⚡ Quick Start - Jeu Narratif Discord

## 5 minutes pour tester le jeu

### 1. Configurer l'application Discord

1. Allez sur https://discord.com/developers/applications
2. Créez une nouvelle application
3. Copiez le **Client ID**
4. Activez **Embedded App SDK** dans Settings → Embedded App
5. Ajoutez un Redirect : `http://localhost:3001`

### 2. Configurer le projet

```bash
cd client
cp .env.example .env
```

Éditez `.env` :
```
VITE_DISCORD_CLIENT_ID=le_client_id_que_vous_avez_copié
```

### 3. Installer et lancer

```bash
# Depuis la racine du projet
npm run install:all    # Installe toutes les dépendances
npm run dev           # Build le client + lance le serveur
```

Ouvrez http://localhost:3001 dans votre navigateur.

### 4. Tester l'histoire

- Cliquez sur les boutons pour faire des choix
- Observez les personnages (placeholder images) changer d'état
- Les dialogues s'affichent avec des animations CSS
- Explorez les différentes branches de l'histoire !

### 5. Intégrer dans Discord

1. Dans Discord Dev Portal → Install App
2. Cliquez sur l'URL d'installation fournie
3. Rejoignez un **voice channel** dans votre serveur
4. Cliquez sur l'icône Activité (🎮) en bas
5. Sélectionnez votre application
6. Le jeu se lance dans l'iframe !

---

## 🎯 Prochaines étapes

1. **Ajouter vos propres images** → Voir `client/ASSETS.md`
2. **Écrire votre histoire** → Modifier `client/src/storyData.ts`
3. **Déployer en ligne** → Voir `client/DEPLOY.md`

---

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite 4 (build)
- Discord Embedded App SDK
- Express (serveur de prod)
- CSS animations

---

## 📦 Structure du projet

```
.
├── client/           # Application React (Discord Activity)
│   ├── src/
│   │   ├── storyData.ts    # ✏️ MODIFIEZ VOTRE HISTOIRE ICI
│   │   ├── components/
│   │   └── App.tsx
│   └── public/            # 📁 Ajoutez vos images ici
├── server/           # Serveur Express
└── README.md         # Documentation complète
```

---

Amusez-vous bien ! 🎮✨

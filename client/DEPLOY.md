# 🚀 Déploiement de l'Activity Discord

Ce document explique comment déployer l'application en ligne pour qu'elle fonctionne comme une Discord Activity.

## 📦 Options d'hébergement

### Option 1 - Vercel (Recommandé pour la simplicité)
- Déploiement automatique depuis Git
- HTTPS inclus
- Intégration Discord facile

### Option 2 - Netlify
- Similaire à Vercel
- Facile à configurer

### Option 3 - Hébergement personnalisé (Railway, Fly.io, etc.)
- Plus de contrôle
- Nécessite configuration manuelle

---

## 🔧 Configuration Discord Developer Portal

1. **Créer/modifier l'application** sur https://discord.com/developers/applications

2. **OAuth2 → General Information**
   - Copiez votre **Client ID** (gardez-le pour `.env`)

3. **OAuth2 → Redirects**
   - Ajoutez votre URL de production (ex: `https://mon-jeu.vercel.app`)
   - Pour le dev local : `http://localhost:3001`

4. **Settings → Embedded App**
   - ✅ Activez **Embedded App SDK**

5. **Install App → Link**
   - Type : **Embedded App**
   - URL de l'application : votre URL déployée

6. **OAuth2 → URL du logo** (optionnel)
   - Ajoutez une image pour votre activité

---

## 🌐 Déploiement sur Vercel

### 1. Préparer le projet

Le répertoire racince contient déjà la configuration pour Vercel. Vercel détectera automatiquement le dossier `client/` comme projet React.

### 2. Variables d'environnement

Dans Vercel Dashboard → Project Settings → Environment Variables :

```
VITE_DISCORD_CLIENT_ID = votre_client_id
```

### 3. Build

Vercel va automatiquement :
- Installe `npm` packages dans `client/`
- Exécute `npm run build` dans `client/`
- Déploie le dossier `client/dist/`

### 4. Output

Votre activité sera disponible à l'URL donnée par Vercel, ex :
`https://mon-jeu-discord.vercel.app`

---

## 🔗 Tester en production

1. Attendez que le déploiement soit terminé
2. Dans Discord Developer Portal → Install App
3. Cliquez sur le lien d'installation
4. Dans un **voice channel**, cliquez sur l'icône Activité 🎮
5. Votre activité devrait apparaître et se lancer !

---

## ⚠️ Problèmes courants

### "Activity cannot be loaded"
- Vérifiez que HTTPS est activé (Discord nécessite HTTPS en production)
- Vérifiez le CORS (le serveur doit autoriser `discord.com`)

### "Invalid redirect URI"
- L'URL du redirect dans Discord Dev Portal doit exactement matcher l'URL déployée
- N'oubliez pas le trailing slash ou https://

### Images ne chargent pas
- Placez les images dans `client/public/` et référencez-les avec un chemin relatif commençant par `/`

### Erreur de SDK Discord
- Vérifiez que `VITE_DISCORD_CLIENT_ID` est bien défini dans les variables d'environnement
- Vérifiez que Embedded App SDK est activé dans les paramètres Discord

---

## 📝 Notes importantes

- **Taille de l'iframe** : Discord ouvre l'activité dans une iframe de **800x600px** (minimum)
- **Responsive** : testez en 800x600 pour vous assurer que l'UI fonctionne
- **Chargement** : Discord a un timeout de ~15s pour charger l'activité
- **HTTPS obligatoire** : pas d'HTTP en production

---

🎉 **Bon déploiement !**

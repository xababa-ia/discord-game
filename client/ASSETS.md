# 🖼️ Gestion des images

## 📁 Structure des assets

```
client/public/
├── images/
│   ├── characters/       # Images des personnages
│   │   ├── hero-neutral.png
│   │   ├── hero-happy.png
│   │   ├── hero-sad.png
│   │   ├── hero-angry.png
│   │   ├── stranger-neutral.png
│   │   └── ...
│   └── backgrounds/      # Images de fond pour les scènes
│       ├── forest.jpg
│       ├── village.jpg
│       └── ...
└── sounds/              # (Optionnel) Effets sonores
    ├── click.mp3
    └── ...
```

## 🎭 Images des personnages

Pour chaque personnage, vous devez fournir une image pour **chaque état** défini dans `storyData.ts`.

Exemple pour le héros (`hero`) :
```typescript
{
  id: 'hero',
  name: 'Toi',
  defaultState: 'neutral',
  images: {
    neutral: '/images/characters/hero-neutral.png',
    happy: '/images/characters/hero-happy.png',
    sad: '/images/characters/hero-sad.png',
    angry: '/images/characters/hero-angry.png',
  },
}
```

### Format recommandé :
- **PNG** avec transparence (fond transparent)
- **Ratio** : portrait (environ 2:3 hauteur/largeur)
- **Taille** : ~200x300px minimum
- **Style** : cohérent entre les états (même personnage, même style)

### Où stocker :
Placez les images dans `client/public/images/characters/`

## 🌄 Images de fond (backgrounds)

Dans chaque scène, vous pouvez définir une image de fond :

```typescript
{
  id: 'scene_1',
  backgroundUrl: '/images/backgrounds/forest.jpg',
  // ...
}
```

### Format recommandé :
- **JPG** ou **WebP** (meilleure compression)
- **Ratio** : paysage (16:9 recommandé, ex: 1920x1080)
- **Qualité** : suffisante pour un affichage web (70-80%)
- **Taille fichier** : garder sous 500KB pour des temps de chargement raisonnables

### Où stocker :
Placez les images dans `client/public/images/backgrounds/`

## 🎨 Création des assets

### Option 1 - Génération IA
Utilisez Midjourney, DALL-E, Stable Diffusion pour générer :
- Un personnage dans différents états (prompt : ajoutez "neutral expression", "happy smile", etc.)
- Des backgrounds cohérents avec l'ambiance

### Option 2 - Assets exists
- [OpenGameArt](https://opengameart.org/)
- [itch.io](https://itch.io/game-assets)
- [GameDev Market](https://www.gamedevmarket.net/)

### Option 3 - Faire soi-même
- Aseprite (pixel art)
- Krita / Photoshop / Procreate
- Illustrator / Figma (vectoriel)

## 🔄 Animation "respiration"

L'animation de respiration est gérée automatiquement en CSS dans `index.css` :

```css
.character-image {
  animation: breathe 3s ease-in-out infinite;
}
```

Pour un effet plus prononcé :
```css
/* Dans index.css, modifiez la keyframes breathe */
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); } /* plus prononcé */
}
```

## 📏 Optimisation

- Compressez les images avec [Squoosh](https://squoosh.app) ou [TinyPNG](https://tinypng.com)
- Utilisez WebP pour les backgrounds (meilleure compression)
- Limitez le nombre total d'images pour éviter les longs chargements

## 🎯 Checklist avant déploiement

- [ ] Toutes les images sont dans `client/public/`
- [ ] Les URLs dans `storyData.ts` sont correctes
- [ ] Les images sont optimisées (taille < 500KB chacune)
- [ ] Les formats sont supportés (PNG, JPG, WebP, GIF)
- [ ] Test en local : le jeu charge bien toutes les images

---

Profitez bien de vos beaux assets ! 🎨

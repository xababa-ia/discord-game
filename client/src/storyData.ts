import { Story, Character } from './types';

// Définition des personnages
export const characters: Character[] = [
  {
    id: 'hero',
    name: 'Toi',
    defaultState: 'neutral',
    images: {
      neutral: 'https://placehold.co/200x300/667eea/white?text=Héros',
      happy: 'https://placehold.co/200x300/4ade80/white?text=Heureux',
      sad: 'https://placehold.co/200x300/60a5fa/white?text=Triste',
      angry: 'https://placehold.co/200x300/f87171/white?text=Encolère',
    },
  },
  {
    id: 'mysterious_stranger',
    name: 'Étranger',
    defaultState: 'neutral',
    images: {
      neutral: 'https://placehold.co/200x300/764ba2/white?text=Étranger',
      friendly: 'https://placehold.co/200x300/10b981/white?text=Amical',
      suspicious: 'https://placehold.co/200x300/f59e0b/white?text=Méfiant',
    },
  },
  {
    id: 'village_elder',
    name: 'Ancien du Village',
    defaultState: 'neutral',
    images: {
      neutral: 'https://placehold.co/200x300/8b5cf6/white?text=Ancien',
      wise: 'https://placehold.co/200x300/3b82f6/white?text=Sage',
      worried: 'https://placehold.co/200x300/ef4444/white?text=Inquiet',
    },
  },
];

// Histoire exemple : "La Forêt Oubliée"
export const storyData: Story = {
  title: 'La Forêt Oubliée',
  characters,
  startSceneId: 'scene_1',
  scenes: [
    // Scène 1 - Introduction
    {
      id: 'scene_1',
      backgroundUrl: 'https://placehold.co/1200x600/1a1a2e/white?text=Forêt+Obscure',
      dialogues: [
        {
          characterId: 'hero',
          text: 'Je marche dans cette forêt depuis des heures... La nuit tombe, et je suis complètement perdu.',
          characterState: 'neutral',
        },
        {
          characterId: 'hero',
          text: 'Soudain, j\'entends un bruit étrange derrière les arbres.',
          characterState: 'neutral',
        },
      ],
      choices: [
        {
          id: 'choice_1a',
          text: '► Partir en courant',
          nextSceneId: 'scene_run',
        },
        {
          id: 'choice_1b',
          text: '► Rester immobile et écouter',
          nextSceneId: 'scene_listen',
        },
        {
          id: 'choice_1c',
          text: '► Appeler à l\'aide',
          nextSceneId: 'scene_call',
        },
      ],
    },

    // Scène 2a - Courir
    {
      id: 'scene_run',
      backgroundUrl: 'https://placehold.co/1200x600/2d2d44/white?text=Forêt+Enfuite',
      dialogues: [
        {
          characterId: 'hero',
          text: 'Je prends mes jambes à mon cou et je cours aussi vite que possible.',
          characterState: 'neutral',
        },
        {
          characterId: 'hero',
          text: 'Mes pieds trébuchent sur des racines, mais je continue. Je dois sortir de cet endroit !',
          characterState: 'neutral',
        },
        {
          characterId: 'village_elder',
          text: 'Je vous en prie, arrêtez ! Vous ne savez pas où vous allez !',
          characterState: 'worried',
        },
      ],
      choices: [
        {
          id: 'choice_2a_continue',
          text: '► Continuer de fuir (ignorer l\'appel)',
          nextSceneId: 'scene_lost',
        },
        {
          id: 'choice_2a_stop',
          text: '► M\'arrêter et me retourner',
          nextSceneId: 'scene_meet_elder',
        },
      ],
    },

    // Scène 2b - Écouter
    {
      id: 'scene_listen',
      backgroundUrl: 'https://placehold.co/1200x600/2d2d44/white?text=Forét+Silencieuse',
      dialogues: [
        {
          characterId: 'hero',
          text: 'Je me fige, retenant mon souffle. Le bruit se rapproche...',
          characterState: 'neutral',
        },
        {
          characterId: 'mysterious_stranger',
          text: 'Bonjour voyageur. Tu sembles perdu.',
          characterState: 'neutral',
        },
      ],
      choices: [
        {
          id: 'choice_2b_talk',
          text: '► Répondre poliment',
          nextSceneId: 'scene_meet_stranger_friendly',
        },
        {
          id: 'choice_2b_fight',
          text: '► Attaquer sans prévenir',
          nextSceneId: 'scene_attack',
        },
        {
          id: 'choice_2b_ignore',
          text: '► Faire semblant de ne pas avoir entendu',
          nextSceneId: 'scene_ignore',
        },
      ],
    },

    // Scène 2c - Appeler
    {
      id: 'scene_call',
      backgroundUrl: 'https://placehold.co/1200x600/2d2d44/white?text=Forêt+Écho',
      dialogues: [
        {
          characterId: 'hero',
          text: 'À L\'AIDE ! Quelqu\'un peut-il m\'entendre ?',
          characterState: 'neutral',
        },
        {
          characterId: 'mysterious_stranger',
          text: 'Ta voix résonne dans la forêt... mais es-tu sûr de vouloir attirer l\'attention ?',
          characterState: 'suspicious',
        },
      ],
      choices: [
        {
          id: 'choice_2c_apologize',
          text: '► Présenter ses excuses',
          nextSceneId: 'scene_meet_stranger_suspicious',
        },
        {
          id: 'choice_2c_defiant',
          text: '► Faire face avec confiance',
          nextSceneId: 'scene_meet_stranger_suspicious',
        },
      ],
    },

    // Scène 3a - Rencontrer l'ancien
    {
      id: 'scene_meet_elder',
      backgroundUrl: 'https://placehold.co/1200x600/4ade80/white?text= Clairière',
      dialogues: [
        {
          characterId: 'village_elder',
          text: 'Je vois que tu as du cran, jeune voyageur. Mais cette forêt est dangereuse pour les imprudents.',
          characterState: 'wise',
        },
        {
          characterId: 'hero',
          text: 'Qui êtes-vous ? Et que faites-vous ici ?',
          characterState: 'neutral',
        },
        {
          characterId: 'village_elder',
          text: 'Je suis le gardien de ce bois. Si tu cherches à sortir, tu devras prouver ta valeur.',
          characterState: 'wise',
        },
      ],
      choices: [
        {
          id: 'choice_3a_challenge',
          text: '► Accepter le défi',
          nextSceneId: 'scene_challenge_elder',
        },
        {
          id: 'choice_3a_negotiate',
          text: '► Négocier pacifiquement',
          nextSceneId: 'scene_peaceful_elder',
        },
      ],
    },

    // Scène 3b - Rencontrer l'étranger (friendly)
    {
      id: 'scene_meet_stranger_friendly',
      backgroundUrl: 'https://placehold.co/1200x600/60a5fa/white?text=Rencontre+Amicale',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Bien parlé. Je peux t\'aider à sortir de cette forêt, mais tu devras me rendre un service.',
          characterState: 'friendly',
        },
        {
          characterId: 'hero',
          text: 'Quel genre de service ?',
          characterState: 'neutral',
        },
        {
          characterId: 'mysterious_stranger',
          text: 'Une vieille dette à régler. Intéressé ?',
          characterState: 'friendly',
        },
      ],
      choices: [
        {
          id: 'choice_3b_accept',
          text: '► Accepter l\'accord',
          nextSceneId: 'scene_quest_accepted',
        },
        {
          id: 'choice_3b_refuse',
          text: '► Refuser poliment',
          nextSceneId: 'scene_quest_refused',
        },
      ],
    },

    // Scène 3c - Attaquer l'étranger
    {
      id: 'scene_attack',
      backgroundUrl: 'https://placehold.co/1200x600/f87171/white?text=Combat',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Tu oses attaquer ?!',
          characterState: 'angry',
        },
        {
          characterId: 'hero',
          text: '(Je frappe sans hésiter)',
          characterState: 'angry',
        },
        {
          characterId: 'mysterious_stranger',
          text: 'Tu es plus fort que tu n\'en as l\'air. Mais souviens-toi : chaque action a une conséquence.',
          characterState: 'angry',
        },
      ],
      choices: [
        {
          id: 'choice_3c_continue',
          text: '► Porter le coup final',
          nextSceneId: 'scene_villain_defeated',
        },
        {
          id: 'choice_3c_spare',
          text: '► Épargner l\'étranger',
          nextSceneId: 'scene_mercy_shown',
        },
      ],
    },

    // Scène 4a - Défi de l'ancien
    {
      id: 'scene_challenge_elder',
      backgroundUrl: 'https://placehold.co/1200x600/8b5cf6/white?text=Épreuve',
      dialogues: [
        {
          characterId: 'village_elder',
          text: 'Bravo pour ton courage. L\'épreuve est simple : réponds correctement à mes questions.',
          characterState: 'wise',
        },
        {
          characterId: 'village_elder',
          text: 'Quelle est la vraie richesse ?',
          characterState: 'wise',
        },
      ],
      choices: [
        {
          id: 'choice_4a_wisdom',
          text: '► La sagesse',
          nextSceneId: 'scene_good_ending',
        },
        {
          id: 'choice_4a_gold',
          text: '► L\'or et le pouvoir',
          nextSceneId: 'scene_bad_ending',
        },
      ],
    },

    // Scène 4b - Accord avec l'étranger
    {
      id: 'scene_quest_accepted',
      backgroundUrl: 'https://placehold.co/1200x600/3b82f6/white?text=Quête+Acceptée',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Excellent. Tu dois récupérer un artefact ancien dans les ruines derrière moi.',
          characterState: 'friendly',
        },
        {
          characterId: 'hero',
          text: 'Et ensuite ?',
          characterState: 'neutral',
        },
        {
          characterId: 'mysterious_stranger',
          text: 'Ensuite, tu seras libre de partir, et je te montrerai le chemin du retour.',
          characterState: 'friendly',
        },
      ],
      choices: [
        {
          id: 'choice_4a_quest',
          text: '► Accepter la quête',
          nextSceneId: 'scene_quest_adventure',
        },
        {
          id: 'choice_4b_cheat',
          text: '► Tenter de tromper l\'étranger',
          nextSceneId: 'scene_trick_attempt',
        },
      ],
    },

    // Scène perdu
    {
      id: 'scene_lost',
      backgroundUrl: 'https://placehold.co/1200x600/1a1a2e/white?text=Perdu',
      dialogues: [
        {
          characterId: 'hero',
          text: 'J\'ai couru sans m\'arrêter, mais maintenant je ne sais plus du tout où je suis...',
          characterState: 'sad',
        },
        {
          characterId: 'hero',
          text: 'La peur m\'envahit. La forêt semble se refermer sur moi.',
          characterState: 'sad',
        },
      ],
      choices: [
        {
          id: 'choice_5_rest',
          text: '► Se reposer et réfléchir',
          nextSceneId: 'scene_rest',
        },
        {
          id: 'choice_5_continue',
          text: '► Continuer à errer',
          nextSceneId: 'scene_wander',
        },
      ],
    },

    // Scène ignorer l'étranger
    {
      id: 'scene_ignore',
      backgroundUrl: 'https://placehold.co/1200x600/374151/white?text=Indifférence',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Hmm, tu choisis l\'indifférence... Intéressant.',
          characterState: 'suspicious',
        },
        {
          characterId: 'hero',
          text: '(Je fais comme si je n\'avais rien entendu, le cœur battant)',
          characterState: 'neutral',
        },
      ],
      choices: [
        {
          id: 'choice_6_wait',
          text: '► Attendre silencieusement',
          nextSceneId: 'scene_wait',
        },
        {
          id: 'choice_6_run',
          text: '► Profiter du silence pour fuir',
          nextSceneId: 'scene_sneak_away',
        },
      ],
    },

    // Scène Bonne Fin
    {
      id: 'scene_good_ending',
      backgroundUrl: 'https://placehold.co/1200x600/10b981/white?text=Bonne+Fin',
      dialogues: [
        {
          characterId: 'village_elder',
          text: 'Bien répondu, jeune voyageur. La sagesse est le vrai trésor.',
          characterState: 'wise',
        },
        {
          characterId: 'hero',
          text: 'Le chemin apparaît enfin devant moi, illuminé par la lune.',
          characterState: 'happy',
        },
        {
          characterId: 'narration',
          text: 'Vous avez découvert la sortie de la forêt, et peut-être même un peu de vous-même...',
          characterState: 'neutral',
        },
      ],
      choices: [
        {
          id: 'ending_restart',
          text: '► Rejouer',
          nextSceneId: 'scene_1',
        },
      ],
    },

    // Scène Mauvaise Fin
    {
      id: 'scene_bad_ending',
      backgroundUrl: 'https://placehold.co/1200x600/6b7280/white?text=Mauvaise+Fin',
      dialogues: [
        {
          characterId: 'village_elder',
          text: 'Malheureusement, l\'avidité n\'ouvre que des portes sombres...',
          characterState: 'worried',
        },
        {
          characterId: 'hero',
          text: 'Les arbres se transforment en murs infranchissables... Je suis piégé pour toujours.',
          characterState: 'sad',
        },
      ],
      choices: [
        {
          id: 'ending_restart_bad',
          text: '► Essayer à nouveau',
          nextSceneId: 'scene_1',
        },
      ],
    },

    // Autres fins à compléter...
    {
      id: 'scene_quest_adventure',
      backgroundUrl: 'https://placehold.co/1200x600/3b82f6/white?text=Quête+Acceptée',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Parfait. Les ruines sont juste là. Bonne chance, aventurier.',
          characterState: 'friendly',
        },
      ],
      choices: [
        {
          id: 'ending_restart_quest',
          text: '► Fin de la démo',
          nextSceneId: 'scene_1',
        },
      ],
    },

    {
      id: 'scene_meet_stranger_suspicious',
      backgroundUrl: 'https://placehold.co/1200x600/f59e0b/white?text=Rapprochement',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Tu as du caractère. Cela pourrait être utile... ou dangereux.',
          characterState: 'suspicious',
        },
      ],
      choices: [
        {
          id: 'choice_7_ally',
          text: '► Chercher à devenir allié',
          nextSceneId: 'scene_good_ending',
        },
        {
          id: 'choice_7_enemy',
          text: '► Refuser de se soumettre',
          nextSceneId: 'scene_bad_ending',
        },
      ],
    },

    // Scènes pour compléter l'arbre
    {
      id: 'scene_rest',
      backgroundUrl: 'https://placehold.co/1200x600/9ca3af/white?text=Repos',
      dialogues: [
        {
          characterId: 'hero',
          text: 'Je m\'assois contre un arbre et je respire profondément.',
          characterState: 'neutral',
        },
        {
          characterId: 'hero',
          text: 'Peut-être que la raison m\'est revenue... Je devrais chercher un point élevé.',
          characterState: 'neutral',
        },
      ],
      choices: [
        {
          id: 'choice_8_climb',
          text: '► Chercher une colline ou un arbre pour grimper',
          nextSceneId: 'scene_village_elder',
        },
        {
          id: 'choice_8_wander',
          text: '► Reprendre la marche au hasard',
          nextSceneId: 'scene_wander',
        },
      ],
    },

    {
      id: 'scene_wander',
      backgroundUrl: 'https://placehold.co/1200x600/4b5563/white?text=Errance',
      dialogues: [
        {
          characterId: 'hero',
          text: 'Je marche sans but. Les heures passent, et la forêt semble infinie.',
          characterState: 'sad',
        },
      ],
      choices: [
        {
          id: 'ending_wander',
          text: '► Fin (errer éternellement)',
          nextSceneId: 'scene_1',
        },
      ],
    },

    {
      id: 'scene_wait',
      backgroundUrl: 'https://placehold.co/1200x600/374151/white?text=Attente',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Tu es patient. Cela me plaît. Viens, je vais te montrer quelque chose.',
          characterState: 'friendly',
        },
      ],
      choices: [
        {
          id: 'choice_9_follow',
          text: '► Le suivre',
          nextSceneId: 'scene_quest_accepted',
        },
        {
          id: 'choice_9_refuse',
          text: '► Refuser',
          nextSceneId: 'scene_bad_ending',
        },
      ],
    },

    {
      id: 'scene_sneak_away',
      backgroundUrl: 'https://placehold.co/1200x600/1f2937/white?text=Fuite+Discrète',
      dialogues: [
        {
          characterId: 'hero',
          text: 'Je m\'éloigne doucement, sans faire de bruit.',
          characterState: 'neutral',
        },
        {
          characterId: 'hero',
          text: 'Par chance, je tombe sur un sentier balisé. Je le suis et finis par sortir de la forêt !',
          characterState: 'happy',
        },
      ],
      choices: [
        {
          id: 'ending_escape',
          text: '► Échapper à la forêt (bonne fin alternative)',
          nextSceneId: 'scene_good_ending',
        },
      ],
    },

    {
      id: 'scene_villain_defeated',
      backgroundUrl: 'https://placehold.co/1200x600/ef4444/white?text=Vainqueur',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Tu m\'as vaincu... Mais la forêt ne te laissera pas partir si facilement.',
          characterState: 'angry',
        },
        {
          characterId: 'hero',
          text: 'Je l\'ai vaincu, mais au quel prix ? Maintenant je dois affronter la forêt elle-même.',
          characterState: 'neutral',
        },
      ],
      choices: [
        {
          id: 'ending_defeat_villain',
          text: '► Fin (victoire pyrrhus)',
          nextSceneId: 'scene_1',
        },
      ],
    },

    {
      id: 'scene_mercy_shown',
      backgroundUrl: 'https://placehold.co/1200x600/10b981/white?text=Clémence',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Tu m\'épargnes... Je n\'ai pas l\'habitude. Je te dois la vie.',
          characterState: 'friendly',
        },
        {
          characterId: 'mysterious_stranger',
          text: 'La sortie est par là. Prends ce chemin, et ne reviens jamais.',
          characterState: 'friendly',
        },
      ],
      choices: [
        {
          id: 'ending_mercy',
          text: '► Partir en paix (bonne fin)',
          nextSceneId: 'scene_good_ending',
        },
      ],
    },

    {
      id: 'scene_peaceful_elder',
      backgroundUrl: 'https://placehold.co/1200x600/3b82f6/white?text=Négociation',
      dialogues: [
        {
          characterId: 'village_elder',
          text: 'Tu choisis la paix plutôt que le conflit. Excellent.',
          characterState: 'wise',
        },
        {
          characterId: 'village_elder',
          text: 'Je vais te guider vers la sortie. Mais fais attention : la forêt observe tout.',
          characterState: 'wise',
        },
      ],
      choices: [
        {
          id: 'ending_peaceful',
          text: '► Suivre le guide (bonne fin)',
          nextSceneId: 'scene_good_ending',
        },
      ],
    },

    {
      id: 'scene_village_elder',
      backgroundUrl: 'https://placehold.co/1200x600/10b981/white?text=Village',
      dialogues: [
        {
          characterId: 'village_elder',
          text: 'Tu as trouvé le village ! Bien joué, voyageur.',
          characterState: 'wise',
        },
      ],
      choices: [
        {
          id: 'ending_village',
          text: '► Bonne fin (trouver le village)',
          nextSceneId: 'scene_good_ending',
        },
      ],
    },

    {
      id: 'scene_trick_attempt',
      backgroundUrl: 'https://placehold.co/1200x600/6b7280/white?text=Tromperie',
      dialogues: [
        {
          characterId: 'mysterious_stranger',
          text: 'Tu crois pouvoir me tromper ? Je vois clair dans ton jeu.',
          characterState: 'angry',
        },
      ],
      choices: [
        {
          id: 'ending_trick_fail',
          text: '► Fin (tromperie découverte)',
          nextSceneId: 'scene_1',
        },
      ],
    },
  ],
};

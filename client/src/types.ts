// Types pour le système narratif

export interface Character {
  id: string;
  name: string;
  // URL des images par état/émotion
  images: {
    [state: string]: string;
  };
  // État par défaut
  defaultState: string;
}

export interface Choice {
  id: string;
  text: string;
  // ID de la prochaine scène
  nextSceneId: string;
  // Conditions optionnelles (pour futures extensions)
  condition?: () => boolean;
}

export interface Scene {
  id: string;
  // Image de fond (optionnelle)
  backgroundUrl?: string;
  // Dialogues dans cette scène
  dialogues: Dialogue[];
  // Choix disponibles à la fin de la scène
  choices: Choice[];
}

export interface Dialogue {
  characterId: string;
  text: string;
  // État du personnage pour cette réplique (optionnel)
  characterState?: string;
  // Animation optionnelle (pour futures extensions)
  animation?: 'none' | 'fade' | 'slide' | 'bounce';
}

export interface Story {
  title: string;
  scenes: Scene[];
  // Personnages de l'histoire
  characters: Character[];
  // Scène de départ
  startSceneId: string;
}

export interface GameState {
  currentSceneId: string;
  history: string[]; // IDs des scènes visitées
  // Variables d'état (pour futures extensions)
  variables: { [key: string]: number | boolean | string };
}

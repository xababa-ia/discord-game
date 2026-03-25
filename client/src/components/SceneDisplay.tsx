import React from 'react';
import { useStory } from '../StoryContext';
import { Scene } from '../types';

interface SceneDisplayProps {
  scene: Scene;
}

// Type local
interface DialogueWithChar {
  dialogue: { characterId: string; text: string; characterState?: string };
  character?: { id: string; name: string; images: { [state: string]: string }; defaultState: string };
}

export const SceneDisplay: React.FC<SceneDisplayProps> = ({ scene }) => {
  const { characters } = useStory();

  // Récupérer les dialogues avec leurs personnages
  const dialoguesWithCharacters: DialogueWithChar[] = scene.dialogues.map(dialogue => {
    const character = characters.find(c => c.id === dialogue.characterId);
    return {
      dialogue,
      character,
    };
  });

  // Grouper les dialogues par personnage pour l'affichage
  const groupedDialogues: { [characterId: string]: DialogueWithChar[] } = {};
  dialoguesWithCharacters.forEach(item => {
    if (!groupedDialogues[item.dialogue.characterId]) {
      groupedDialogues[item.dialogue.characterId] = [];
    }
    groupedDialogues[item.dialogue.characterId].push(item);
  });

  // Récupérer l'état d'émotion pour chaque personnage
  const getCharacterState = (characterId: string): string => {
    const characterDialogues = groupedDialogues[characterId];
    if (characterDialogues && characterDialogues.length > 0) {
      const lastDialogue = characterDialogues[characterDialogues.length - 1].dialogue;
      return lastDialogue.characterState || 'neutral';
    }
    return 'neutral';
  };

  // Fonction pour afficher les dialogues groupés
  const renderDialogues = (
    grouped: { [characterId: string]: DialogueWithChar[] },
    allDialogues: DialogueWithChar[]
  ) => {
    const elements: JSX.Element[] = [];

    Object.entries(grouped).forEach(([characterId, items]) => {
      const firstItem = allDialogues.find(d => d.dialogue.characterId === characterId);
      const character = firstItem?.character;
      if (!character) return;

      const texts = items.map(item => item.dialogue.text);

      elements.push(
        <div key={characterId} style={{ marginBottom: '20px' }}>
          <div className="character-name">{character.name}</div>
          {texts.map((text, index) => (
            <p key={index} className="dialogue-text">
              {text}
            </p>
          ))}
        </div>
      );
    });

    return elements;
  };

  return (
    <div className="scene-container">
      {/* Arrière-plan */}
      {scene.backgroundUrl && (
        <div
          className="background"
          style={{ backgroundImage: `url(${scene.backgroundUrl})` }}
        />
      )}

      {/* Personnages */}
      {(scene.dialogues.length > 0) && (
        <div className="characters-display">
          {Object.keys(groupedDialogues).map(characterId => {
            const character = characters.find(c => c.id === characterId);
            if (!character) return null;

            const state = getCharacterState(characterId);
            const imageUrl = character.images[state] || character.images[character.defaultState];

            return (
              <div key={characterId} className="character-container">
                <img
                  src={imageUrl}
                  alt={character.name}
                  className="character-image character-img"
                />
                <div className="character-emotion">{character.name}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Dialogues */}
      <div className="dialogue-box">
        {renderDialogues(groupedDialogues, dialoguesWithCharacters)}
      </div>
    </div>
  );
};

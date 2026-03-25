import React from 'react';
import { useStory } from '../StoryContext';

export const Choices: React.FC = () => {
  const { currentScene, makeChoice } = useStory();

  if (!currentScene || currentScene.choices.length === 0) {
    return null;
  }

  return (
    <div className="choices-container">
      {currentScene.choices.map(choice => (
        <button
          key={choice.id}
          className="choice-button"
          onClick={() => makeChoice(choice.id)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

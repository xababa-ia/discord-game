import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Story, GameState, Scene, Character } from './types';
import { storyData } from './storyData';

interface StoryContextType {
  story: Story;
  gameState: GameState;
  currentScene: Scene | null;
  characters: Character[];
  makeChoice: (choiceId: string) => void;
  restart: () => void;
}

const StoryContext = createContext<StoryContextType | null>(null);

export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error('useStory must be used within StoryProvider');
  }
  return context;
};

interface StoryProviderProps {
  children: ReactNode;
}

export const StoryProvider: React.FC<StoryProviderProps> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: storyData.startSceneId,
    history: [],
    variables: {},
  });

  const currentScene = storyData.scenes.find(s => s.id === gameState.currentSceneId) || null;

  const makeChoice = useCallback((choiceId: string) => {
    if (!currentScene) return;

    const choice = currentScene.choices.find(c => c.id === choiceId);
    if (!choice) return;

    // Vérifier les conditions si présentes
    if (choice.condition && !choice.condition()) {
      return;
    }

    setGameState(prev => ({
      currentSceneId: choice.nextSceneId,
      history: [...prev.history, prev.currentSceneId],
      variables: prev.variables,
    }));
  }, [currentScene]);

  const restart = useCallback(() => {
    setGameState({
      currentSceneId: storyData.startSceneId,
      history: [],
      variables: {},
    });
  }, []);

  const value: StoryContextType = {
    story: storyData,
    gameState,
    currentScene,
    characters: storyData.characters,
    makeChoice,
    restart,
  };

  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>;
};

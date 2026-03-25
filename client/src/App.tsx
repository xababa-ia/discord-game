import React, { useEffect } from 'react';
import { StoryProvider, useStory } from './StoryContext';
import { SceneDisplay } from './components/SceneDisplay';
import { Choices } from './components/Choices';
import { Scene } from './types';
import { initializeDiscordSDK, updateDiscordActivity, getDiscordUser } from './discordSdk';
import './index.css';

const GameContent: React.FC = () => {
  const { story, gameState } = useStory();

  // Initialiser le SDK Discord et mettre à jour l'activité
  useEffect(() => {
    initializeDiscordSDK().then(() => {
      getDiscordUser().then(user => {
        console.log('Connecté à Discord en tant que:', user?.username);
      });
    }).catch(console.error);
  }, []);

  // Mettre à jour l'activité Discord quand la scène change
  useEffect(() => {
    const currentScene = story.scenes.find(s => s.id === gameState.currentSceneId);
    if (currentScene) {
      updateDiscordActivity(currentScene.id, currentScene.choices.length);
    }
  }, [gameState.currentSceneId, story.scenes]);

  // Trouver la scène courante
  const currentScene: Scene | undefined = story.scenes.find(s => s.id === gameState.currentSceneId);

  if (!currentScene) {
    return (
      <div className="game-container">
        <div className="content">
          <h2>Erreur : Scène non trouvée</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="content">
        <header className="game-header">
          <h1 className="game-title">{story.title}</h1>
        </header>

        <main>
          <SceneDisplay scene={currentScene} />
          <Choices />
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <StoryProvider>
      <GameContent />
    </StoryProvider>
  );
};

export default App;

import { DiscordSDK } from '@discord/embedded-app-sdk';

let discordSdk: DiscordSDK | null = null;

export const initializeDiscordSDK = async (): Promise<DiscordSDK | null> => {
  if (discordSdk) return discordSdk;

  // Utiliser any pour accéder à import.meta.env (déclaré dans vite-env.d.ts)
  const env = import.meta as any;
  const clientId = env.env?.VITE_DISCORD_CLIENT_ID;

  if (!clientId || clientId === 'votre_client_id_ici') {
    console.warn('⚠️ VITE_DISCORD_CLIENT_ID non configuré - mode simulation');
    return null;
  }

  // Utiliser any pour contourner les restrictions de types du SDK
  discordSdk = new (DiscordSDK as any)(clientId);

  try {
    await (discordSdk as any).ready();
    console.log('✅ Discord SDK prêt');

    // Authentification
    await (discordSdk as any).commands.authenticate({
      client_id: clientId,
    });
    console.log('✅ Authentifié avec Discord');
  } catch (error) {
    console.error('❌ Erreur auth Discord:', error);
  }

  return discordSdk;
};

export const getDiscordSDK = (): DiscordSDK | null => discordSdk;

// Mettre à jour l'activité Discord
export const updateDiscordActivity = async (sceneTitle: string, choicesCount: number) => {
  if (!discordSdk) return;

  try {
    await (discordSdk as any).commands.setActivity({
      state: `${choicesCount} choix disponibles`,
      details: `Scène : ${sceneTitle}`,
      instance: true,
    });
  } catch (error) {
    // Silencieux en dev, pas critique
  }
};

// Obtenir les informations de l'utilisateur Discord
export const getDiscordUser = async () => {
  if (!discordSdk) return null;

  try {
    const user = await (discordSdk as any).commands.getCurrentUser();
    return user;
  } catch (error) {
    return null;
  }
};

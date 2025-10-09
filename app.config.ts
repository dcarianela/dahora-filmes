// Módulo responsável pelo acesso à dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora Filmes",
  slug: "dahora-filmes",
  owner: "dcarianela",
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,
    package: "com.dcarianela.dahorafilmes",
  },
  plugins: ["expo-font", "expo-router"],
  // Acessando a API_KEY através do dotenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    eas: {
      projectId: "d86d192c-551e-4e0c-8e59-8b78376026ea",
    },
  },
});

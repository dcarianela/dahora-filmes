import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importando a biblioteca interna vector-icons

/* Usamos o @ts-ignore para ignorar erros de tipagem (ou ausência de tipagem) */
// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import Loading from "./src/components/Loading";

export default function App() {
  /* Usamos o useFonts para criar uma referência para 
  a fonte que queremos utilizar no app. */
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return <Loading />;
  }

  return <SafeAreaProvider></SafeAreaProvider>;
}

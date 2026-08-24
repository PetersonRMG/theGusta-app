import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "@expo-google-fonts/oswald";
import { useEffect } from "react";
import {  Stack } from "expo-router";

import {
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
  Oswald_200ExtraLight
} from '@expo-google-fonts/oswald';



export const fontesCarregamento = {
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
  Oswald_200ExtraLight
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts(fontesCarregamento);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    
  }, [fontsLoaded])
  
  if (!fontsLoaded) {
    return(null)
  };
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  );
}
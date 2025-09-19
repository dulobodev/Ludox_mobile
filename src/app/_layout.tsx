import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Header from "../components/Header";

SplashScreen.preventAutoHideAsync();

export default function StackLayout() {
  const [loaded] = useFonts({
    "IstokWeb-Regular": require("../assets/fonts/IstokWeb-Regular.ttf"),
    "IstokWeb-Bold": require("../assets/fonts/IstokWeb-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

      <Stack
        screenOptions={{
          header: () => <Header />,
          contentStyle: { backgroundColor: "#151414" },
          animation: "none",
          freezeOnBlur: true,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(Login)/Login" options={{ headerShown: false }} />
      </Stack>
  );
}





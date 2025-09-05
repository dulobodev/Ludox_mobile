import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function StackLayout() {
  const [loaded] = useFonts({
      'IstokWeb-Regular': require('../assets/fonts/IstokWeb-Regular.ttf'),
      'IstokWeb-Bold': require('../assets/fonts/IstokWeb-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack  screenOptions={{headerShown: false}}/>;
}





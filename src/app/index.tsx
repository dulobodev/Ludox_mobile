import { useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";

import Login from "./(Login)/Login"; 

SplashScreen.preventAutoHideAsync();

export default function Splash() {
  console.log("Index carregou!");
  const router = useRouter();
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const loginOpacity = useRef(new Animated.Value(0)).current;
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    console.log("Splash index carregado!");
    const timer = setTimeout(() => {
      setShowLogin(true); // monta Login por baixo

      Animated.parallel([
        Animated.timing(splashOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(loginOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(async () => {
        console.log("Splash vai sumir!");
        await SplashScreen.hideAsync();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {showLogin && (
        <Animated.View style={[styles.container, { opacity: loginOpacity }]}>
          <Login />
        </Animated.View>
      )}
      <Animated.View
        style={[
          styles.container,
          {
            opacity: splashOpacity,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        ]}
      >
        <Animated.Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151414",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 130,
    height: 225,
    resizeMode: "contain",
  },
});

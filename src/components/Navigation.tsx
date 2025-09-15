import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { router } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export function Navigation({ segments }) {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Pressable
          style={styles.button}
          onPress={() => router.replace("/Home")}
        >
          <FontAwesome
            name="home"
            size={22}
            color={segments.includes("Home") ? "white" : "#BD97FF"}
          />
          <Text style={styles.text}> Home </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/Categorias")}
        >
          <FontAwesome
            name="bars"
            size={22}
            color={segments.includes("Categorias") ? "white" : "#BD97FF"}
          />
          <Text style={styles.text}> Categorias </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/Favoritos")}
        >
          <FontAwesome
            name="heart"
            size={22}
            color={segments.includes("Favoritos") ? "white" : "#BD97FF"}
          />
          <Text style={styles.text}> Favoritos </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/User")}
        >
          <FontAwesome
            name="user"
            size={22}
            color={segments.includes("User") ? "white" : "#BD97FF"}
          />
          <Text style={styles.text}> Conta </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B2FFF",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "12%",
    width: "auto",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  button: {
    alignItems: "center",
  },
  text: {
    marginTop: 1,
    fontSize: 13,
    marginLeft: 2,
    color: "white",
  },
});
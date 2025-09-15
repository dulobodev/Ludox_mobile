import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSegments } from "expo-router";

import { Navigation } from "../../components/Navigation";

export default function Favoritos() {
  const segments = useSegments();
  console.log(segments);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> FAVORITOS PAGE </Text>
      <Navigation segments={segments} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
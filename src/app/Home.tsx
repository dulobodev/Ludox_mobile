import { KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { router, usePathname, useSegments } from 'expo-router';

import { Navigation } from "../components/Navigation";

export default function Home() {
    const segments  = useSegments();
    console.log(segments)

    return (
        <SafeAreaView style={styles.container }>

            <Text style={{color: 'white'}}> HOME PAGE </Text>

            <Navigation segments={segments}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

})
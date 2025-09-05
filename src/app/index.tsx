import { KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from 'expo-router';

import logo from '../assets/images/Logo.png'

export default function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <Image source={logo} style={styles.logo}/>
                <View>
                    <TextInput style={styles.input} placeholder='Seu e-mail' placeholderTextColor="#999" keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
                    <TextInput style={styles.input} placeholder='Sua senha' placeholderTextColor="#999" autoCapitalize='none' autoCorrect={false}/>
                </View>

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}> Fazer Login </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151414'
    },
    logo: {
        position: 'absolute',
        width: 81,
        height: 140,
        left: 175,
        top: 135,
    },
    input: {
        position: 'absolute',
        width: 235,
        height: 2,
        left: 98,
        top: 420,
    },
    button: {

    },
    buttonText: {

    }
})
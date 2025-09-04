import { KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from "react-native";

import logo from ''

export default function Home(){
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Image source={logo}/>
            <View>
                <TextInput style={styles.input} placeholder='Seu e-mail' placeholderTextColor="#999" keyboardType='email-address' autoCapitalize='none' autoCorrect={false}/>
                <TextInput style={styles.input} placeholder='Sua senha' placeholderTextColor="#999" autoCapitalize='none' autoCorrect={false}/>
            </View>

            <TouchableOpacity style={styles.button}> 
                <Text style={styles.buttonText}> Fazer Login </Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}
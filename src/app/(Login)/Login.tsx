import { KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import logo from '../../assets/images/Logo.png'

export default function LoginScreen() {
  const [isChecked, setChecked] = useState(false);
  return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Image source={logo} style={styles.logo}/>

          <View style={styles.form}>
            <TextInput  
            style={styles.input}  
            placeholder='E-mail'  
            placeholderTextColor="#7E7E7E"  
            keyboardType='email-address' 
            autoCapitalize='none' 
            autoCorrect={false}/>

            <TextInput  
            style={styles.input}  
            placeholder='Senha'  
            placeholderTextColor="#7E7E7E" 
            autoCapitalize='none' 
            autoCorrect={false}/>

            <View style={styles.checks}>
                <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                  {isChecked ? (
                    <View style={{backgroundColor: '#151414', borderRadius: 2, borderWidth: 1, borderColor: 'white', width: 19, height: 19}} />
                  ) : (
                    <AntDesign name="checksquare" size={20} color="white" />
                  )}
                </TouchableOpacity>

                <Text style={styles.text}> Lembrar de mim </Text>
                <Text style={styles.text2}> Esqueceu a senha? </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.button}> 
              <Text style={styles.textbutton}> Iniciar Sessao </Text>
            </TouchableOpacity>

            <View style={styles.cadastroform}>
              <Text style={styles.}> Fazer cadastro </Text>
  
            </View>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 80,
      height: 140,
      resizeMode: 'contain',
      marginTop: -165,
      marginBottom: 80,
    },
    form: {
      alignSelf: 'stretch',
    },
    input: {
      borderBottomWidth: 1,
      borderColor: '#f0f0f0',
      width: 290,
      marginTop: 25,
      color: '#fff'
    },
    checks: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 23
    },
    text: {
      fontSize: 14,
      color: 'white',
      marginLeft: 3,
      fontFamily: 'IstokWeb-Regular'
    },
    text2: {
      fontSize: 14,
      color: 'white',
      marginLeft: 28,
      fontFamily: 'IstokWeb-Regular'
    },
    button: {
      marginTop: 80,
      borderRadius: 10,
      backgroundColor:'white',
      width: 290,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textbutton: {
      fontFamily: 'IstokWeb-Bold',
      fontWeight: 'bold',
      fontSize: 17,
    },
    cadastroform: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      marginTop: 23,
    }
  },
);
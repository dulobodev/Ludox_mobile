import { KeyboardAvoidingView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import logo from '../../assets/images/Logo.png';
import cadastroImage from '../../assets/images/cadastroImage.png';
import Facebook from '../../assets/images/Facebook.png';
import Google from '../../assets/images/Google.png';
import Tiktok from '../../assets/images/TikTok.png';

export default function LoginScreen() {
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();
  return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
            
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                  {isChecked ? (
                    <FontAwesome name="check-square" size={21} color="white" />
                  ) : (
                    <FontAwesome name="square" size={21} color="white" />
                  )}
                </TouchableOpacity>

                <Text style={styles.text}> Lembrar de mim </Text>
              </View>

  
              <Text style={styles.text2}> Esqueceu a senha? </Text>
            </View>
          </View>

          <View style={styles.sessao}>
            <TouchableOpacity style={styles.button} onPress={ () => router.push('/Home')}> 
              <Text style={styles.textbutton}> Iniciar Sessao </Text>
            </TouchableOpacity>

            <View style={styles.cadastroform}>
              <Text style={styles.textcadastro}> Fazer cadastro </Text>
              
              <TouchableOpacity>
                  <Image source={cadastroImage} style={{width: 26, height: 24}}/>
              </TouchableOpacity>
            </View>

            <Text style={styles.textoauth}> Fazer Login com </Text>
          </View>

            
            <TouchableOpacity style={styles.buttonoauth}>
              <Image source={Facebook}/>
              <Image source={Google}/>
              <Image source={Tiktok}/>
            </TouchableOpacity>

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
      marginTop: -20,
      marginBottom: 60,
    },
    form: {
      alignSelf: 'stretch',
    },
    input: {
      borderBottomWidth: 1,
      borderColor: '#f0f0f0',
      width: 290,
      marginTop: 35,
      paddingBottom: 10,
      color: '#fff'
    },
    checks: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 23,
    },
    text: {
      fontSize: 13,
      color: 'white',
      marginLeft: 3,
      fontFamily: 'IstokWeb-Regular'
    },
    text2: {
      fontSize: 13,
      color: 'white',
      fontFamily: 'IstokWeb-Regular'
    },
    sessao: {
      alignItems: 'center',
      justifyContent: 'center',
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
    },
    textcadastro: {
      fontFamily: 'IstokWeb-Regular',
      color: 'white',
      fontSize: 14,
      marginRight: 10
    },
    textoauth: {
      fontFamily: 'IstokWeb-Regular',
      color: 'white',
      fontSize: 14,
      marginTop: 50
    },
    buttonoauth: {
      flexDirection: "row",
      justifyContent: 'center',
      marginTop: 25,
      gap: 20
    }
  },
);
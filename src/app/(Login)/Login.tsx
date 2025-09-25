import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import logo from "../../assets/images/Logo.png";
import cadastroImage from "../../assets/images/cadastroImage.png";
import Facebook from "../../assets/images/Facebook.png";
import Google from "../../assets/images/Google.png";
import Tiktok from "../../assets/images/TikTok.png";

import api from '../../services/api'

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});



type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await api.post("/login", data);
      console.log("Usuário logado:", response.data);
      router.push("/Home");
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Falha no login. Verifique suas credenciais.");
    }
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.form}>
          {/* Email */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#7E7E7E"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          {/* Senha */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#7E7E7E"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          <View style={styles.checks}>
            <View style={styles.checkboxContainer}>
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
          <TouchableOpacity style={styles.button} onPress={() => {
              console.log("Botão pressionado!")
              handleSubmit(onSubmit)()
          }}>
            <Text style={styles.textbutton}> Iniciar Sessao </Text>
          </TouchableOpacity>

          <View style={styles.cadastroform}>
            <Text style={styles.textcadastro}> Fazer cadastro </Text>

            <TouchableOpacity>
              <Image source={cadastroImage} style={styles.cadastroIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.textoauth}> Fazer Login com </Text>
        </View>

        <TouchableOpacity style={styles.buttonoauth}>
          <Image source={Facebook} />
          <Image source={Google} />
          <Image source={Tiktok} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 140,
    resizeMode: "contain",
    marginTop: -20,
    marginBottom: 60,
  },
  form: {
    alignSelf: "stretch",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    width: 290,
    marginTop: 35,
    paddingBottom: 10,
    color: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  checks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 23,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    color: "white",
    marginLeft: 3,
    fontFamily: "IstokWeb-Regular",
  },
  text2: {
    fontSize: 13,
    color: "white",
    fontFamily: "IstokWeb-Regular",
  },
  sessao: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 80,
    borderRadius: 10,
    backgroundColor: "white",
    width: 290,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  textbutton: {
    fontFamily: "IstokWeb-Bold",
    fontWeight: "bold",
    fontSize: 17,
  },
  cadastroform: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 23,
  },
  textcadastro: {
    fontFamily: "IstokWeb-Regular",
    color: "white",
    fontSize: 14,
    marginRight: 10,
  },
  cadastroIcon: {
    width: 26,
    height: 24,
  },
  textoauth: {
    fontFamily: "IstokWeb-Regular",
    color: "white",
    fontSize: 14,
    marginTop: 50,
  },
  buttonoauth: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 20,
  },
});

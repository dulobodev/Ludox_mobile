import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useSegments } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Navigation } from "../../components/Navigation";
import { useContador } from "../../hooks/Count";

const { width } = Dimensions.get("window");

export default function Produto() {
  const segments = useSegments();
  const { incrementar } = useContador();
  const { title, value, image, parcela } = useLocalSearchParams();
  const valueNum = Number(value);
  const parcelaNum = Number(parcela);
  const value_parcela = valueNum / parcelaNum;
  console.log(image)

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View style={styles.containerimage}>
          <Image source={{ uri: `http://192.168.15.6:8000${image}` }} style={styles.image}/>
        </View>
        <Text ellipsizeMode="tail" style={[styles.text, {marginTop:20}]}>
            {title}
        </Text>
        <Text style={styles.value}>R${valueNum.toFixed(2)}</Text>
        <Text style={[styles.text, { color: "#fff", fontFamily: "IstokWeb-Regular"}]}>
        A vista no PIX com{" "}
        <Text style={[styles.text,{ color: "#7B2FFF"}]}>
            7% OFF
        </Text>
        </Text>
        <Text style={[styles.text, {fontFamily: "IstokWeb-Regular", marginTop: 20}]}>Em ate {parcela}x de R${value_parcela.toFixed(2)} sem juros no cartão</Text>

        <Text style={[styles.text, {marginTop: 70}]}>Calcule o frete e o prazo de entrega</Text>
        <View style={styles.containerfrete}>
        <TextInput
        style={styles.frete}
        placeholder="Coloque o seu CEP"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        />

        <TextInput
        style={styles.ok}
        placeholder="OK"
        placeholderTextColor="#7B2FFF"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => incrementar()}>
        <Text style={styles.buttonText}>COMPRAR AGORA</Text>
        </TouchableOpacity>

        <View style={styles.extraSpace} />
      </ScrollView>
      </KeyboardAvoidingView>
      <Navigation segments={segments} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 12,
  },
  containerimage: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height:320
  },
  image: {
    marginTop: 60,
    width: width*0.4,
    height: 200,
    resizeMode: "contain",
    marginRight: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "IstokWeb-Bold",
  },
  value: {
    color: "#7B2FFF",
    fontSize: 28,
    fontFamily: "IstokWeb-Bold",
    marginTop: 20
  },
  containerfrete:{
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5
  },
  frete: {
    fontFamily: "IstokWeb-Regular",
    width: width*0.72,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    paddingLeft: 10,
  },
  ok: {
    textAlign: 'center',
    fontFamily: "IstokWeb-Bold",
    width: width*0.18,
    borderWidth: 1,
    borderColor: "#7B2FFF",
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    marginTop: 50,
    backgroundColor: "#7B2FFF",
    width: width*0.93,
    height:60,
    borderRadius: 10,
    justifyContent: 'center'

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: "IstokWeb-Bold",
    fontSize: 20,
  },
  extraSpace: {
    backgroundColor: "#151414",
    width: "auto",
    height: 300,
    marginTop: 40,
  },
});
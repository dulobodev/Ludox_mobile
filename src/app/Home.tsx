import { KeyboardAvoidingView, View, Text, TextInput, Image, ScrollView, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Countdown } from "../components/Countdown";
import { router, usePathname, useSegments } from 'expo-router';

import { Navigation } from "../components/Navigation";
import { Slider } from "../components/Slider";
import { Product } from "../components/Product";


export default function Home() {
    const segments  = useSegments();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.caroulsel}>
                    <Slider />
                </View>

                <View style={styles.categoria}>
                    <Text style={{color: '#7B2FFF', fontFamily: "IstokWeb-Bold", fontSize: 15}}>Ofertas do dia</Text>

                    <Countdown />
                </View>

                <View style={styles.productcontainer}>
                    <Product />
                </View>

                <View style={styles.categoria}>
                    <Text style={{color: '#7B2FFF', fontFamily: "IstokWeb-Bold", fontSize: 15}}>Mais Procurados</Text>
                </View>

                <View style={styles.productcontainer}>
                    <Product />
                </View>

                <View style={styles.categoria}>
                    <Text style={{color: '#7B2FFF', fontFamily: "IstokWeb-Bold", fontSize: 15}}>Processadores</Text>
                </View>

                <View style={styles.productcontainer}>
                    <Product />
                </View>

                {/* Espaco extra para scrollview */}
                <View style={{backgroundColor: '#151414', width: 'auto', height:300, marginTop: 40}}/>

            </ScrollView>
                <Navigation segments={segments}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    caroulsel: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
    },
    productcontainer: {
        flex: 1,
        alignItems: 'center',
        
    },
    categoria: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 40
    }
})
import React from "react";
import { View, Text, Dimensions, Image, StyleSheet, FlatList,TouchableHighlight} from "react-native";
import { ProductSlider } from "../services/data";
const { width } = Dimensions.get("window");

import { useContador } from "../hooks/Count";

export function Product() {
  const { incrementar } = useContador();

  return (
    <View>
      <FlatList
        horizontal
        data={ProductSlider}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { width: width * 0.85 }]}>

            <View style={styles.row}>
              <Image source={item.Image} style={styles.image} />

              <View style={styles.infocontainer}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
                  {item.Nome}
                </Text>
                <Text style={styles.textvalor}>{item.Valor}</Text>
                <Text style={[styles.text, { color: "#999" }]}>
                  A vista no PIX{"\n"}ou{" "}
                  <Text style={{ color: "#fff" }}>
                    {item.SJ}x sem juros no cartao
                  </Text>
                </Text>
              </View>
            </View>

            <TouchableHighlight underlayColor='#451794ff' style={styles.button}   onPress={() => incrementar()}>
              <Text style={{ color: "white", textAlign: "center", fontFamily: "IstokWeb-Bold", fontSize: 15}}>
                COMPRAR AGORA
              </Text>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-start",
    height: 210,
    marginLeft: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: "contain",
    marginRight: 20,
  },
  infocontainer: {
    width: 170,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontFamily: "IstokWeb-Regular",
  },
  textvalor: {
    color: "#7B2FFF",
    fontSize: 18,
    fontFamily: "IstokWeb-Bold",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#7B2FFF",
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
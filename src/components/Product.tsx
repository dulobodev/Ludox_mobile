import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { useContador } from "../hooks/Count";

import api from '../services/api'

const { width } = Dimensions.get("window");

type ProductType = {
  id: string;
  title: string;
  description: string;
  feedback: number;
  value: number;
  parcela: number;
  image_url: string;
};

export function Product() {
  const { incrementar } = useContador();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);
return (
    <View>
      <FlatList
        horizontal
        data={products}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { width: width * 0.85 }]}>
            <View style={styles.row}>
              <Image source={{ uri: `http://192.168.15.4:8000${item.image_url}` }} style={styles.image} />

              <View style={styles.infocontainer}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
                  {item.title}
                </Text>
                <Text style={styles.textvalor}>R$ {item.value}</Text>
                <Text style={[styles.text, { color: "#999" }]}>
                  A vista no PIX{"\n"}ou{" "}
                  <Text style={{ color: "#fff" }}>
                    {item.parcela}x sem juros no cartão
                  </Text>
                </Text>
              </View>
            </View>

            <TouchableHighlight
              underlayColor="#451794ff"
              style={styles.button}
              onPress={() => incrementar()}
            >
              <Text style={styles.buttonText}>COMPRAR AGORA</Text>
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
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "IstokWeb-Bold",
    fontSize: 15,
  },
});
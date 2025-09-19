import {
  View,
  Pressable,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useRef } from "react";
import { SearchBar } from "react-native-elements";

import { useContador } from "../hooks/Count";

import back from "../assets/images/back.png";
import shopping_cart from "../assets/images/shopping_cart.png";


const DATA = [
  { id: "1", title: "Teste" },
];


function Header() {
  // State to manage the filtered data and search input
  const [data, setData] = useState(DATA);
  // State to manage the search input value
  const [searchValue, setSearchValue] = useState(""); 
  // Ref to hold the original data
  const arrayholder = useRef(DATA); 

  // Function to handle search functionality
  const searchFunction = (text) => {
    const updatedData = arrayholder.current.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    setData(updatedData);
    setSearchValue(text);
  };

  const { count } = useContador();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable style={styles.return}>
          <Image source={back} />
        </Pressable>

        {/*nao esta funcionando, apenas estilo*/}
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={searchValue}
          onChangeText={searchFunction}
          autoCorrect={false}
          backgroundColor="white"
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          searchIcon={{ size: 22, color: "black" }}
          clearIcon={{ size: 22, color: "black" }}
          cancelIcon={{ size: 22, color: "black" }}
        />

        <Pressable style={styles.cart}>
          <Image source={shopping_cart} />

          {count > 0 && (
            <View style={styles.count}>
              <Text style={styles.countText}>{count}</Text>
            </View>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Header);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#151414",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 75,
    width: "auto",
    padding: 20,
  },
  return: {
    marginRight: 20,
  },
  cart: {
    marginLeft: 20,
    width: 24,
    height: 24,
  },
  count: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: -30,
    marginLeft: 14,
  },
  countText: {
    textAlign: "center",
    fontSize: 10,
    color: "#7B2FFF",
    marginTop: 1,
    marginLeft: 1,
  },
  searchContainer: {
    backgroundColor: "#151414",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingBottom: 30,
    marginBottom: 7,
    width: "75%",
    borderColor: "#151414",
  },
  searchInputContainer: {
    backgroundColor: "white",
    borderRadius: 15,
  },
  searchInput: {
    fontSize: 15,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
});
import { KeyboardAvoidingView, View, Pressable, StyleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { SearchBar } from "react-native-elements"; 
import React from "react";

import back from '../assets/images/back.png'
import shopping_cart from '../assets/images/shopping_cart.png'


const DATA = [
  { id: "1", title: "Data Structures" },
  { id: "2", title: "STL" },
  { id: "3", title: "C++" },
  { id: "4", title: "Java" },
  { id: "5", title: "Python" },
  { id: "6", title: "CP" },
  { id: "7", title: "ReactJs" },
  { id: "8", title: "NodeJs" },
  { id: "9", title: "MongoDb" },
  { id: "10", title: "ExpressJs" },
  { id: "11", title: "PHP" },
  { id: "12", title: "MySql" },
];


export default function Home() {
  // State to manage the filtered data and search input
  const [data, setData] = React.useState(DATA);
  // State to manage the search input value
  const [searchValue, setSearchValue] = React.useState(""); 
  // Ref to hold the original data
  const arrayholder = React.useRef(DATA); 

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

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>

                <Pressable style={styles.return}>
                    <Image source={back}/>
                </Pressable>

                <SearchBar
                  placeholder="Search Here..."
                  lightTheme 
                  round 
                  value={searchValue} 
                  onChangeText={searchFunction} 
                  autoCorrect={false} 
                  backgroundColor="white" 
                  containerStyle={{
                  backgroundColor: "#151414", 
                  borderTopWidth: 0, 
                  borderBottomWidth: 0, 
                  paddingBottom: 30,
                  marginBottom: 7,
                  width: '75%',
                  borderColor: "#151414", 
                  }}
                  inputContainerStyle={{
                  backgroundColor: "white", 
                  borderRadius: 15, 
                  }}
                  inputStyle={{
                  fontSize: 15,
                  backgroundColor: "white", 
                  borderRadius: 10, 
                  padding: 10, 
                  }}
                  searchIcon={{ size: 22, color: "black" }} 
                  clearIcon={{ size: 22, color: "black" }} 
                  cancelIcon={{ size: 22, color: "black" }} 
              />

            <Pressable style={styles.cart}>
                <Image source={shopping_cart}/>
            </Pressable>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 75,
      width: 'auto',
      padding: 20,

    },
    return: {
    marginRight: 20,
    },
    cart: {
      marginLeft: 20,
      width: 24,
      height: 24
    }
})
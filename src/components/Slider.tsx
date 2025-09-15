import React, { useState } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ImageSlider } from "../services/data";

const { width } = Dimensions.get("window");

export function Slider() {

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={260}
        autoPlay
        data={ImageSlider}
        autoPlayInterval={1000}
        scrollAnimationDuration={2600}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 12,
  },
});

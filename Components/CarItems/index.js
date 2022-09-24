import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./style";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="Primary"
          content={"Custom Order"}
          onPress={() => console.warn("Custom Order")}
        />
        <StyledButton
          type="Secondary"
          content={"Existing Inventory"}
          onPress={() => console.warn("Existing Inventory")}
        />
      </View>
    </View>
  );
};

export default CarItem;

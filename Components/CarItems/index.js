import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./style";
import StyledButton from "../StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../TeslaAssets/assets/images/ModelX.jpeg")}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,400</Text>
      </View>
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
  );
};

export default CarItem;

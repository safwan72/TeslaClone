import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./style";

const Header = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.logo}
        source={require("../../TeslaAssets/assets/images/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../../TeslaAssets/assets/images/menu.png")}
      />
    </View>
  );
};

export default Header;

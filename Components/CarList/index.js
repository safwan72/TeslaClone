import { FlatList, Text, View } from "react-native";
import React from "react";
import cars from "../../TeslaAssets/assets/cars";
import styles from "./style";
import CarItem from "../CarItems";

const CarLists = () => {
  return (
    <View style={styles.container}>
      <FlatList data={cars} renderItem={({ item }) => <CarItem car={item} />} />
    </View>
  );
};

export default CarLists;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarItem from "./Components/CarItems";
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

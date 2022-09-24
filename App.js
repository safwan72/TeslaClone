import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CarLists from "./Components/CarList";
import Header from "./Components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarLists />
      {/* <Text>Hello</Text> */}
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

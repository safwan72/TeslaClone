import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: 45,
    zIndex: 1000,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
export default styles;

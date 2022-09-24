import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    width: "100%",
    paddingTop: "20%",
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 15,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  buttonContainer: {
    width: "100%",
    bottom: 30,
    position: "absolute",
  },
});

export default styles;

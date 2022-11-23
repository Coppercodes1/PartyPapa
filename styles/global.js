import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#00001a",
  },

  titleText: {
    fontSize: 20,
    color: "#80bfff",
  },

  paragraph: {
    marginVertical: 7,
    lineHeight: 20,
    color: "#80bfff",
  },
  image: {
    marginRight: 20,
    height: 250,
    width: "100%",
  },
  eventText: {
    fontSize: 15,
    color: "#80bfff",
    marginVertical: 8,
    lineHeight: 20,
  },
  eventTitle: {
    fontSize: 20,
    color: "#80bfff",
    textAlign: "center",
    marginVertical: 20,
  },
  homeImage: {
    marginTop: 10,

    height: 120,
    width: "100%",
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00001a",
    height: "100%",
    padding: 25,
  },
  voucherText: {
    marginVertical: 7,
    lineHeight: 20,
    color: "#80bfff",
    fontSize: 17,
  },
});

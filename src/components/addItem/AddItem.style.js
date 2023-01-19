import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#B4436C",
    color: "white",
    borderRadius: 15,
    padding: 10,
    flex: 1,
  },

  button: {
    width: 70,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4D9078",
    marginHorizontal: 10,
    borderRadius: 25,
    elevation: 2,
    shadowColor: "grey",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
  },
});

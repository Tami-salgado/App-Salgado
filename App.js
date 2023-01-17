import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onChangeText = (text) => {
    setTextItem(text);
  };

  const addProduct = () => {
    if (textItem !== "") {
      setList([...list, textItem]);
      setTextItem("");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.product}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write your product"
            placeholderTextColor={"white"}
            style={styles.addItemInput}
            onChangeText={onChangeText}
            value={textItem}
          />
          <TouchableOpacity style={styles.button} onPress={addProduct}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderItem(item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2C14E",
  },
  titleContainer: {
    paddingHorizontal: 30,
    paddingTop: 80,
    height: 200,
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 10,
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
  productContainer: {
    paddingHorizontal: 40,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  product: {
    alignSelf: "center",
    color: "white",
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
  deleteButton: {
    backgroundColor: "#f76254",
  },
});

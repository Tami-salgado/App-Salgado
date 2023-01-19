import { TextInput, View, Button, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./AddItem.style";

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write your product"
        placeholderTextColor={"white"}
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <TouchableOpacity style={styles.button} onPress={onAddItem}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

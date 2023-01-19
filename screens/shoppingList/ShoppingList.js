import React, { useEffect, useState } from "react";
import Modal from "../../src/components/Modal";
import AddItem from "../../src/components/addItem/AddItem";
import styles from "./ShoppingList.style";
import { FlatList, Text, View, Button } from "react-native";

const ShoppingList = () => {
  const [product, setproduct] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [doneList, setDoneList] = useState([]);
  const [modalVisble, setModalVisible] = useState(false);

  const onHandleChangeItem = (product) => {
    setproduct(product);
  };

  const addItem = () => {
    if (product != "") {
      setList([...list, product]);
      setproduct("");
    }
  };

  const handleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const isDone = (product) => {
    return doneList.includes(product);
  };

  const markAsDone = (product) => {
    if (!doneList.includes(product)) {
      setDoneList([...doneList, product]);
    } else {
      setDoneList(doneList.filter((element) => element !== product));
    }
  };

  const onHandleDelete = (product) => {
    setList((prevState) => prevState.filter((element) => element !== product));
    setModalVisible(!modalVisble);
  };

  const renderItem = ({ item }) => (
    <View
      style={
        isDone(item)
          ? [styles.renderItemStyle, styles.renderItemStyleDone]
          : styles.renderItemStyle
      }
    >
      <Text
        style={
          isDone(item)
            ? [styles.renderItemTextDone, styles.renderItemText]
            : styles.renderItemText
        }
      >
        {item}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button title="Edit" onPress={() => handleModal(item)} />
        <Button title="Done" onPress={() => markAsDone(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={product}
          onAddItem={addItem}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(product, i) => i}
        />
      </View>
      <Modal
        isVisible={modalVisble}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
    </View>
  );
};
export default ShoppingList;

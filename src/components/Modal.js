import React from "react";
import { Button, Modal as MiModal, StyleSheet, Text, View } from "react-native";

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
}) => {
  return (
    <MiModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Delete" onPress={() => actionDeleteItem()} />
            <Button title="Close" onPress={() => onDismissModal(false)} />
          </View>
        </View>
      </View>
    </MiModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },
  modalStyle: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 26,
    flex: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 5,
  },
});

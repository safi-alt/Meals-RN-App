import React from "react";

import { View, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.ListItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default ListItem;

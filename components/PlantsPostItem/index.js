import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";

const PlantsPostItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Image
          style={styles.itemImg}
          source={require("./../../assets/img1.jpg")}
        />
        <Text>{item.libelle}</Text>
        <Text>{item.gardian}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlantsPostItem;

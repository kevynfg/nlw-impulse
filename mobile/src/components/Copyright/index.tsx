import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import React, { useRef } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Feito com carinho pelo Kevyn</Text>
    </View>
  );
}

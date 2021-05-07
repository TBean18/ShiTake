import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../components/Themed";

const App: FC = () => {
  return (
    <View>
      <Text> Home Screen </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

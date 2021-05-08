import React, { FC } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { View } from "./Themed";

const { height, width } = Dimensions.get("screen");

//Define the Acccepted props for the input component
interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
}

const Input: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});

export default Input;

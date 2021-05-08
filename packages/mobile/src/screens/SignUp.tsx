import React, { FC } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Input } from "../components";
import { Text } from "../components/Themed";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { signInWithGoogleAsync } from "../constants/GoogleAuth";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Button title="Sign In With Google" onPress={signInWithGoogleAsync} />
      <Text> Sign Up With Google </Text>
      <Input
        onChangeText={(text) => console.log(text)}
        placeholder={"Name"}
        secureTextEntry={false}
      />
      <Input
        onChangeText={(text) => console.log(text)}
        placeholder={"Email"}
        secureTextEntry={false}
      />
      <Input
        onChangeText={(text) => console.log(text)}
        placeholder={"Password"}
        secureTextEntry={false}
      />
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

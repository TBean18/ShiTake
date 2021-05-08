import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { Login, SignUp } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signup" component={SignUp} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;

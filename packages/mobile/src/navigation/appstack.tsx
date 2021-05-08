import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { Home, Login, SignUp } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export default AppStack;

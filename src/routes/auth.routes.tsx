import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Delivery } from "../screens/Delivery";
import { Account } from "../screens/Account";
import { Dashboard } from "../screens/Dashboard";
import { TabStack } from "./tabStack.route";

const { Navigator, Screen }  = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={TabStack} />
      <Screen name="login" component={Login} />
      <Screen name="signup" component={SignUp} />
      <Screen name="forgot" component={ForgotPassword} />
      <Screen name="delivery" component={Delivery} />
      <Screen name="account" component={Account} />
    </Navigator>
  )
};
export { AuthRoutes };
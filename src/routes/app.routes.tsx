import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from "../screens/Dashboard";
import { Order } from "../components/Order";
import { Explore } from "../components/Explore";
import { Cart } from "../components/Cart";
import { Account } from "../components/Account";
import { Home } from "../screens/Home";
import  { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Delivery } from "../screens/Delivery";
import { Alerts } from "../components/Alerts";
import { EditProfile } from "../components/EditProfile";
import { ManageAddress } from "../components/ManageAddress";
import { Wallet } from "../components/Wallet";
import { Payment } from "../components/Payment";
import { NewPayment } from "../components/NewPayment";

const { Navigator, Screen }  = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="method">
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="order" component={Order}      />
      <Screen name="explore" component={Explore} />
      <Screen name="cart" component={Cart} />
      <Screen name="account" component={Account} />
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
      <Screen name="signup" component={SignUp} />
      <Screen name="forgot" component={ForgotPassword} />
      <Screen name="delivery" component={Delivery} />
      <Screen name="alert" component={Alerts} />
      <Screen name="edit" component={EditProfile} />
      <Screen name="address" component={ManageAddress} />
      <Screen name="wallet" component={Wallet} />
      <Screen name="method" component={NewPayment} />
    </Navigator>
  )
};
export { AuthRoutes };
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from "../screens/Dashboard";
import { Alerts } from "../screens/Alerts";
import { Account } from "../screens/Account";
import { Payment } from "../screens/Payment";
import { EditProfile } from "../screens/EditProfile";
import { Order } from "../screens/Order";
import { Wallet } from "../screens/Wallet";
import { ManageAddress } from "../screens/ManageAddress";
import { NewPayment } from "../screens/NewPayment";
import { Explore } from "../screens/Explore";
import { Cart } from "../screens/Cart";
import { TabRoutes } from "./tab.routes";
import { Delivery } from "../screens/Delivery";
import { SearchModal } from "../components/SearchModal";
import { Home } from "../screens/Home";

const { Navigator, Screen }  = createStackNavigator();

const TabStack: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="dashboard" component={TabRoutes} />
      <Screen name="account" component={Account} />
      <Screen name="explore" component={Explore} />
      <Screen name="cart" component={Cart} />
      <Screen name="alert" component={Alerts} />
      <Screen name="payment" component={Payment} />
      <Screen name="edit" component={EditProfile} />
      <Screen name="order" component={Order} />
      <Screen name="wallet" component={Wallet} />
      <Screen name="address" component={ManageAddress} />
      <Screen name="addPayment" component={NewPayment} />
      <Screen name="delivery" component={Delivery} />
      <Screen name="selectavatar" component={SearchModal} />
      <Screen name="home" component={Home} />

    </Navigator>
  )
};
export { TabStack };
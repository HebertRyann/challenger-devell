import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "../screens/Dashboard";
import { Order } from "../components/Order";
import { Explore } from "../components/Explore";
import { Cart } from "../components/Cart";
import { Account } from "../components/Account";

const { Navigator, Screen }  = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="início" component={Dashboard} />
      <Screen name="Pedidos" component={Order}/>
      <Screen name="Explorar" component={Explore}/>
      <Screen name="Carrinho" component={Cart}/>
      <Screen name="Conta" component={Account}/>
    </Navigator>
  )
};
export { Routes };
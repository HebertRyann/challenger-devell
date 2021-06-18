import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "../screens/Dashboard";
import { Order } from "../components/Order";
import { Explore } from "../components/Explore";
import { Cart } from "../components/Cart";
import { Account } from "../components/Account";
import  { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const { Navigator, Screen }  = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Navigator >
      <Screen name="início" component={Dashboard} options={{ 
        tabBarIcon: () => <Feather name="map-pin" size={20}/> 
      }}/>
      <Screen name="Pedidos" component={Order} options={{
        tabBarIcon: () => <Ionicons name="cart-outline" size={20}/> 
      }}
      />
      <Screen name="Explorar" component={Explore} options={{
        tabBarIcon: () => <Feather name="search" size={20}/> 
      }}/>
      <Screen name="Carrinho" component={Cart} options={{
        tabBarIcon: () => <Feather name="shopping-bag" size={20}/> 
      }}/>
      <Screen name="Conta" component={Account} options={{
        tabBarIcon: () => <SimpleLineIcons name="user" size={20}/> 
      }}/>
    </Navigator>
  )
};
export { TabRoutes };
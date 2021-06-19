import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "../screens/Dashboard";
import { Order } from "../screens/Order";
import { Explore } from "../screens/Explore";
import { Cart } from "../screens/Cart";
import { Account } from "../screens/Account";
import  { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { NavigationRegister } from "../components/NavigationRegister";

const { Navigator, Screen }  = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="início" tabBarOptions={{
      activeTintColor: '#fc8019'
    }}>
      <Screen  name="início"       component={() => (
        <NavigationRegister>
          <Dashboard/>
        </NavigationRegister>
      )} options={{ 
        tabBarIcon: () => <Feather name="map-pin" size={20}/> 
      }}/>
      <Screen 
      name="Pedidos" 
      component={() => (
        <NavigationRegister>
          <Order/>
        </NavigationRegister>
      )} 
      options={{
        tabBarIcon: () => <Ionicons name="cart-outline" size={20}/> 
      }}
      />
      <Screen 
      name="Explorar" 
      component={() => (
        <NavigationRegister>
          <Explore/>
        </NavigationRegister>
      )}
      options={{
        tabBarIcon: () => <Feather name="search" size={20}/> 
      }}/>
      <Screen 
      name="Carrinho" 
      component={() => (
        <NavigationRegister>
          <Cart/>
        </NavigationRegister>
      )} 
      options={{
        tabBarIcon: () => (<>
          <span 
          style={{ 
            position: 'absolute',
            top: 0,
            right: -2,
            borderRadius: '100%', 
            background: '#3bbdb4', 
            height: 16, 
            width: 16,
            textAlign: 'center',
            fontSize: 10,
            color: '#fff'            
            }}>0</span>
          <Feather name="shopping-bag" size={20}/>
        </>) 
      }}/>
      <Screen 
      name="Conta" 
      component={() => (
        <NavigationRegister>
          <Account/>
        </NavigationRegister>
      )}
      options={{
        tabBarIcon: () => <SimpleLineIcons name="user" size={20}/> 
      }}/>
    </Navigator>
  )
};
export { TabRoutes };
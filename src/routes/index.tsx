import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { TabRoutes } from './tab.routes';
import useAuth from '../hooks/Auth';
import { TabStack } from './tabStack.route';

export default function Routes () {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.email ? <TabStack/> : <AuthRoutes/>}
    </NavigationContainer>
  )
};
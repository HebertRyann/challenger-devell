import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from '../routes/app.routes';
import { TabRoutes } from '../routes/tab.routes';

export default function Routes () {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  )
};
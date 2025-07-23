import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Login';
import TabsRoutes from './bottom-tabs.routes';

const Stack = createStackNavigator();


export default function StackRoutes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ 
                title: 'Login' 
            }} 
          />
          
          <Stack.Screen
            name="TabsRoutes"
            component={TabsRoutes}
            options={{ 
                headerShown: false 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Tela1 from '../Tela1';
import Tela2 from '../Tela2';
import Tela3 from '../Tela3';

const Tab = createBottomTabNavigator();

export default function TabsRoutes({ route }: any) {

    const { teste } = route.params;
    const [texto, setTexto] = useState('');

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Tela1"
                component={Tela1}
                initialParams={{ ola: teste }} />
            <Tab.Screen
                name="Tela2" >
                {() => <Tela2 texto={texto} setTexto={setTexto} />}
            </Tab.Screen>
            <Tab.Screen
                name="Tela3">
                {() => <Tela3 texto={texto} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
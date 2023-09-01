import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icons from "@expo/vector-icons/MaterialIcons"
import { TabBar } from 'react-native-tab-view';

export type TabsStackParamList = {
    Home: undefined;
    Cart: undefined;
    Payement: undefined;
    Profil: undefined;
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>()
 
const TabsNavigator = () => {
  return (
    <TabsStack.Navigator>
        <TabsStack.Screen 
            name='Home' 
            component={HomeScreen} 
            options={{
                headerShown: false, 
                tabBarIcon(propos){
                    return <Icons name='home' {...propos} />
                },
            }}/>
        <TabsStack.Screen name='Cart' component={HomeScreen} 
            options={{
                headerShown: false, 
                tabBarIcon(propos){
                    return <Icons name='shopping-cart' {...propos} />
                },
            }} />
        <TabsStack.Screen name='Payement' component={HomeScreen} 
            options={{
                headerShown: false, 
                tabBarIcon(propos){
                    return <Icons name='account-balance-wallet' {...propos} />
                },
            }} />
        <TabsStack.Screen name='Profil' component={HomeScreen} 
            options={{
                headerShown: false, 
                tabBarIcon(propos){
                    return <Icons name='person' {...propos} />
                },
            }} />
    </TabsStack.Navigator>
  )
}

export default TabsNavigator


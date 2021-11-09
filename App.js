import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculator from './components/calculator';
import History from './components/history';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {

 

  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') 
            {iconName= 'md-calculator-outline';} 
            else if (route.name === 'History') 
            {iconName= 'md-hourglass-outline';}
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}>
          <Tab.Screen name="Home" component={Calculator} />
          <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

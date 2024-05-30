import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BadgerNewsScreen from '../screens/BadgerNewsScreen';
import BadgerPreferencesScreen from '../screens/BadgerPreferencesScreen';
import BadgerNewsStack from './BadgerNewsStack';

const Tab = createBottomTabNavigator();

function BadgerTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="News List" component={{BadgerNewsStack}} options={{headerTitle: "Article", headerShown: false}}/>
            <Tab.Screen name="Preferences" component={{BadgerPreferencesScreen}}/>
        </Tab.Navigator>
    )
}

export default BadgerTab;
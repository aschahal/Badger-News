import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgerNewsScreen from '../screens/BadgerNewsScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen'; 

const Stack = createStackNavigator();

function BadgerNewsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Articles" component={BadgerNewsScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Article" component={ArticleDetailScreen} options={{ headerShown: true }}/>
        </Stack.Navigator>
    )
}

export default BadgerNewsStack;
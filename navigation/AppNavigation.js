import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomeScreen'>
                <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} component={WelcomeScreen} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CloseButton from './CloseButton';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createBottomTabNavigator();

const reactNavigationDecorator = story => {
    const Screen = () => story();
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Puk" component={Screen} options={{ tabBarVisible: false, tabBarLabel: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

storiesOf('CloseButton', module).addDecorator(reactNavigationDecorator).add('default', () => <CloseButton />)
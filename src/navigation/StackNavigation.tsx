import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from '../types';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import HomeScreen from '../screens/MyCompaniesScreen';
import { EDIT_COMPANY } from '../store/actions';

const { Navigator, Screen } = createStackNavigator<StackParamList>();

const StackNavigator = () => (
  <Navigator initialRouteName='My companies'>
    <Screen name='My companies' component={HomeScreen} />
    <Screen name={EDIT_COMPANY} component={CompanyDetailsScreen} />
  </Navigator>
)

export { StackNavigator };
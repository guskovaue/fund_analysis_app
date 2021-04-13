import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from '../types';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import HomeScreen from '../screens/MyCompaniesScreen';
import { EDIT_COMPANY, MY_COMPANIES } from '../store/actions';

const { Navigator, Screen } = createStackNavigator<StackParamList>();

const StackNavigator = (): React.ReactElement => (
  <Navigator initialRouteName={MY_COMPANIES}>
    <Screen name={MY_COMPANIES} component={HomeScreen} />
    <Screen name={EDIT_COMPANY} component={CompanyDetailsScreen} />
  </Navigator>
)

export default StackNavigator;
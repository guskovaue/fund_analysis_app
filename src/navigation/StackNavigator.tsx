import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamList } from '../types';
import MyCompaniesScreen from '../screens/MyCompaniesScreen';
import { MY_COMPANIES, COMPANY_DETAILS } from '../constants';
import { TabNavigator } from './TabNavigator'

const { Navigator, Screen } = createStackNavigator<ParamList>();

const StackNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen name={MY_COMPANIES} component={MyCompaniesScreen} />
    <Screen name={COMPANY_DETAILS} component={TabNavigator} />
  </Navigator>
)

export { StackNavigator }
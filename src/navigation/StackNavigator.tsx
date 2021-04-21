import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamList } from '../types';
import MyCompaniesScreen from '../screens/MyCompaniesScreen';
import CompanyDeletedScreen from '../screens/CompanyDeletedScreen';
import { MY_COMPANIES, COMPANY_DETAILS, DELETE_COMPANY } from '../constants';
import { TabNavigator } from './TabNavigator'

const { Navigator, Screen } = createStackNavigator<ParamList>();

const StackNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen name={MY_COMPANIES} component={MyCompaniesScreen} />
    <Screen name={COMPANY_DETAILS} component={TabNavigator} />
    <Screen name={DELETE_COMPANY} component={CompanyDeletedScreen} />
  </Navigator>
)

export { StackNavigator }
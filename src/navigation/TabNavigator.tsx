import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../types';
import { COMPANY_PERFORMANCE, COMPANY_INFO } from '../constants';
import CompanyDetails2Screen from '../screens/CompanyDetails2Screen';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';

const { Navigator, Screen } = createBottomTabNavigator<ParamList>();

const TabNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen name={COMPANY_INFO} component={CompanyDetailsScreen} />
    <Screen name={COMPANY_PERFORMANCE} component={CompanyDetails2Screen} />
  </Navigator>
);

export { TabNavigator };
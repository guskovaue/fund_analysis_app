import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types'
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import CompanyDetailsScreen2 from '../screens/CompanyDetailsScreen2';
import { EDIT_COMPANY, EDIT_COMPANY_2 } from '../store/actions';

const { Navigator, Screen }= createBottomTabNavigator<TabParamList>();

const TabNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen name={EDIT_COMPANY} component={CompanyDetailsScreen} />
    <Screen name={EDIT_COMPANY_2} component={CompanyDetailsScreen2} />
  </Navigator>
);

export default TabNavigator;
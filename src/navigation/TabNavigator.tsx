import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../types';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import CompanyDetailsScreen2 from '../screens/CompanyDetails2Screen';
import { EDIT_COMPANY, EDIT_COMPANY_2 } from '../constants';

const { Navigator, Screen }= createBottomTabNavigator<ParamList>();

const TabNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen name={EDIT_COMPANY} component={CompanyDetailsScreen} />
    <Screen name={EDIT_COMPANY_2} component={CompanyDetailsScreen2} />
  </Navigator>
);

export default TabNavigator;
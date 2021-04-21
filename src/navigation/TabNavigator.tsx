import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../types';
import { COMPANY_PERFORMANCE, COMPANY_INFO } from '../constants';
import CompanyDetails2Screen from '../screens/CompanyDetails2Screen';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import { useRoute } from '@react-navigation/native';

const { Navigator, Screen } = createBottomTabNavigator<ParamList>();

const TabNavigator = (): React.ReactElement => {
  const route = useRoute();
  const params = route.params;

  return (
    <Navigator>
      <Screen name={COMPANY_INFO} component={CompanyDetailsScreen} initialParams={params} />
      <Screen name={COMPANY_PERFORMANCE} component={CompanyDetails2Screen} initialParams={params} />
    </Navigator>
  )
};

export { TabNavigator };
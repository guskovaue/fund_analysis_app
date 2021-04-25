import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamList } from '../types';
import { COMPANY_PERFORMANCE, COMPANY_INFO } from '../constants';
import { CompanyDetails2Screen, CompanyDetailsScreen } from '../screens';
import { useRoute } from '@react-navigation/native';

const { Navigator, Screen } = createBottomTabNavigator<ParamList>();

const TabNavigator = (): React.ReactElement => {
  const route = useRoute();
  const params = route.params;

  return (
    <Navigator tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'pink',
      style: {
        backgroundColor: 'black',
      }
    }}>
      <Screen
        name={COMPANY_INFO}
        component={CompanyDetailsScreen}
        initialParams={params}
        options={{ title: 'INFO' }}
      />
      <Screen
        name={COMPANY_PERFORMANCE}
        component={CompanyDetails2Screen}
        initialParams={params}
        options={{ title: 'PERFORMANCE' }}
      />
    </Navigator >
  )
};

export { TabNavigator };
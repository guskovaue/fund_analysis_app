import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamList } from '../types';
import { ErrorScreen, MyCompaniesScreen, SuccessScreen, CompanyNameInputScreen } from '../screens';
import { FAIL_ADD_NEW_COMPANY, MY_COMPANIES, COMPANY_DETAILS, SUCCESS, NAME_COMPANY_INPUT } from '../constants';
import { TabNavigator } from './TabNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { COMPANY_PERFORMANCE, COMPANY_INFO } from '../constants';

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'INFO';
  switch (routeName) {
    case COMPANY_INFO:
      return 'INFO';
    case COMPANY_PERFORMANCE:
      return 'PERFORMANCE';
  }
}

const { Navigator, Screen } = createStackNavigator<ParamList>();

const StackNavigator = (): React.ReactElement => (
  <Navigator screenOptions={{ headerStyle: { backgroundColor: 'black' } }}>
    <Screen
      name={MY_COMPANIES}
      component={MyCompaniesScreen}
      options={{
        title: 'Back',
        headerTintColor: 'pink'
      }}
    />
    <Screen
      name={NAME_COMPANY_INPUT}
      component={CompanyNameInputScreen}
      options={{
        title: 'Back',
        headerTintColor: 'pink'
      }}
    />
    <Screen
      name={COMPANY_DETAILS}
      component={TabNavigator}
      options={({ route }) => ({ headerTitle: getHeaderTitle(route), headerTintColor: 'pink' })}
    />
    <Screen name={SUCCESS} component={SuccessScreen} />
    <Screen name={FAIL_ADD_NEW_COMPANY} component={ErrorScreen} />
  </Navigator>
)

export { StackNavigator }
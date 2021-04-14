import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamList } from '../types';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import CompanyDetails2Screen from '../screens/CompanyDetails2Screen';
import HomeScreen from '../screens/MyCompaniesScreen';
import { EDIT_COMPANY, EDIT_COMPANY_2, MY_COMPANIES } from '../constants';

const { Navigator, Screen } = createStackNavigator<ParamList>();

const MainStackNavigator = (): React.ReactElement => (
  <Navigator initialRouteName={MY_COMPANIES}>
    <Screen name={MY_COMPANIES} component={HomeScreen} />
    <Screen name={EDIT_COMPANY} component={CompanyDetailsScreen} />
  </Navigator>
)

const SmallStackNavigator = (): React.ReactElement => (
    <Navigator>
      <Screen name={EDIT_COMPANY_2} component={CompanyDetails2Screen} />
    </Navigator>
  )

export { MainStackNavigator, SmallStackNavigator }
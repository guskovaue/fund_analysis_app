import { StackNavigationProp } from '@react-navigation/stack';
import {
  FAIL_ADD_NEW_COMPANY,
  FUNDAMENTAL,
  TECHNICAL,
  MY_COMPANIES,
  COMPANY_DETAILS,
  SUCCESS,
  NAME_COMPANY_INPUT,
} from './constants';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { store } from './App';

// maybe create 2 diff param lists for tab and stack navigation?
export type ParamList = {
  [MY_COMPANIES]?: undefined;
  [FUNDAMENTAL]?: { companyName?: string };
  [COMPANY_DETAILS]?: { screen: string; params: { companyName?: string } };
  [TECHNICAL]?: { screen: string; params: { companyName?: string } };
  [SUCCESS]?: { text?: string };
  [FAIL_ADD_NEW_COMPANY]?: { companyName?: string };
  [NAME_COMPANY_INPUT]?: undefined;
}

export type MyCompanyScreenStackNavigationProp = StackNavigationProp<ParamList, typeof NAME_COMPANY_INPUT>;
export type CompanyNameInputScreenStackNavigationProp = StackNavigationProp<ParamList, typeof MY_COMPANIES>;

export type CompanyDetailsScreenCompositeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<ParamList, typeof FUNDAMENTAL>,
  StackNavigationProp<ParamList, typeof COMPANY_DETAILS>
>
export type CompanyDetails2ScreenTabNavigationProp = BottomTabNavigationProp<ParamList, typeof TECHNICAL>;

export type CompanyNameInputRouteProp = RouteProp<ParamList, typeof NAME_COMPANY_INPUT>;
export type CompanyDetailsRouteProp = RouteProp<ParamList, typeof FUNDAMENTAL>;
export type CompaynyDetails2RouteProp = RouteProp<ParamList, typeof TECHNICAL>;
export type SuccessRouteProp = RouteProp<ParamList, typeof SUCCESS>;

export type State = ReturnType<typeof store.getState>;

export type CompanyInfo = { Name: string, DividendDate: string, Sector: string, PERatio: string, EBITDA: string };

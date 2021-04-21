import { StackNavigationProp } from '@react-navigation/stack';
import { INITIAL_STATE } from './store/reducers';
import { FAIL_ADD_NEW_COMPANY, COMPANY_INFO, COMPANY_PERFORMANCE, MY_COMPANIES, COMPANY_DETAILS, SUCCESS } from './constants';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

// maybe create 2 diff param lists for tab and stack navigation?
export type ParamList = {
  [MY_COMPANIES]?: undefined;
  [COMPANY_INFO]?: { companyName?: string };
  [COMPANY_DETAILS]?: { screen: string; params: { companyName?: string } };
  [COMPANY_PERFORMANCE]?: { companyName?: string };
  [SUCCESS]?: { text?: string };
  [FAIL_ADD_NEW_COMPANY]?: { companyName?: string };
}

export type MyCompanyScreenStackNavigationProp = StackNavigationProp<ParamList, typeof MY_COMPANIES>;
export type CompanyDetailsScreenCompositeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<ParamList, typeof COMPANY_INFO>,
  StackNavigationProp<ParamList, typeof COMPANY_DETAILS>
>
export type CompanyDetails2ScreenTabNavigationProp = BottomTabNavigationProp<ParamList, typeof COMPANY_PERFORMANCE>;

export type CompanyDetailsRouteProp = RouteProp<ParamList, typeof COMPANY_INFO>;
export type CompaynyDetails2RouteProp = RouteProp<ParamList, typeof COMPANY_PERFORMANCE>;
export type SuccessRouteProp = RouteProp<ParamList, typeof SUCCESS>;

export type State = typeof INITIAL_STATE;

import { StackNavigationProp } from '@react-navigation/stack';
import { INITIAL_STATE } from './store/reducers';
import { EDIT_COMPANY, EDIT_COMPANY_2, MY_COMPANIES } from './constants';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

// maybe create 2 diff param lists for tab and stack navigation?
export type ParamList = {
  [MY_COMPANIES]?: undefined;
  [EDIT_COMPANY]?: { id?: number, companyName?: string};
  [EDIT_COMPANY_2]?: { id?: number, companyName?: string};
}

export type MyCompanyScreenStackNavigationProp = StackNavigationProp<ParamList, typeof MY_COMPANIES>;
export type CompanyDetailsScreenCompositeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<ParamList, typeof EDIT_COMPANY>, 
  StackNavigationProp<ParamList, typeof EDIT_COMPANY>
>
export type CompanyDetails2ScreenTabNavigationProp = BottomTabNavigationProp<ParamList, typeof EDIT_COMPANY_2>;

export type CompanyDetailsRouteProp = RouteProp<ParamList, typeof EDIT_COMPANY>;
export type CompaynyDetails2RouteProp = RouteProp<ParamList, typeof EDIT_COMPANY_2>;

export type State = typeof INITIAL_STATE;
export type Action = {
  type: string
  companyName: string
}

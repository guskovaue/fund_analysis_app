import { StackNavigationProp } from '@react-navigation/stack';
import { INITIAL_STATE } from './store/reducers';
import { EDIT_COMPANY, EDIT_COMPANY_2, MY_COMPANIES } from './store/actions';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

export type StackParamList = {
  [MY_COMPANIES]: undefined;
  [EDIT_COMPANY]: { id?: number, companyName?: string};
};

export type TabParamList = {
  [MY_COMPANIES]: undefined;
  [EDIT_COMPANY]: { id?: number, companyName?: string};
  [EDIT_COMPANY_2]: { id?: number, companyName?: string};
}

export type MyCompanyScreenStackNavigationProp = StackNavigationProp<StackParamList, typeof MY_COMPANIES>;
export type CompanyDetailsScreenCompositeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<StackParamList, typeof EDIT_COMPANY>, 
  StackNavigationProp<StackParamList, typeof EDIT_COMPANY>
>
export type CompanyDetails2ScreenTabNavigationProp = BottomTabNavigationProp<TabParamList, typeof EDIT_COMPANY_2>;

export type CompanyDetailsRouteProp = RouteProp<StackParamList, typeof EDIT_COMPANY>;
export type CompaynyDetails2RouteProp = RouteProp<TabParamList, typeof EDIT_COMPANY_2>;

export type State = typeof INITIAL_STATE;
export type Action = {
  type: string
  companyName: string
}

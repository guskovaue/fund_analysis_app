import { StackNavigationProp } from '@react-navigation/stack';
import { INITIAL_STATE } from './store/reducers';

export type StackParamList = {
    'My companies': undefined;
    'Add new company': undefined;
  };

export type MyCompanyScreenNavigationProp = StackNavigationProp<StackParamList, 'My companies'>;

export  type AddNewCompanyScreenNavigationProp = StackNavigationProp<StackParamList, 'Add new company'>;

export type State = typeof INITIAL_STATE;
export type Action = {
  type: string
  companyName: string
}

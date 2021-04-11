import { StackNavigationProp } from '@react-navigation/stack';
import { INITIAL_STATE } from './store/reducers';
import { EDIT_COMPANY } from './store/actions';

export type StackParamList = {
    'My companies': undefined;
    [EDIT_COMPANY]: { id?: number, companyName?: string};
  };

export type MyCompanyScreenNavigationProp = StackNavigationProp<StackParamList, 'My companies'>;

export  type AddNewCompanyScreenNavigationProp = StackNavigationProp<StackParamList, typeof EDIT_COMPANY>;

export type State = typeof INITIAL_STATE;
export type Action = {
  type: string
  companyName: string
}

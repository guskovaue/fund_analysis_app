import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
    'My companies': undefined;
    'Add new company': undefined;
  };

export type MyCompanyScreenNavigationProp = StackNavigationProp<StackParamList, 'My companies'>;

export  type AddNewCompanyScreenNavigationProp = StackNavigationProp<StackParamList, 'Add new company'>;
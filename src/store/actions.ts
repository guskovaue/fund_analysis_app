import { EDIT_COMPANY } from '../constants';

export const createAddNewCompanyAction = ( companyName: string ): { type: string; companyName: string} => {
  return {
    type: EDIT_COMPANY,
    companyName
  }
};

import { COMPANY_INFO } from '../constants';

export const createAddNewCompanyAction = ( companyName: string ): { type: string; companyName: string} => {
  return {
    type: COMPANY_INFO,
    companyName
  }
};

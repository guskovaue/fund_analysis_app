import { COMPANY_INFO, DELETE_COMPANY } from '../constants';

export const createAddNewCompanyAction = (companyName: string): { type: string; companyName: string } => {
  return {
    type: COMPANY_INFO,
    companyName
  }
};

export const createDeleteCompanyAction = (companyName: string): { type: string; companyName: string } => {
  return {
    type: DELETE_COMPANY,
    companyName
  }
};

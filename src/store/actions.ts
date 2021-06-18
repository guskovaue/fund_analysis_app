import { FUNDAMENTAL, DELETE_COMPANY } from '../constants';

export const createAddNewCompanyAction = (companyName: string): { type: string; companyName: string } => {
  return {
    type: FUNDAMENTAL,
    companyName
  }
};

export const createDeleteCompanyAction = (companyName: string): { type: string; companyName: string } => {
  return {
    type: DELETE_COMPANY,
    companyName
  }
};

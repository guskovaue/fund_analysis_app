export const ADD_NEW_COMPANY = 'ADD_NEW_COMPANY';

export const createAddNewCompanyAction = ( companyName: string ): { type: string; companyName: string} => {
  return {
    type: ADD_NEW_COMPANY,
    companyName
  }
};

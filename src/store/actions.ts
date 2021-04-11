export const EDIT_COMPANY = 'Edit company';

export const createAddNewCompanyAction = ( companyName: string ): { type: string; companyName: string} => {
  return {
    type: EDIT_COMPANY,
    companyName
  }
};

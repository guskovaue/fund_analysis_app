export const EDIT_COMPANY = 'Edit company';
export const MY_COMPANIES = 'My companies';
export const EDIT_COMPANY_2 = 'Edit company 2';

export const createAddNewCompanyAction = ( companyName: string ): { type: string; companyName: string} => {
  return {
    type: EDIT_COMPANY,
    companyName
  }
};

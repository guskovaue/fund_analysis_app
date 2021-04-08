export const ADD_NEW_COMPANY = 'ADD_NEW_COMPANY';

export const createAddNewCompanyAction = ( name: string ): { type: string; name: string} => ({
    type: ADD_NEW_COMPANY,
    name
});

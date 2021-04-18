import { COMPANY_INFO, DELETE_COMPANY } from '../constants';
import { AnyAction } from 'redux';

export const INITIAL_STATE = {
    companiesNames: [] as string[],
}

type State = typeof INITIAL_STATE;

export default (state = INITIAL_STATE, action: AnyAction): State => {
  switch (action.type) {
    case COMPANY_INFO:
      return {
          ...state, 
          companiesNames: [...state.companiesNames, action.companyName ],
        };
    case DELETE_COMPANY:
      return {
        ...state,
        companiesNames: state.companiesNames.filter(value => value != action.companyName)
      }
    default:
      return state;
  }
};

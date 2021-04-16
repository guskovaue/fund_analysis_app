import { COMPANY_INFO } from '../constants';
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
    default:
      return state;
  }
};

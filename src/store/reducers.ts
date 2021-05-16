import {
  COMPANY_INFO,
  DELETE_COMPANY,
  FETCH_COMPANY_OVERVIEW_FULFILLED,
  FETCH_COMPANY_OVERVIEW_PENDING,
  FETCH_COMPANY_OVERVIEW_REJECTED
} from '../constants';
import { AnyAction } from 'redux';

export const INITIAL_STATE = {
  companiesNames: [] as string[],
  companyOverview: {} as Record<string, unknown>,
  error: null,
  loading: false
}

type State = typeof INITIAL_STATE;

export default (state = INITIAL_STATE, action: AnyAction): State => {
  switch (action.type) {
    case COMPANY_INFO:
      return {
        ...state,
        companiesNames: [...state.companiesNames, action.companyName],
      };
    case DELETE_COMPANY:
      return {
        ...state,
        companiesNames: state.companiesNames.filter(value => value != action.companyName)
      }
    case FETCH_COMPANY_OVERVIEW_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMPANY_OVERVIEW_FULFILLED:
      return {
        ...state,
        companyOverview: action.payload,
        loading: false
      };
    case FETCH_COMPANY_OVERVIEW_REJECTED:
      return {
        ...state,
        loading: false,
        error: 'happened'
      };
    default:
      return state;
  }
};

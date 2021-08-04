import {
  FUNDAMENTAL,
  DELETE_COMPANY,
  FETCH_COMPANY_OVERVIEW_FULFILLED,
  FETCH_COMPANY_OVERVIEW_PENDING,
  FETCH_COMPANY_OVERVIEW_REJECTED
} from '../constants';
import { AnyAction } from 'redux';

export const INITIAL_STATE = {
  companiesNames: [] as string[],
  companiesData: {} as Record<string, unknown>,
  error: null,
  loading: false
}

type State = typeof INITIAL_STATE;

export default (state = INITIAL_STATE, action: AnyAction): State => {
  switch (action.type) {
    case FUNDAMENTAL:
      return {
        ...state,
        companiesNames: [...state.companiesNames, action.companyName],
      };
    case DELETE_COMPANY: {
      return {
        ...state,
        companiesNames: state.companiesNames.filter(value => value != action.companyName),
        companiesData: Object.keys(state.companiesData)
          .filter(key => key !== action.companyName)
          .reduce((newCompaniesData, key) => {
            newCompaniesData[key] = state.companiesData[key];
            return newCompaniesData;
          }, {})
      }
    }
    case FETCH_COMPANY_OVERVIEW_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMPANY_OVERVIEW_FULFILLED:
      return {
        ...state,
        companiesData: { ...state.companiesData, [action.payload.Symbol]: action.payload },
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

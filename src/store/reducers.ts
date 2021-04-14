import { EDIT_COMPANY } from '../constants';

export const INITIAL_STATE = {
    companiesNames: [] as string[],
}

type State = typeof INITIAL_STATE;
type Action = {
  type: string
  companyName: string
}

export default (state = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case EDIT_COMPANY:
      return {
          ...state, 
          companiesNames: [...state.companiesNames, action.companyName ],
        };
    default:
      return state;
  }
};

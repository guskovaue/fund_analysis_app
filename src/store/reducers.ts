import { ADD_NEW_COMPANY } from './actions';

export const INITIAL_STATE = {
    companies: [] as string[]
}

type State = typeof INITIAL_STATE;
type Action = {
  type: string
  companyName: string
}

export default (state = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case ADD_NEW_COMPANY:
      return {...state, companies: [ ...state.companies, action.companyName]};
    default:
      return state;
  }
}
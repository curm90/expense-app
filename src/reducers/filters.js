import * as types from '../actions/types/filters';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: '',
  endDate: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case types.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text,
      };
    case types.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount',
      };
    case types.SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date',
      };
    case types.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case types.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

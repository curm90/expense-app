import * as types from '../actions/types/expenses';

const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.expense];
    case types.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case types.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

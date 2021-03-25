import * as types from './types/expenses';

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = '',
      createdAt = '',
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return dispatch(addExpense(expense));
  };
};

export const addExpense = (expense) => ({
  type: types.ADD_EXPENSE,
  expense,
});

export const removeExpense = ({ id } = {}) => ({
  type: types.REMOVE_EXPENSE,
  id,
});

export const editExpense = (id, updates) => ({
  type: types.EDIT_EXPENSE,
  id,
  updates,
});

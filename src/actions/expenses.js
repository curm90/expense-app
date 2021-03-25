import * as types from './types/expenses';

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

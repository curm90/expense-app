import db from '../firebase/firebase';
import * as types from './types/expenses';

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = {
      description,
      note,
      amount,
      createdAt,
    };

    return db
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates) => ({
  type: types.EDIT_EXPENSE,
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

export const setExpenses = (expenses) => ({
  type: types.SET_EXPENSES,
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};

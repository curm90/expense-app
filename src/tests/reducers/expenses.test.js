import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

it('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

it('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

it('should not remove expense if id doesnt exist', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '123123' };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

it('should add an expenses', () => {
  const expense = {
    id: '102',
    description: 'my test expense',
    note: '',
    amount: 500,
    createdAt: 0,
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

it('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);

  expect(state[1].amount).toBe(amount);
});

it('should not edit an expense if id doesnt exist', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123412323',
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

it('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]],
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
});

import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

it('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

it('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value',
    },
  });
});

it('should setup add expense action object with user input', () => {
  const expenseData = {
    description: 'water bill',
    note: 'overdue',
    amount: '5000',
    createdAt: 1000,
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

it('should setup add expense action object with default values', () => {
  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultExpenseData,
      id: expect.any(String),
    },
  });
});

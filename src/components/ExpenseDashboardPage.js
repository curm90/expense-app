import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

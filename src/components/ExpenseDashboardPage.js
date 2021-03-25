import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
  <div>
    <h1>Dashboard</h1>
    <ExpenseSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

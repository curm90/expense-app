import React from 'react';
import ExpenseForm from './ExpenseForm';

class AddExpensePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Add expense page</h1>
        <ExpenseForm />
      </div>
    );
  }
}

export default AddExpensePage;

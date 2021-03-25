import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      amount: '',
      note: '',
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount',
      }));
    } else {
      this.setState(() => ({ error: '' }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder='Add a note for your expense (Optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button type='submit'>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;

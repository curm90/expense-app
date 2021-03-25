import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  // setStartDate,
  // setEndDate,
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calenderFocused: null,
    };
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);

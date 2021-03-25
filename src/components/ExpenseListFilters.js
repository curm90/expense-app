import React from 'react';
import { connect } from 'react-redux';
// import { DateRangePicker } from 'react-dates';
import {
  // setStartDate,
  // setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calenderFocused: null,
    };
  }

  // onDatesChange = ({ startDate, endDate }) => {
  //   this.props.dispatch(setStartDate(startDate));
  //   this.props.dispatch(setEndDate(endDate));
  // };

  // onFocusChange = (calendarFocused) => {
  //   this.setState(() => ({ calendarFocused }));
  // };

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
        {/* <DateRangePicker
          startDateId='startDate'
          endDateId='endDate'
          startDate={this.props.filters.startDate}
          endDate={this.props.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);

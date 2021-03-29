import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, defaultFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

it('should render ExpenseListFilters with default props correctly', () => {
  wrapper.setProps({
    filters: defaultFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should sort by text change', () => {
  const value = 'My new text';
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters,
  });

  wrapper.find('select').simulate('change', {
    target: { value },
  });

  expect(sortByDate).toHaveBeenCalled();
  expect(sortByAmount).toHaveBeenCalledTimes(0);
});

it('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });

  expect(sortByAmount).toHaveBeenCalled();
  expect(sortByDate).toHaveBeenCalledTimes(0);
});

it('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

it('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

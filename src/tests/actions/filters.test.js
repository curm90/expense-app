import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

it('should set up set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

it('should set up set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

it('should generate set text filter object with text value', () => {
  const action = setTextFilter('water');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'water',
  });
});

it('should generate set text filter object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

it('should set up sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE',
  });
});

it('should set up sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

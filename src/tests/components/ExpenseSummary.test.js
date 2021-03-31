import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

it('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should correctly render ExpenseSummary', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={235123121221} />
  );
  expect(wrapper).toMatchSnapshot();
});

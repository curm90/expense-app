import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

it('should render login page correctly', () => {
  const wrapper = shallow(<LoginPage />);

  expect(wrapper).toMatchSnapshot();
});

it('should call startLogout on click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');

  expect(startLogin).toHaveBeenCalled();
});

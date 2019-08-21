/*
* shallow lets us test components using regular javascript.
* It only renders the given component.
*/
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let isNavbarOpen;
let setNavbarStatus;
let wrapper;

beforeEach(() => {
  isNavbarOpen = true;
  setNavbarStatus = jest.fn();

  wrapper = shallow(
    <Header
      isNavbarOpen={isNavbarOpen}
      setNavbarStatus={setNavbarStatus}
    />
  );
});

test('should render header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick correctly', () => {
  wrapper.find('button').simulate('click');
  expect(setNavbarStatus).toHaveBeenCalledWith(false);
});

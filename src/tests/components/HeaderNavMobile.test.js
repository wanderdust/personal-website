import React from 'react';
import { shallow } from 'enzyme';
import { HeaderNavMobile } from '../../components/HeaderNavMobile';

let isNavbarOpen;
let setNavbarStatus;
let wrapper;

beforeEach(() => {
  isNavbarOpen = true;
  setNavbarStatus = jest.fn();

  wrapper = shallow(
    <HeaderNavMobile
      isNavbarOpen={isNavbarOpen}
      setNavbarStatus={setNavbarStatus}
    />
  );
});

test('should render HeaderNavMobile correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick correctly', () => {
  wrapper.find('.header__nav-item').at('1').simulate('click');
  expect(setNavbarStatus).toHaveBeenCalledWith(false);
});

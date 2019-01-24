import setIsNavbarOpen from '../../actions/mobileNav';

test('Should create the proper setIsNavbarOpen action', () => {
  const isNavbarOpen = true;

  expect(setIsNavbarOpen(isNavbarOpen)).toEqual({
    type: 'TOGGLE_NAVBAR',
    isNavbarOpen
  });
});

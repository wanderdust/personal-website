import mobileNavReducer from '../../reducers/mobileNav';
import mobileNavState from '../fixtures/mobileNav';

describe('should set the correct isNavbarOpen status', () => {
  test('should set the correct default state for isNavbarOpen', () => {
    const isNavbarOpen = false; // Default state.

    expect(mobileNavReducer(mobileNavState, '@@INIT')).toEqual({
      isNavbarOpen
    });
  });

  test('should set the isNavbarOpen status', () => {
    const isNavbarOpen = true;
    const action = {
      type: 'TOGGLE_NAVBAR',
      isNavbarOpen
    };

    expect(mobileNavReducer(mobileNavState, action)).toEqual({
      isNavbarOpen
    });
  });
});

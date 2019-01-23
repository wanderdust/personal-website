const defaultState = {
  isNavbarOpen: false
};

const mobileNavReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAVBAR':
      return {
        ...state,
        isNavbarOpen: action.isNavbarOpen
      };
    default:
      return state;
  }
};

export default mobileNavReducer;

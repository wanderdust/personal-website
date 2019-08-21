import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';
import { setIsNavbarOpen } from '../actions/mobileNav';

export const HeaderNavMobile = ({ isNavbarOpen, setNavbarStatus }) => {
  const headerLinks = ['Profile', 'Experience', 'Abilities', 'Projects', 'Contact'];

  const handleOnClick = () => {
    setNavbarStatus(!isNavbarOpen);
  };
  // For accesibilty for people without mouse.
  const handleOnKeyPress = (e) => {};

  const renderLinkButtons = () => headerLinks.map((linkName) => {
    const referralHash = `#${linkName.toLowerCase()}`;
    return (
      <div
        key={uuid()}
        onClick={handleOnClick}
        onKeyPress={handleOnKeyPress}
        role="presentation"
        className="header__nav-item mobile-header__nav-item"
      >
        <a className="button button--link" href={referralHash}>{linkName}</a>
      </div>
    );
  });

  return (
    <div className={`mobile-header show-for-mobile ${isNavbarOpen && 'mobile-header--open'}`}>
      {renderLinkButtons()}
    </div>
  );
};

HeaderNavMobile.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  setNavbarStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isNavbarOpen: state.mobileNav.isNavbarOpen
});

const mapDispatchToProps = dispatch => ({
  setNavbarStatus: isNavbarOpen => dispatch(setIsNavbarOpen(isNavbarOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavMobile);

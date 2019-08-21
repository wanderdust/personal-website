import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';
import { setIsNavbarOpen } from '../actions/mobileNav';

export const Header = ({ isNavbarOpen, setNavbarStatus }) => {
  const headerLinks = ['Profile', 'Experience', 'Abilities', 'Projects', 'Contact'];

  const handleOnClick = () => {
    setNavbarStatus(!isNavbarOpen);
  };
  // For accesibilty for people without mouse.
  const handleOnKeyPress = (e) => {};

  const renderLinkButtons = () => headerLinks.map((linkName) => {
    // Get the id of the element eg: #profile
    const referralHash = `#${linkName.toLowerCase()}`;
    return (
      <div key={uuid()} className="header__nav-item">
        <a className="button button--link" href={referralHash}>{linkName}</a>
      </div>
    );
  });

  return (
    <header className="header">
      <div>
        <div className="header__content">

          <Link className="header-brand" to="/">
            <h2 className="header-brand__title">Pablo Lopez</h2>
            <h4 className="header-brand__subtitle">Software Developer</h4>
          </Link>

          <div className="header__nav show-for-desktop">
            {renderLinkButtons()}
          </div>

          <button
            onClick={handleOnClick}
            onKeyPress={handleOnKeyPress}
            type="button"
            className="button button--link header__nav-item header__nav-item--mobile mobile-menu-trigger show-for-mobile"
          >
            <span className="menu-icon-mobile">
              <img src="images/icon-burger-menu.svg" alt="menu icon for mobile" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  setNavbarStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isNavbarOpen: state.mobileNav.isNavbarOpen
});

const mapDispatchToProps = dispatch => ({
  setNavbarStatus: isNavbarOpen => dispatch(setIsNavbarOpen(isNavbarOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

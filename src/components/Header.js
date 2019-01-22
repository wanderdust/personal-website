import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div>
      <div className="header__content">

        <Link className="header-brand" to="/">
          <h2 className="header-brand__title">Pablo Lopez</h2>
          <h4 className="header-brand__subtitle">Front End Developer</h4>
        </Link>

        <div className="header__nav show-for-desktop">
          <div className="header__nav-item">
            <a className="button button--link" href="#profile"> Profile </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#experience"> Experience </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#abilities"> Abilities </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#projects"> Projects </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#contact"> Contact </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

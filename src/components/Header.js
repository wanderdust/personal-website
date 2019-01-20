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

        <div className="header__nav">
          <div className="header__nav-item">
            <a className="button button--link" href="#Profile"> Profile </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#Experience"> Experience </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#Abilities"> Abilities </a>
          </div>
          <div className="header__nav-item">
            <a className="button button--link" href="#Projects"> Projects </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header header--coin-app">
    <div className="content-container">
      <div className="header__content">
        <Link className="header-brand" to="/coin-app">
          <h2 className="header-brand__title">Coin Identifier</h2>
          <h4 className="header-brand__subtitle">What coin do you have?</h4>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;

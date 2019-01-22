import React from 'react';

export const Footer = () => (
  <footer className="footer">
    <div>
      <ul className="footer__icons">
        <li>
          <a href="https://github.com/wanderdust?tab=repositories">
            <img className="footer__icon" src="/images/icon-github.svg" alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lopezsantoripablo">
            <img className="footer__icon" src="/images/icon-linkedin.svg" alt="Linkedin" />
          </a>
        </li>
      </ul>
      <p>Icons from https://iconmonstr.com</p>
    </div>
  </footer>
);

export default Footer;

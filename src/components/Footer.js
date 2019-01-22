import React from 'react';

export const Footer = () => (
  <footer className="footer">
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
    <p>Developed by Pablo López</p>
    <i>
      <span>Social icons from </span>
      <a href="https://iconmonstr.com" target="_blank">iconmonstr.com</a>
    </i>
  </footer>
);

export default Footer;

// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { Link } from 'gatsby';

// ----------------------------------------------
// Navigation
// ----------------------------------------------
export default () => (
  <nav>
    <ul className="header__list">
      <li><Link to="/">Stories</Link></li>
      <li><Link to="/">Style Guide</Link></li>
      <li><span className="popup__open">Contact</span></li>
    </ul>
  </nav>
);

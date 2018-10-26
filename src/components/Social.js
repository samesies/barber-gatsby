// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { Link } from 'gatsby';

// ----------------------------------------------
// Social
// ----------------------------------------------
export default () => (
  <ul className="footer__social">
    <li><Link to="https://twitter.com/thomasvaeth" target="_blank"><i className="fa fa-twitter"></i></Link></li>
    <li><Link to="https://www.instagram.com/thomas.vaeth/" target="_blank"><i className="fa fa-instagram"></i></Link></li>
    <li><Link to="https://www.linkedin.com/in/thomasvaeth/" target="_blank"><i className="fa fa-linkedin"></i></Link></li>
    <li><Link to="https://github.com/samesies" target="_blank"><i className="fa fa-github"></i></Link></li>
    <li><Link to="https://codepen.io/thomasvaeth/" target="_blank"><i className="fa fa-codepen"></i></Link></li>
  </ul>
);

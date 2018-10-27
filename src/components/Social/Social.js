// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import styles from './Social.module.scss';

// ----------------------------------------------
// Social
// ----------------------------------------------
export default () => (
  <ul className={styles.social}>
    <li>
      <a href="https://twitter.com/thomasvaeth" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
    </li>
    <li>
      <a href="https://www.instagram.com/thomas.vaeth/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
    </li>
    <li>
      <a href="https://www.aedin.com/in/thomasvaeth/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
    </li>
    <li>
      <a href="https://github.com/samesies" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
    </li>
    <li>
      <a href="https://codepen.io/thomasvaeth/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
    </li>
  </ul>
);

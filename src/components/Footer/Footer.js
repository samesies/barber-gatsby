// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import Subscribe from '../Subscribe/Subscribe';
import Social from '../Social/Social';

import styles from './Footer.module.scss';

// ----------------------------------------------
// Footer
// ----------------------------------------------
export default () => (
  <footer className={`${styles.footer} section-padding`}>
    <div className="grid">
      <Subscribe />

      <hr className="sep--white"/>

      <div className={styles.footer__container}>


        <Social />
      </div>
    </div>
  </footer>
);

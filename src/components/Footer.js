// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import Social from './Social';

// ----------------------------------------------
// Footer
// ----------------------------------------------
export default () => (
  <footer className="footer section-padding">
    <div className="grid">
      <div className="subscribe" id="subscribe">
        <div className="subscribe__container">
          <span className="subscribe__title">Subscribe</span>
          <p className="subscribe__text">Get a weekly email of posts I’ve added to the site.</p>

        </div>
      </div>

      <hr className="sep--white"/>

      <div className="footer__container">


        <Social />
      </div>
    </div>
  </footer>
);

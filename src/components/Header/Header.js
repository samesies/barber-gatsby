// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import { Link } from 'gatsby';

import Contact from '../Contact/Contact';
import Popup from '../Popup/Popup';

import styles from './Header.module.scss';

// ----------------------------------------------
// Header
// ----------------------------------------------
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleContact(event) {
    this.popup.togglePopup(event);
  }

  render() {
    return (
      <div>
        <header className={styles.header}>
          <Link className={styles.header__title} to="/">{this.props.siteTitle}</Link>

          <nav>
            <ul className={styles.header__list}>
              <li><Link to="/">Stories</Link></li>
              <li><Link to="/style-guide">Style Guide</Link></li>
              <li><span className={styles.header__toggle} onClick={e => this.toggleContact(e)}>Contact</span></li>
            </ul>
          </nav>
        </header>

        <Popup ref={popup => this.popup = popup}>
          <Contact />
        </Popup>
      </div>
    );
  }
};

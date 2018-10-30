// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

import Form from '../Form/Form';

import image from '../../images/placeholder-28.jpg';
import styles from './Contact.module.scss';

// ----------------------------------------------
// Contact
// ----------------------------------------------
export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.toggleContact = this.toggleContact.bind(this);
  }

  toggleContact(event) {
    if (this.contactContainer.contains(event.target)) {
      this.props.toggleContact();
    }
  }

  render() {
    return (
      <div className={styles.contact} onClick={e => this.toggleContact(e)}>
        <div className={styles.contact__container} ref={contactContainer => this.contactContainer = contactContainer}>
          <div className={styles.contact__img}>
            <figure className="absolute-bg" style={{ backgroundImage: `url(${image})` }} />
          </div>
          <div className={styles.contact__content}>
            <div className={`${styles.contact__mast} section-padding--half`}>
              <div className="grid">
                <h2>Contact</h2>
              </div>
            </div>

            <div className="section-padding--none">
              <hr className="sep"/>
            </div>

            <div className="section-padding--half">
              <div className="grid-xlarge">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

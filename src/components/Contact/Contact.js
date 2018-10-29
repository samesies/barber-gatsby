// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import Form from '../Form/Form';

import image from '../../images/placeholder-28.jpg';
import styles from './Contact.module.scss';

// ----------------------------------------------
// Contact
// ----------------------------------------------
export default () => (
  <div className={styles.contact}>
    <div className={styles.contact__container}>
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

        <div className={`${styles.contact__form} section-padding--half`}>
          <div className="grid-xlarge">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

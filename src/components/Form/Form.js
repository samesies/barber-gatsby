// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import styles from './Form.module.scss';

// ----------------------------------------------
// Form
// ----------------------------------------------
export default () => (
  <form className={styles.form} action="https://formcarry.com/s/HkIo0nMb7" method="POST">
    <div className={styles.form__subcontainer}>
      <div>
        <label htmlFor="form-first-name">First Name</label>
        <input type="text" name="first-name" id="form-first-name" required/>
      </div>
      <div>
        <label htmlFor="form-last-name">Last Name</label>
        <input type="text" name="last-name" id="form-last-name" required/>
      </div>
    </div>

    <div>
      <label htmlFor="form-email">E-Mail</label>
      <input type="email" name="email" id="form-email" required/>
    </div>

    <div>
      <label htmlFor="form-message">Message</label>
      <textarea name="message" id="form-message" rows="3"></textarea>
    </div>

    <div className={styles.form__submit}>
      <div className={styles.form__btn}>
        <input type="submit" value="Send"/>
      </div>
    </div>

    <p className={styles.form__message} />
  </form>
);

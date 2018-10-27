// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import styles from './Subscribe.module.scss';

// ----------------------------------------------
// Subscribe
// ----------------------------------------------
export default () => (
  <div className={styles.subscribe}>
    <div className={styles.subscribe__container}>
      <span className={styles.subscribe__title}>Subscribe</span>
      <p className={styles.subscribe__text}>Get a weekly email of posts I’ve added to the site.</p>

      <form method="POST" action="https://samesies.us17.list-manage.com/subscribe/post-json?u=66ddf555dab480e6a8606430b&amp;id=89b3ee034f&amp;c=?" id="mc-signup" name="mc-embedded-subscribe-form" noValidate>
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_66ddf555dab480e6a8606430b_89b3ee034f" tabIndex="-1" value="" readOnly/>
        </div>

        <div className={styles.subscribe__input}>
          <input id="mce-EMAIL" type="email" name="EMAIL" placeholder="Email Address"/>
        </div>
        <div className={styles.subscribe__btn}>
          <input id="mc-submit" type="submit" value="Sign Up" name="subscribe"/>
        </div>
      </form>

      <p className={`${styles.subscribe__error} hidden`} />
    </div>
  </div>
);

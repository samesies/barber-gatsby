// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import styles from './Title.module.scss';

// ----------------------------------------------
// Title
// ----------------------------------------------
export default (props) => {
  let content;

  if (props.title && props.date) {
    content = (
      <div>
        <h2 className={styles.title__header} itemProp="name headline">{props.title}</h2>
        <time className={styles.title__date} dateTime="" itemProp="datePublished">{props.date}</time>
      </div>
    );
  } else {
    content = (
      <h2 className={styles.title__header}>{props.title}</h2>
    );
  }

  return (
    <div className={`${styles.title} section-padding--double`}>
      <div className="grid-small">
        {content}
      </div>
    </div>
  );
};

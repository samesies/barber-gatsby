// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import styles from './Author.module.scss';

// ----------------------------------------------
// Author
// ----------------------------------------------
export default props => (
  <div>
    <div className="section-padding--none">
      <div className="grid">
        <hr className="sep"/>
      </div>
    </div>

    <div className="section-padding">
      <div className="grid-small">
          <span className={styles.author}>Posted by <a href={props.url} target="_blank" rel="noopener noreferrer" title={props.author}>{props.author}</a></span>
          <p className={styles.author__bio}>{props.bio}</p>
      </div>
    </div>
  </div>
);

// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import styles from './Share.module.scss';

// ----------------------------------------------
// Share
// ----------------------------------------------
export default props => (
  <ul className={styles.share}>
    <li>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Facebook"
      >
        <i className="fa fa-facebook" />
      </a>
    </li>
    <li>
      <a 
        href={`https://twitter.com/intent/tweet?&text=${props.title}+${props.url}+by+${props.author}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Twitter"
      >
        <i className="fa fa-twitter" />
      </a>
    </li>
    <li>
      <a 
        href={`https://plus.google.com/share?url=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Google+"
      >
        <i className="fa fa-google-plus" />
      </a>
    </li>
    <li>
      <a 
        href={`https://www.linkedin.com/shareArticle?mini=true&source=${props.title}&summary=${props.description ? `description=${props.description}` : ''}&url=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="LinkedIn"
      >
        <i className="fa fa-linkedin" />
      </a>
    </li>
    <li>
      <a 
        href={`https://www.stumbleupon.com/badge/?url=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="StumbleUpon"
      >
        <i className="fa fa-stumbleupon" />
      </a>
    </li>
    <li>
      <a 
        href={`https://www.reddit.com/submit?url=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Reddit"
      >
        <i className="fa fa-reddit-alien" />
      </a>
    </li>
    <li>
      <a 
        href={`https://www.tumblr.com/share/link?url=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Tumblr"
      >
        <i className="fa fa-tumblr" />
      </a>
    </li>
    <li>
      <a 
        href={`https://www.pinterest.com/pin/create/link/?${props.description ? `description=${props.description}` : ''}&media=${props.image}&url=${props.url}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Pinterest"
      >
        <i className="fa fa-pinterest" />
      </a>
    </li>
  </ul>
);

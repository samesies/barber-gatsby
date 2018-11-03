// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { Link } from 'gatsby';

import Subscribe from '../Subscribe/Subscribe';
import Social from '../Social/Social';

import styles from './Footer.module.scss';

// ----------------------------------------------
// Footer
// ----------------------------------------------
export default props => {
  const tagsArr = props.tags.sort((a,b) => b.totalCount > a.totalCount ? 1 : (a.totalCount > b.totalCount ? -1 : 0)).slice(0, 5);
  const tags = tagsArr.map(tag => {
    const kebabCase = tag.fieldValue.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
    return <li key={tag.fieldValue}><Link className={styles.footer__link} to={`/tag/${kebabCase}/`}>{tag.fieldValue}</Link></li>;
  });

  return (
    <footer className={`${styles.footer} section-padding`}>
      <div className="grid">
        <Subscribe />

        <hr className="sep--white"/>

        <div className={styles.footer__container}>
          <ul className={styles.footer__tags}>{tags}</ul>

          <Social />
        </div>
      </div>
    </footer>
  );
}

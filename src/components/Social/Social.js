// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './Social.module.scss';

// ----------------------------------------------
// Social
// ----------------------------------------------
export default () => (
  <ul className={styles.social}>
    <StaticQuery
      query={graphql`
        query SocialMediaQuery {
          site {
            siteMetadata {
              socialMedia {
                name
                url
              }
            }
          }
        }
      `}
      render={data => {
        const social = data.site.siteMetadata.socialMedia;

        return (
          <>
            {social.map(item => (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fa fa-${item.name}`} />
                </a>
              </li>
            ))}
          </>
        );
      }}
    />
  </ul>
);

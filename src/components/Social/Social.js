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
          <ul className={styles.social}>
          {social.map(item => (
            <li>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <i className={`fa fa-${item.name}`} />
              </a>
            </li>
          ))}
          </ul>
        </>
      );
    }}
  />
);

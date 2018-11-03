// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import DefaultLayout from '../Default';
import SEO from '../../components/SEO';
import Title from '../../components/Title/Title';

import styles from './Page.module.scss';

// ----------------------------------------------
// Page Layout
// ----------------------------------------------
export default props => (
  <DefaultLayout>
    <SEO
      title={props.title}
      description={props.description}
      image={props.featuredImage}
      pathname={props.pathname} />
    <section>
      <div>
        <Title title={props.title} />

        {
        props.featuredImage ?
          <div className={styles.page__img}>
            <div>
              <figure className="absolute-bg" style={{ backgroundImage: `url(${props.featuredImage})` }} />
            </div>
          </div>
        :
          ''
        }

        <div className={`${styles.page__content} section-padding`}>
          <div className="grid">
            <div className={styles.page__markdown}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
);

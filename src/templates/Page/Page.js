// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

import DefaultLayout from '../Default';
import SEO from '../../components/SEO';
import Title from '../../components/Title/Title';

import styles from './Page.module.scss';

// ----------------------------------------------
// Page Layout
// ----------------------------------------------
export default class PageLayout extends Component {
  render() {
    return (
      <DefaultLayout>
        <SEO
          title={this.props.title}
          description={this.props.description}
          image={this.props.featuredImage}
          pathname={this.props.pathname} />
        <section>
          <div>
            <Title title={this.props.title} />

            {
            this.props.featuredImage ?
              <div className={styles.page__img}>
                <div>
                  <figure className="absolute-bg" style={{ backgroundImage: `url(${this.props.featuredImage})` }} />
                </div>
              </div>
            :
              ''
            }

            <div className={`${styles.page__content} section-padding`}>
              <div className="grid">
                <div className={styles.page__markdown}>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Transition from '../components/Transition';
import SEO from '../components/SEO';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/app.scss';

// ----------------------------------------------
// Default Layout
// ----------------------------------------------
const DefaultLayout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query HeaderAndFooterQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Transition location={location}>
          <main className="💈">
            {children}
          </main>
          <Footer tags={data.allMarkdownRemark.group} />
        </Transition>
      </>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;

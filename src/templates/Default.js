// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import SEO from '../components/SEO';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/app.scss';

// ----------------------------------------------
// Default Layout
// ----------------------------------------------
const DefaultLayout = ({ children }) => (
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
        <main className="💈">
          {children}
        </main>
        <Footer tags={data.allMarkdownRemark.group} />
      </>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;

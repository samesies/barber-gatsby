// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import posed, { PoseGroup } from 'react-pose';

import SEO from '../components/SEO';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/app.scss';

// ----------------------------------------------
// Transition
// ----------------------------------------------
const Transition = posed.div({
  enter: { 
    opacity: 1,
    delay: 600,
    transition: { duration: 600 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 400 }
  }
});

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
        <PoseGroup>
          <Transition key={location.key}>
            <main className="💈">
              {children}
            </main>
            <Footer tags={data.allMarkdownRemark.group} />
          </Transition>
        </PoseGroup>
      </>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;

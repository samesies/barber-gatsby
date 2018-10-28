import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/app.scss';

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageTransition
          transitionStyles={{
            entering: { opacity: 0 },
            entered: { opacity: 1 },
            exiting: { opacity: 0 }
          }}
          transitionTime={600}
        >
          <main className="💈">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;

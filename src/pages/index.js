import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import DefaultLayout from '../templates/Default';
import Posts from '../components/Posts/Posts';

export default class IndexPage extends Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <DefaultLayout>
        <Posts posts={posts} />
      </DefaultLayout>
    );
  }
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 225)
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

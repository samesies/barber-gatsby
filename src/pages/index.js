import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../templates/Default';

export const IndexPage = () => (
  <DefaultLayout>
    <div class="posts">
      <div class="grid-xlarge">
        <div class="posts__container" itemscope itemtype="http://schema.org/Blog" data-columns>

        </div>
      </div>
    </div>
  </DefaultLayout>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

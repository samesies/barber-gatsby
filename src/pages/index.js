import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import DefaultLayout from '../templates/Default';

export default class IndexPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges').map(({ node }) => (
      <article className="posts__post" itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting" key={node.fields.slug}>
        <Link className="posts__link" to={node.fields.slug} itemProp="url">
          <div>
            <h2 className="posts__text">
              <strong itemProp="name">{node.frontmatter.title}</strong> — <span itemProp="description" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </h2>
          </div>
        </Link>
      </article>
    ));

    return (
      <DefaultLayout>
        <div className="posts">
          <div className="grid-xlarge">
            <div className="posts__container" itemScope itemType="http://schema.org/Blog">
            
              {posts}

            </div>
          </div>
        </div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

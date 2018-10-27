import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import DefaultLayout from '../templates/Default';

export default class IndexPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <DefaultLayout>
        <div className="posts">
          <div className="grid-xlarge">
            <div className="posts__container" itemScope itemType="http://schema.org/Blog" data-columns>
            
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3>
                      <Link to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                )
              })}

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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;

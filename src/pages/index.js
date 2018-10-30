// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../templates/Default';
import Posts from '../components/Posts/Posts';

// ----------------------------------------------
// Index
// ----------------------------------------------
export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsLoaded: 12
    };

    this.onClick = this.onClick.bind(this);
    this.posts = this.props.data.allMarkdownRemark.edges;
  }

  onClick() {
    this.setState(prevState => ({
      postsLoaded: prevState.postsLoaded + 12
    }));
  }

  render() {
    const posts = this.posts.slice(0, this.state.postsLoaded);

    return (
      <DefaultLayout>
        <Posts 
          posts={posts} 
          onClick={this.onClick} 
          loadMore={posts.length < this.posts.length} />
      </DefaultLayout>
    );
  }
}

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
`

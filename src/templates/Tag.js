// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from './Default';
import SEO from '../components/SEO';
import Title from '../components/Title/Title';
import Posts from '../components/Posts/Posts';

// ----------------------------------------------
// Tag Layout
// ----------------------------------------------
export default class TagLayout extends Component {
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
        <SEO
          title={this.props.pageContext.tag} 
          pathname={this.props.pageResources.page.path} />
        <Title title={this.props.pageContext.tag} />

        <Posts 
          posts={posts} 
          onClick={this.onClick} 
          loadMore={posts.length < this.posts.length} />
      </DefaultLayout>
    )
  }
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
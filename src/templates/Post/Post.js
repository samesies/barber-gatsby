// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../Default';
import SEO from '../../components/SEO';
import Title from '../../components/Title/Title';
import Author from '../../components/Author/Author';

import styles from './Post.module.scss';

// ----------------------------------------------
// Post Layout
// ----------------------------------------------
export default class PostLayout extends Component {
  render() {
    const post = this.props.data.markdownRemark;

    console.log(post);

    return (
      <DefaultLayout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={post.frontmatter.image.publicURL}
          pathname={post.fields.slug}
          article />
        <div className={styles.post}>
          <article itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
            <Title title={post.frontmatter.title} date={post.frontmatter.date}/>

            <div className={styles.post__img}>
              <div>
                <figure className="absolute-bg" style={{ backgroundImage: `url(${post.frontmatter.image.publicURL})` }}></figure>
              </div>
            </div>

            <div className={`${styles.post__content} section-padding`}>
              <div className="grid">
                <div className={styles.post__markdown} itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>

            <Author author={post.frontmatter.author.id} bio={post.frontmatter.author.bio} url={post.frontmatter.author.url} />
          </article>
        </div> 
      </DefaultLayout>
    )
  }
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        description
        date(formatString: "DD MMM YYYY")
        image {
          publicURL
        }
        author {
          id
          bio
          url
        }
      }
      fields {
        slug
      }
    }
  }
`

// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import SEO from '../../components/SEO';
import Title from '../../components/Title/Title';
import Share from '../../components/Share/Share';
import Author from '../../components/Author/Author';

import styles from './Post.module.scss';

// ----------------------------------------------
// Post Layout
// ----------------------------------------------
export default class PostLayout extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const disqusShortname = this.props.data.site.siteMetadata.disqusShortname;
    const disqusConfig = {
      identifier: post.fields.slug,
      title: post.frontmatter.title,
    };

    return (
      <div>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={post.frontmatter.image.publicURL}
          pathname={post.fields.slug}
          article />
        <div className={styles.post}>
          <article itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
            <Title title={post.frontmatter.title} date={post.frontmatter.date} />

            <div className={styles.post__img}>
              <div>
                <figure className="absolute-bg" style={{ backgroundImage: `url(${post.frontmatter.image.publicURL})` }}></figure>
              </div>
            </div>

            <div className={`${styles.post__content} section-padding`}>
              <div className="grid">
                <div className={styles.post__markdown} itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />

                <Share 
                  url={`${this.props.data.site.siteMetadata.url}${post.fields.slug}`} 
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  author={post.frontmatter.author.id}
                  image={post.frontmatter.image.publicURL} />
              </div>
            </div>

            <Author 
              author={post.frontmatter.author.id} 
              bio={post.frontmatter.author.bio} 
              url={post.frontmatter.author.url} />

            {
            disqusShortname ? 
              <div className={`${styles.post__comments} section-padding`}>
                <div className="grid-small">
                  <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
              </div>
            :
              ''
            }
          </article>
        </div> 
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        url
        disqusShortname
      }
    }
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

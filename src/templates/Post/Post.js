import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import DefaultLayout from '../Default';
import Title from '../../components/Title/Title';

import styles from './Post.module.scss';

export default class PostLayout extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;

    return (
      <DefaultLayout location={this.props.location}>
        <Helmet
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
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
          </article>
        </div> 
      </DefaultLayout>
    )
  }
};

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        image {
          publicURL
        }
      }
    }
  }
`;

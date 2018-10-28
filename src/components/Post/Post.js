// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './Post.module.scss';

// ----------------------------------------------
// Footer
// ----------------------------------------------
export default ({ node }) => {
  return (
    <article className={styles.post} itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
      <Link className={styles.post__link} to={node.fields.slug} itemProp="url">
        <Img className={styles.post__img} sizes={node.frontmatter.image.childImageSharp.sizes} />
        <div>
          <h2 className={styles.post__text}>
            <strong itemProp="name">{node.frontmatter.title}</strong> — <span itemProp="description" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </h2>
        </div>
      </Link>
    </article>
  );
};

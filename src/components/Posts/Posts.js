// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import Post from '../Post/Post';

import styles from './Posts.module.scss';

// ----------------------------------------------
// Posts
// ----------------------------------------------
export default props => {
  const posts = props.posts.map(({ node }) => <Post node={node} key={node.fields.slug} />);

  return (
    <div className={styles.posts}>
      <div className="grid-xlarge">
        <div className={styles.posts__container} itemScope itemType="http://schema.org/Blog">
        
          {posts}

        </div>
      </div>
    </div>
  );
};

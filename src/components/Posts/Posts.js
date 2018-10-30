// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import Masonry from 'react-masonry-component';

import Post from '../Post/Post';

import styles from './Posts.module.scss';

// ----------------------------------------------
// Posts
// ----------------------------------------------
export default props => {
  const posts = props.posts.map(({ node }) => <Post node={node} key={node.fields.slug} />);
  const loadMore = props.loadMore ?
    <span className={styles.posts__next} onClick={props.onClick}>Load More Articles</span> :
    <span className={styles.posts__disabled}>No More Articles</span>
  ;

  return (
    <div className={styles.posts}>
      <div className="grid-xlarge">
        <Masonry 
          className={styles.posts__container} 
          options={{ transitionDuration: 0 }}
          itemScope 
          itemType="http://schema.org/Blog"
        >
          {posts}
        </Masonry>
        <div className={styles.posts__pagination}>
          {loadMore}
        </div>
      </div>
    </div>
  );
}

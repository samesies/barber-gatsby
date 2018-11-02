const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/Post/Post.js');
  const tagTemplate = path.resolve('./src/templates/Tag.js');

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        // Posts
        posts.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: postTemplate,
            context: {
              slug: node.fields.slug
            }
          });
        });

        // Tags
        let tags = [];

        posts.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }
        });
        tags = [...new Set(tags)];

        tags.forEach(tag => {
          createPage({
            path: `/tag/${tag.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()}/`,
            component: tagTemplate,
            context: {
              tag
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};

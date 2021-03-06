import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../styles/styles.scss'

export default function Index({
                                data
                              }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <main>
      <Helmet title={`Sam Ojling - Development`} />
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h4>{post.frontmatter.date}</h4>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
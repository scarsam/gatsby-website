import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../styles/styles.scss'

export default function Template({
                                   data // this prop will be injected by the GraphQL query we'll write in a bit
                                 }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <main>
      <Helmet title={`Sam Ojling - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
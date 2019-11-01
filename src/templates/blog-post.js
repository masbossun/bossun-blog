import React from "react"
import { Link, graphql } from "gatsby"
import "../utils/styles.scss"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 className="blogPost__title">{post.frontmatter.title}</h1>
        <small className="blogPost__date">{post.frontmatter.date}</small>
        <p
          className="blogPost__bodyText"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <br />
        <blockquote style={{ marginTop: 20 }}>
          <p>
            If you find any misleading information or a typo or some grammar
            issue, feel free to edit this post on issue, feel free to edit this
            post on <a href={post.frontmatter.gitrepo}>github</a> thanks 👏👏👏.
          </p>
        </blockquote>

        <hr
          style={{
            marginBottom: 20,
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                &#x1F850; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} &#x1F852;
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        gitrepo
      }
    }
  }
`

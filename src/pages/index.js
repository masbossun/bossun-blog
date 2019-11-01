import React from "react"
import { Link, graphql } from "gatsby"
import "../utils/styles.scss"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="personal blog"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `Developer`,
            `Linux`,
          ]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} class="base">
              <h2 className="base__postTitle">
                <Link className="base__link" to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small className="base__blogDate">{node.frontmatter.date}</small>
              <p
                className="base__blogOverview"
                dangerouslySetInnerHTML={{ __html: "&#xE08B; " + node.excerpt }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

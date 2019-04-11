import React from 'react'
import { Link as gatsbyLink, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Colors from '../utils/colors'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const GlobalStyle = createGlobalStyle`

  a {
    color: ${Colors.accentColor};
    text-decoration: none;
    box-shadow: none;
    font-weight: bold;
  }

  blockquote {
    color: ${Colors.secondaryAccentColor};
  }

  ::selection {
    color: ${Colors.secondarySoftAccentColor};
    background-color: ${Colors.darkerBackgroundColor};
  }
`

const PostTitle = styled.h2`
  margin-bottom: ${rhythm(1 / 4)};
`

const Link = styled(gatsbyLink)`
  box-shadow: none;
  color: ${Colors.secondaryAccentColor};
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyle />
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
            <div key={node.fields.slug}>
              <PostTitle>
                <Link to={node.fields.slug}>{title}</Link>
              </PostTitle>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
          excerpt(pruneLength: 87)
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Colors from '../utils/colors'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const GlobalStyle = createGlobalStyle`

  a {
    color: ${Colors.accentColor};
    text-decoration: none;
    box-shadow: none;
    font-weight: bold;
  }

  blockquote {
    color: ${Colors.anotherAccentColor};
  }

  .gatsby-resp-image-wrapper{
    max-width: 100% !important;
  }
`

const BlogPostTitle = styled.h1`
  color: ${Colors.accentColor};
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyle />
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
        <blockquote>
          <p>
            If you find any misleading information or a typo or some grammar
            issue, feel free to edit this post on{' '}
            <a href={post.frontmatter.gitrepo}>github</a> thanks 👏👏👏.
          </p>
        </blockquote>

        <hr
          style={{
            marginBottom: rhythm(1),
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
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
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

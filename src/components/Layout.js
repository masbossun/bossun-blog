import React from 'react'
import { Link as gatsbyLink } from 'gatsby'
import styled from 'styled-components'
import Colors from '../utils/colors'

import { rhythm, scale } from '../utils/typography'

const MainHeader = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  color: ${Colors.accentColor};
`

const BlogPostHeader = styled.h3`
  margin-top: 0;
  margin-bottom: ${rhythm(0.5)};
`

const Link = styled(gatsbyLink)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const PageContainer = styled.div`
  background: ${Colors.backgroundColor};
  color: ${Colors.baseTextColor};
  min-height: 100vh;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(0.5)};
`

const Footer = styled.footer`
  margin-top: ${rhythm(3)};
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <MainHeader style={{ ...scale(1.5) }}>
          <Link to={`/`}>{title}</Link>
        </MainHeader>
      )
    } else {
      header = (
        <div>
          <BlogPostHeader>
            <Link to={`/`}>{title}</Link>
          </BlogPostHeader>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </div>
      )
    }
    return (
      <PageContainer>
        <Container>
          {header}
          {children}
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` `}and ☕☕☕
          </Footer>
        </Container>
      </PageContainer>
    )
  }
}

export default Layout

import React from "react"
import { Link } from "gatsby"
import "../utils/styles.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="layout__mainHeader">
          <Link className="layout__mainHeader__text" to={`/`}>
            {title}
          </Link>
        </div>
      )
    } else {
      header = (
        <div className="layout__blogpostHeader">
          <Link className="layout__blogpostHeader__text" to={`/`}>
            ⟵
          </Link>
        </div>
      )
    }
    return (
      <div className="layout__pageContainer">
        <div className="layout__container">
          {header}
          {children}
          <footer className="layout__footer">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` `}and ☕
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout

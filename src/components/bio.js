import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "../utils/styles.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio__container">
      <Image
        className="bio__image"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <p className="bio_info">
        Written by <strong>Ryan Setiagi</strong>,
        <br />
        You should look at me on
        {` `}
        <a href={social.twitter}>Twitter</a>
        {` `}
        or
        {` `}
        <a href={social.github}>Github</a>
      </p>
    </div>
  )
}

export default Bio

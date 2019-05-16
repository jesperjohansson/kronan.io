import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>
        <h1>{site.siteMetadata.title}</h1>
      </header>
      <main>{children}</main>
      <footer>&copy; Kronan.io</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

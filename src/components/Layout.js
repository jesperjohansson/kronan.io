import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import GlobalStyle from '../style'
import Logo from '../images/logo.svg'
import { A11yText } from './common/Text'

const LogoLink = styled(Link)`
  display: inline-block;
`

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
      <GlobalStyle />
      <header>
        <LogoLink to="/">
          <Logo />
          <A11yText>{`Gå till startsidan för ${
            site.siteMetadata.title
          }`}</A11yText>
        </LogoLink>
      </header>
      <main>{children}</main>
      <footer>&copy; Kronan.io</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

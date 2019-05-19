import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../style'
import Logo from '../images/logo.svg'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <header>
        <Logo />
      </header>
      <main>{children}</main>
      <footer>&copy; Kronan.io</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

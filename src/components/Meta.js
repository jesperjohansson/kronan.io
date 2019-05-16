import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Meta({ title, description, keywords, meta }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          lang
        }
      }
    }
  `)

  function getKeywords() {
    if (keywords.length < 1) return []
    return {
      name: 'keywords',
      content: keywords.join(', '),
    }
  }

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: site.siteMetadata.lang }}
      title={title || site.siteMetadata.title}
      titleTemplate={title ? `%s - ${site.siteMetadata.title}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(getKeywords())
        .concat(meta)}
    />
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.arrayOf(PropTypes.object),
}

Meta.defaultProps = {
  title: '',
  description: '',
  keywords: [],
  meta: [],
}

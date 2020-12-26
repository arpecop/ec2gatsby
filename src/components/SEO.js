import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="text/javascript">
        amzn_assoc_ad_type = "link_enhancement_widget"; amzn_assoc_tracking_id =
        "arpecop0c-20"; amzn_assoc_linkid = "4cc6d839718ef9cccfa8651a4deb761d";
        amzn_assoc_placement = ""; amzn_assoc_marketplace = "amazon";
        amzn_assoc_region = "US";
      </script>
      <script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: `en`,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`

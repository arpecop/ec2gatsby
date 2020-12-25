import React from "react"

import { graphql } from "gatsby"
import Seo from "../components/SEO"

export default function Template({ data }) {
  const { markdownRemark } = data // Object destructuring
  const { frontmatter, html } = markdownRemark // Object destructuring og markdownRemark

  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<div id="amzn-assoc-ad-47c5b6c8-a176-4322-8d7c-c713a815c599"></div><script  async  src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=47c5b6c8-a176-4322-8d7c-c713a815c599"></script>',
          }}
        />
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`

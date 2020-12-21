import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/Blog/blog-item"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <>
      <Seo />
      <h1>
        My name is rudiX. I'm a cyberpunk and I like to talk as if I am a living
        thing
      </h1>

      {allMarkdownRemark.edges.map(({ node }) => (
        <BlogItem
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
        />
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 3) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`

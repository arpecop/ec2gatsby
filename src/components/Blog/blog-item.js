import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogItem = styled.article`
  margin: calc(var(--spacing) * 4) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: var(--spacing);

  @media (min-width: 768px) {
    margin: calc(var(--spacing) * 6) 0;
    grid-template-rows: auto auto;
    grid-gap: calc(var(--spacing) * 2);
  }

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 8) 0;
    grid-gap: calc(var(--spacing) * 3);
  }
`

const BlogTitle = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  h2 {
    font-size: var(--h3);
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const BlogContent = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  p {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    p {
      margin-bottom: calc(var(--spacing) * 2);
    }
  }
`

const BlogList = ({ key, title, excerpt, path }) => {
  return (
    <BlogItem key={key}>
      <BlogTitle>
        <Link to={path}>
          <h2>{title}</h2>
        </Link>
      </BlogTitle>
      <BlogContent>
        <p>{excerpt}</p>
      </BlogContent>
    </BlogItem>
  )
}

export default BlogList

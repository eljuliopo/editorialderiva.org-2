import React from "react"
import { graphql } from "gatsby"

export default function Cat(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export const CategoryQuery = graphql`
  query CategoryQuery($categories: [String]!) {
    allContentfulLibro(filter: { categories: { in: $categories } }) {
      nodes {
        contentful_id
        id
        title
        authors
        price
        image {
          gatsbyImageData
        }
      }
    }
  }
`

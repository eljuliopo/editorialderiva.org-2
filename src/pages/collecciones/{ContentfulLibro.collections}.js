import React from "react"
import { graphql } from "gatsby"

export default function Cat(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export const CollectionQuery = graphql`
  query CollectionQuery($collections: [String]!) {
    allContentfulLibro(filter: { collections: { in: $collections } }) {
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

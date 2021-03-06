/** @jsx jsx */
import { jsx, Grid, Themed, Box, Divider } from "theme-ui"
import { graphql } from "gatsby"

import Item from "../../components/item-small"

export default function CatalogPage({ data }) {
  const items = data.allContentfulLibro.nodes
  return (
    <Box sx={{ maxWidth: "blog", mx: "auto" }}>
      <Themed.h1>CATÁLOGO</Themed.h1>
      <Divider />
      <Grid variant="primary" columns={[1, 3]}>
        {items.map(item => (
          <Item key={item.contentful_id} data={item} />
        ))}
      </Grid>
    </Box>
  )
}

export const query = graphql`
  query LibrosQuery {
    allContentfulLibro {
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

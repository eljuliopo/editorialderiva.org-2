/** @jsx jsx */
import { jsx, Grid, Box, Themed, Button } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { parseAuthors } from "../utils"

import "react-toastify/dist/ReactToastify.css"

import { showToast } from "./toast"

export default function ItemPage({ data, addToCart }) {
  return (
    <Grid columns={[1, "1fr 2.4fr"]} variant="primary">
      <Box
        sx={{
          position: [null, "sticky"],
          alignSelf: [null, "start"],
          top: [null, 56],
        }}
      >
        <GatsbyImage
          image={data.image.gatsbyImageData}
          alt={data.title}
          objectFit="contain"
          sx={{ mx: "auto", cursor: "pointer" }}
        />
      </Box>
      <Box>
        <Themed.h2>{data.title}</Themed.h2>
        <Themed.h5
          sx={{
            mt: 1,
          }}
        >
          por {parseAuthors(data.authors)}
        </Themed.h5>
        <Themed.h3>${data.price}</Themed.h3>
        <MDXRenderer>{data.description.childMdx.body}</MDXRenderer>
        <Themed.p>
          ISBN: {data.isbn} <br />
          {data.pages} páginas
          <br />
          {data.height} x {data.width} cm.
          <br />
          {data.year}
        </Themed.p>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            alignItems: ["stretch", "stretch", "center"],
          }}
        >
          <Button
            sx={{ ml: [null, null, "auto"] }}
            onClick={() => {
              showToast(data.title)
              addToCart(data)
            }}
          >
            Agregar al carro
          </Button>
        </div>
      </Box>
    </Grid>
  )
}

/** @jsx jsx */
import { jsx, Themed, Grid, Box, Divider } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { parseAuthors } from "../utils"
import slugify from "slugify"



import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function Featured({ item, reverse }) {
  return (
    <Grid variant="primary" columns={[1, 2]} sx={{ m: "auto", p: 3 }}>

    <Box
      sx={{
        height: "100%",
        gridRow: [null, 1],
        gridColumn: [null, reverse ? 1 : 2],
      }}
    >
    <Link to={"/libros/" + slugify(item.title.toLowerCase())}>
      <GatsbyImage
        image={item.image.gatsbyImageData}
        alt={item.title}
        objectFit="contain"
        sx={{
          maxHeight: 380,
          filter: "drop-shadow(2px 4px 6px black)",
        }}
      />
      </Link>
    </Box>
    <Box
        sx={{
          display: "flex",
          color: "primary",
          flexDirection: "column",
          justifyContent: "space-between",
          gridRow: [null, 1],
          gridColumn: [null, reverse ? 2 : 1],
        }}
      >

        <div sx={{ my: 3 }}>
          <Link to={"/libros/" + slugify(item.title.toLowerCase())}>
          <Themed.h2
            sx={{
              my: 3,
              textAlign: reverse ? "left" : "right"
            }}
          >
            {item.title}
          </Themed.h2>
          </Link>
          <Themed.p
            sx={{
              my: 3,
              textAlign: reverse ? "left" : "right",
            }}
          >
            {parseAuthors(item.authors)}
            <br/>
            {item.year} / {item.pages} págs.
          </Themed.p>
        </div>
        <Themed.p sx={{ my: 0, color: "primary", textAlign: "right" }}>

        </Themed.p>
        <Themed.p
          sx={{
            my: 0,
            px: 3,
            border: theme => `solid 3px ${theme.colors.black}`,
            borderStyle: reverse
              ? "none solid none none"
              : "none none none solid",
            textAlign: reverse ? "right" : "left",
          }}
        >
          {item.collections[0]}
          <br />
          {item.categories[0]}
        </Themed.p>

      </Box>

    </Grid>
  )
}

export default function Carousel() {
  const { allContentfulLibro } = useStaticQuery(query)
  return (
    <div sx={{ position: "relative", bg: "background", p: 4 }}>

      <div id="ultimos" sx={{ height: "100%", py: 3 }}>
        <Themed.h1
        sx={{
          textAlign: "center",
        }}
        >
          Últimos libros
        </Themed.h1>
        <Divider />
        <Slider
          autoplay
          autoplaySpeed={13200}
          dots={true}
          arrows={true}
          infinite={true}
          speed={2000}
          slidesToShow={1}
          slidesToScroll={1}
          sx={{ height: "100%" }}
        >
          <Featured item={allContentfulLibro.nodes[0]} />
          <Featured item={allContentfulLibro.nodes[1]} />
          <Featured item={allContentfulLibro.nodes[2]} reverse />
        </Slider>
      </div>
    </div>
  )
}

const query = graphql`
  query CarouselQuery {
    allContentfulLibro(limit: 3, sort: { order: DESC, fields: createdAt }) {
      nodes {
        contentful_id
        id
        title
        authors
        description {
          childMdx {
            body
          }
        }
        price
        pages
        image {
          gatsbyImageData(width: 480)
        }
        categories
        collections
        year
      }
    }
  }
`

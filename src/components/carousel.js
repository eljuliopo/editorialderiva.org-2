/** @jsx jsx */
import { jsx, Themed, Grid, Box } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { parseAuthors } from "../utils"
import otterGIF from "../images/sea2.gif"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Cover(props) {
  return (
    <div sx={{ m: "auto", textAlign: "center", maxWidth: "blog" }}>
      <StaticImage
        src="../images/logo.svg"
        width={240}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt={"a"}
        sx={{ filter: "invert(1)" }}
      />
      <Themed.p sx={{ color: "background" }}>{props.description}</Themed.p>
    </div>
  )
}

function Featured({ item, reverse }) {
  return (
    <Grid variant="primary" columns={[1, 2]} sx={{ m: "auto", p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gridRow: [null, 1],
          gridColumn: [null, reverse ? 2 : 1],
        }}
      >
        <Themed.p
          sx={{
            my: 0,
            color: "background",
            px: 3,
            border: theme => `solid 1px ${theme.colors.background}`,
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
        <div sx={{ my: 3 }}>
          <Themed.h1
            sx={{
              my: 0,
              color: "background",
              textAlign: reverse ? "left" : "right",
            }}
          >
            {item.title}
          </Themed.h1>
          <Themed.p
            sx={{
              my: 0,
              color: "background",
              textAlign: reverse ? "left" : "right",
            }}
          >
            {parseAuthors(item.authors)}
          </Themed.p>
        </div>
        <Themed.p sx={{ my: 0, color: "background", textAlign: "right" }}>
          {/* {item.year} */}{" "}
        </Themed.p>
      </Box>
      <Box
        sx={{
          height: "100%",
          gridRow: [null, 1],
          gridColumn: [null, reverse ? 1 : 2],
        }}
      >
        <GatsbyImage
          image={item.image.gatsbyImageData}
          alt={item.title}
          objectFit="contain"
          sx={{
            maxHeight: 480,
            filter: "drop-shadow(2px 4px 6px black)",
          }}
        />
      </Box>
    </Grid>
  )
}

export default function Carousel() {
  const { site, allContentfulLibro } = useStaticQuery(query)
  return (
    <div sx={{ position: "relative", bg: "secondary", p: 3 }}>
      <img
        src={otterGIF}
        alt="Olas"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          // filter: "contrast(0.5) invert(1)",
          // mixBlendMode: "multiply",
        }}
      />
      <div sx={{ height: "100%", py: 4 }}>
        <Slider
          autoplay
          autoplaySpeed={3200}
          dots={false}
          arrows={false}
          infinite={true}
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
          sx={{ height: "100%" }}
        >
          <Cover {...site.siteMetadata} />
          <Featured item={allContentfulLibro.nodes[0]} />
          <Featured item={allContentfulLibro.nodes[1]} reverse />
        </Slider>
      </div>
    </div>
  )
}

const query = graphql`
  query CarouselQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulLibro(limit: 2, sort: { order: DESC, fields: createdAt }) {
      nodes {
        contentful_id
        id
        title
        authors
        price
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

/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
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
        sx={{ }}
      />
      <Themed.p sx={{ color: "primary" }}>{props.description}</Themed.p>
    </div>
  )
}

function Angle(props) {
  return (
    <div sx={{ m: "auto", textAlign: "center", maxWidth: "blog" }}>
      <AnchorLink to="/#ultimos">
        <StaticImage
          src="../images/angle-down.png"
          width={30}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={"a"}
          sx={{ mt: "5"}}
        />
      </AnchorLink>
    </div>
  )
}


export default function Indexcover() {
  const { site } = useStaticQuery(query)
  return (
    <div id="index" sx={{ position: "cover", bg: "background", p: 4 }}>
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
          filter: "invert(1) contrast(1.1) grayscale(1)",
          // filter: "contrast(0.5) invert(1)",
          // mixBlendMode: "multiply",
        }}
      />
      <div sx={{ height: "100%", py: 6, position: "relative" }}>
      <Cover {...site.siteMetadata} />
      <Angle />
      </div>
    </div>
  )
}

const query = graphql`
  query IndexcoverQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

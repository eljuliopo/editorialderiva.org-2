/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

export default function SocialIcons() {
  return (
    <div sx={{ mx: "auto", display: "flex" }}>
      <StaticImage
        src="../images/icons/facebook.png"
        width={20}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt={"Facebook"}
        sx={{ mx: 2, my: "auto" }}
      />
      <StaticImage
        src="../images/icons/instagram.png"
        width={20}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt={"Instagram"}
        sx={{ mx: 2, my: "auto" }}
      />
      <StaticImage
        src="../images/icons/youtube.png"
        width={20}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt={"Youtube"}
        sx={{ mx: 2, my: "auto" }}
      />
    </div>
  )
}

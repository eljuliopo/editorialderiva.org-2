/** @jsx jsx */
import { jsx, NavLink, Themed, MenuButton } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Headroom from "react-headroom"
import SocialIcons from "../components/social-icons"

import Seo from "./seo"
import Drawer from "./drawer"
import { Toast } from "./toast"
import { useStore } from "../store/state"

const Container = props => (
  <div
    {...props}
    sx={{
      width: "100%",
      maxWidth: "container",
      mx: "auto",
      px: 3,
    }}
  />
)

const NavLinks = () => (
  <React.Fragment>
    <NavLink as={Link} to="/editorial">
      EDITORIAL
    </NavLink>
    <NavLink as={Link} to="/libros">
      CATÁLOGO
    </NavLink>
    <NavLink as={Link} to="/impresos">
      IMPRESOS
    </NavLink>
    <NavLink as={Link} to="/contacto">
      CONTACTO
    </NavLink>
  </React.Fragment>
)

export default function Layout({ children, seo, pageContext, ...props }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { toggleMenu } = useStore()
  const isHome = props.location.pathname === "/"
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <Seo title={seo?.title || pageContext?.frontmatter?.title || ""} />

      <Headroom>
        <header sx={{ width: "100%", variant: "layout.header" }}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Themed.a as={Link} to="/">
              <StaticImage
                src="../images/logo.svg"
                width={120}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={data.site.siteMetadata.title}
              />
            </Themed.a>
            <NavLinks />
            <div sx={{ display: "flex", alignItems: "center" }}>
              <NavLink as={Link} to="/carro" sx={{ display: "inherit" }}>
                <StaticImage
                  src="../images/cart.svg"
                  width={24}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt={data.site.siteMetadata.title}
                />
              </NavLink>
              <MenuButton
                sx={{ display: ["inherit", "none"], ml: 3 }}
                aria-label="Toggle Menu"
                onClick={toggleMenu}
              />
            </div>
          </Container>
        </header>
      </Headroom>
      <Drawer />
      <Toast />

      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          variant: "layout.main",
          pt: isHome ? 1 : 4,
          pb: 4,
        }}
      >
        <Container
          sx={{
            pt: 2,
          }}
        >
          {children}
        </Container>
      </main>
      <footer
        sx={{
          width: "100%",
          variant: "layout.footer",
          mt: 5,
        }}
      >
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <StaticImage
          src="../images/deriva-icon.png"
          width={50}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={data.site.siteMetadata.title}
          sx={{ mx: "auto"}}
        />
        <Themed.p
          sx={{ textAlign: "center", fontSize: 0, color: "background" }}
        >
          © {new Date().getFullYear()}{" "}
          <Themed.a as={Link} to="/" sx={{ color: "background" }}>
            Editorial Deriva
          </Themed.a>
          <br />
          Calle Los Artesanos Nro. 199
          <br />
          Villa Alegre, Región del Maule
          <br / >
          contacto@editorialderiva.org | +56 9 353 666 87
        </Themed.p>
        <SocialIcons />
        {/* <Divider /> */}
      </Container>
    </footer>
  </div>
  )
}

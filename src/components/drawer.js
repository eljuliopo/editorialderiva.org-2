/** @jsx jsx */
import { jsx, Themed, Container, MenuButton } from "theme-ui"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { useStore } from "../store/state"

export const items = [
  { title: "Editorial", path: "/editorial" },
  { title: "Catálogo", path: "/libros" },
  { title: "Distribución", path: "/distribucion" },
  { title: "Contacto", path: "/contacto" },
]

export default function DrawerMenu() {
  const { isMenuOpen, toggleMenu } = useStore()
  return (
    <div
      sx={{
        position: "fixed",
        height: "100%",
        width: "100%",
        bottom: isMenuOpen ? "0%" : "-100%",
        zIndex: 99,
        opacity: isMenuOpen ? 1 : 0,
        transition: ".56s",
        px: 3,
        bg: "text",
      }}
    >
      <header sx={{ width: "100%", variant: "layout.header", bg: "none" }}>
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
              alt={"a"}
              sx={{
                filter: "invert(1)",
              }}
            />
          </Themed.a>
          <div sx={{ display: "flex", alignItems: "center" }}></div>
          <MenuButton
            sx={{ display: ["inherit", "none"], ml: 3, color: "background" }}
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          />
        </Container>
      </header>
      <div sx={{ height: "100%" }}>
        <Container sx={{ textAlign: "right" }}>
          <Themed.p>
            <Themed.a
              as={Link}
              to={"/"}
              onClick={toggleMenu}
              sx={{
                display: "inline-block",
                color: "background",
                px: 2,
              }}
            >
              Inicio
            </Themed.a>
          </Themed.p>
          {items.map((item, idx) => (
            <Themed.p key={idx}>
              <Themed.a
                sx={{
                  display: "inline-block",
                  color: "background",
                  p: 3,
                }}
                as={Link}
                to={item.path}
                onClick={toggleMenu}
              >
                {item.title}
              </Themed.a>
            </Themed.p>
          ))}
        </Container>
      </div>
    </div>
  )
}

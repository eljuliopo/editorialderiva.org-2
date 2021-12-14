/** @jsx jsx */
import { jsx, Themed, Box } from "theme-ui"
import { Link } from "gatsby"

export default function Menu() {
  return (
    <Box>
      <Themed.h2>
        <Themed.a as={Link} to="/editorial">
          Editorial
        </Themed.a>
      </Themed.h2>
      <Themed.h2>
        <Themed.a as={Link} to="/catalogo">
          Catálogo
        </Themed.a>
      </Themed.h2>
      <Themed.h2>
        <Themed.a as={Link} to="/distribucion">
          Distribución
        </Themed.a>
      </Themed.h2>
      <Themed.h2>
        <Themed.a as={Link} to="/contacto">
          Contacto
        </Themed.a>
      </Themed.h2>
    </Box>
  )
}

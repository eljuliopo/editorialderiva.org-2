/** @jsx jsx */
import { jsx, Themed, Grid, Box, Card, Label, Input, Button } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { navigate } from "gatsby"
import { parseAuthors } from "../utils"
import QuantityPicker from "./quantity-picker"

function sumTotal(cart) {
  return cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
}

function Checkout({ handleChange, handleSubmit }) {
  return (
    <Box
      as="form"
      sx={{
        variant: "forms.primary",
        position: "relative",
      }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Label htmlFor="name">Nombre</Label>
      <Input type="text" name="name" id="name" required />
      <Label htmlFor="address">Dirección</Label>
      <Input type="text" name="address" id="address" required />
      <Label htmlFor="email">Correo electrónico</Label>
      <Input type="email" name="email" id="email" required />
      <Button>Proceder con el pago</Button>
    </Box>
  )
}

function CartItem({ item, removeFromCart, increment, decrement }) {
  return (
    <Card sx={{ position: "relative", display: "flex" }}>
      <div
        sx={{
          width: 100.4,
          height: 122.0,
          bg: "muted",
          display: "flex",
          p: 2,
        }}
      >
        <GatsbyImage
          image={item.image.gatsbyImageData}
          alt={item.title}
          objectFit="contain"
          sx={{ mx: "auto", cursor: "pointer" }}
          onClick={() => navigate("/" + item.fields.slug)}
        />
      </div>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Themed.h5 sx={{ variant: "text.truncate" }}>{item.title}</Themed.h5>
          <Themed.p sx={{ variant: "text.truncate" }}>
            {parseAuthors(item.authors)}
          </Themed.p>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <QuantityPicker
            decrement={() => decrement(item)}
            quantity={item.quantity}
            increment={() => increment(item)}
          />
          <Themed.p
            sx={{
              variant: "text.truncate",
            }}
          >
            ${item.price * item.quantity}
          </Themed.p>
        </div>
      </Box>
      <button
        onClick={() => removeFromCart(item)}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          lineHeight: 1,
          cursor: "pointer",
          // borderBottomLeftRadius: 8,
          bg: "text",
          color: "background",
          // px: 2,
          border: "none",
        }}
      >
        <small>X</small>
      </button>
    </Card>
  )
}

export default function Cart({
  items,
  removeFromCart,
  increment,
  decrement,
  handleChange,
  handleSubmit,
}) {
  const total = sumTotal(items)
  return (
    <React.Fragment>
      <Themed.h2>Carrito</Themed.h2>
      {items.length ? (
        <Grid columns={[1, 2]} variant="primary">
          <Box>
            <Themed.h3>Mis productos</Themed.h3>
            {/* <Grid> */}
            {items.map(item => (
              <CartItem
                key={item.contentful_id}
                item={item}
                removeFromCart={removeFromCart}
                increment={increment}
                decrement={decrement}
              />
            ))}
            {/* </Grid> */}
          </Box>
          <Box>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Themed.h3>Total</Themed.h3>
              <Themed.h3>${total}</Themed.h3>
            </div>
            <Themed.h3>Información de envío</Themed.h3>
            <Checkout {...{ handleChange, handleSubmit }} />
          </Box>
        </Grid>
      ) : (
        <Themed.p>Todavía no agregas nada a tu carrito.</Themed.p>
      )}
    </React.Fragment>
  )
}

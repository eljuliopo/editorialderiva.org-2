import React, { useState } from "react"
import { useCart } from "../store"
import Cart from "../components/cart"

export default function CartPage() {
  const { cart, removeFromCart, increment, decrement } = useCart()

  const [state, setState] = useState()

  const handleChange = async event => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value,
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      let response = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, ...state }),
      })
      let { redirect } = await response.json()
      if (redirect) {
        window.location.assign(redirect)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Cart
      items={cart}
      removeFromCart={removeFromCart}
      increment={increment}
      decrement={decrement}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

import React, { useState } from "react"
import { graphql } from "gatsby"
import { useCart } from "../../store"

import Item from "../../components/item-template"

export default function Libro(props) {
  const [quantity, updateQuantity] = useState(1)
  const increment = () => updateQuantity(quantity + 1)
  const decrement = () => (quantity === 1 ? null : updateQuantity(quantity - 1))
  const { addToCart, cart } = useCart()
  console.log(cart)
  return (
    <Item
      data={props.data.contentfulLibro}
      quantity={quantity}
      increment={() => increment()}
      decrement={() => decrement()}
      addToCart={() => addToCart({ ...props.data.contentfulLibro, quantity })}
    />
  )
}

export const itemQuery = graphql`
  query itemQuery($id: String) {
    contentfulLibro(id: { eq: $id }) {
      contentful_id
      title
      description {
        childMdx {
          body
        }
      }
      authors
      price
      categories
      collections
      image {
        gatsbyImageData
      }
      isbn
      pages
      height
      width
      year
    }
  }
`

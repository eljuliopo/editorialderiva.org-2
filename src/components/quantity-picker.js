/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"

export default function QtyPicker({
  decrement,
  quantity,
  increment,
  ...props
}) {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "baseline",
      }}
      {...props}
    >
      {/* <Themed.p>Cantidad </Themed.p> */}
      <Button variant="picker" sx={{ p: 0, m: 0, mr: 2 }} onClick={decrement}>
        {"-"}
      </Button>
      <Themed.p sx={{ m: 0, textAlign: "center", width: 32 }}>
        {quantity}
      </Themed.p>
      <Button variant="picker" sx={{ p: 0, m: 0, ml: 2 }} onClick={increment}>
        {"+"}
      </Button>
    </div>
  )
}

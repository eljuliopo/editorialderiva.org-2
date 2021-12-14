/** @jsx jsx */
import { jsx, Box, Themed, useThemeUI } from "theme-ui"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export function Toast() {
  const { theme } = useThemeUI()
  return (
    <ToastContainer
      position="top-left"
      autoClose={2000}
      closeButton={false}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      progressStyle={{ background: theme.colors.primary }}
    />
  )
}

export const showToast = title =>
  toast(
    <Box sx={{ bg: "background" }}>
      <Themed.p sx={{ color: "text", p: 4, m: 0 }}>
        <strong>{title}</strong> ha sido agregado al carro.
      </Themed.p>
    </Box>
  )

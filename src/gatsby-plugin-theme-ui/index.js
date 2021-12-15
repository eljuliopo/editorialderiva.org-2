import { base as light, dark } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/lato/400.css"
import "@fontsource/lato/900.css"

const theme = merge(light, {
  config: {
    initialColorModeName: "default",
    useColorSchemeMediaQuery: false,
  },
  colors: {
    primary: "#000000",
    secondary: "#84a59d",
    modes: {
      dark: {
        ...dark.colors,
      },
    },
  },
  sizes: {
    container: 1280,
    blog: 640,
  },
  layout: {
    header: {
      py: 2,
      // position: "sticky",
      top: 0,
      bg: "background",
      zIndex: 100,
      // boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    footer: {
      p: 3,
      bg: "text",
      color: "background",
    },
  },
  fonts: {
    body: "Lato",
    heading: "Lato",
  },
  fontSizes: [12, 13, 14, 16, 18, 22, 24, 28],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  grids: {
    primary: {
      gap: 4,
    },
    // "cart-item": {
    //   bg: "red",
    //   gap: 0,
    // },
  },
  text: {
    truncate: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      my: 0,
    },
  },
  buttons: {
    primary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      borderRadius: 0,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "background",
        color: "primary",
      },
    },
    picker: {
      background: "none",
      color: "text",
      borderRadius: 360,
      cursor: "pointer",
      "&:hover": {
        bg: "#eee",
        color: "background",
      },
    },
  },
  forms: {
    primary: {
      // bg: "red",
      // p: 3,
      // maxWidth: ["100%", 640],
      // mx: "auto",
    },
    label: {
      fontSize: 2,
      fontWeight: "bold",
    },
    input: {
      fontFamily: "monospace",
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      fontFamily: "monospace",
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  links: {
    nav: {
      display: ["none", "inherit"],

      // my: 4,
      // mx: 3,
      // fontWeight: "body",
    },
  },
  cards: {
    primary: {
      padding: 0,
      borderRadius: 0,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      maxWidth: 480,
      mx: "auto",
      mb: 3,
      "&:hover": {
        boxShadow: "0 0 16px rgba(0, 0, 0, 0.250)",
      },
    },
  },
  styles: {
    root: {
      ".Toastify__toast-container": { p: 0 },
      ".Toastify__toast-body": { p: 0 },
      ".Toastify__toast--default": { p: 0 },
      ".slick-slider": { height: "100%" },
      ".slick-prev:before": { color: "primary" },
      ".slick-next:before": { color: "primary" },
      ".slick-list": { height: "100%" },
      ".slick-track": { height: "100%", display: "flex" },
      ".slick-slide": {
        height: "100%",
        m: "auto",
        ">div": { height: "100%", display: "flex" },
      },
      body: {
        margin: "0px",
      },
      overflowY: "scroll",
      scrollbarWidth: "thin" /* "auto" or "thin" */,
      scrollbarColor: theme => `${theme.colors.primary} #ffffff00`,
      "*::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "*::-webkit-scrollbar-track": {
        bg: "#00000000",
      },
      "*::-webkit-scrollbar-thumb": {
        bg: "primary",
      },
      "*:focus": {
        outline: "none",
      },
      "*::selection": {
        backgroundColor: "secondary",
        color: "text",
      },
      "*": {
        scrollbarWidth: "thin" /* "auto" or "thin" */,
        scrollbarColor: theme =>
          `${theme.colors.primary} #ffffff00` /* scroll thumb and track */,
      },
    },
    a: {
      color: "primary",
      textDecoration: "none",
      fontWeight: "bold",
      "&:hover": {
        color: "secondary",
      },
      cursor: "pointer",
    },
    hr: {
      borderColor: "text",
      borderBottom: "1px solid",
      mb: 3,
    },
    img: {
      width: "100%",
    },
  },
})

// console.log(theme)

export default theme

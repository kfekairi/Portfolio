import { createMuiTheme } from "@material-ui/core/styles"
import GothamMedium from "./assets/fonts/GothamMedium.ttf"

const gotham = {
  fontFamily: "Gotham",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
      local('Gotham'),
      local('Gomtham-Meduim'),
      url(${GothamMedium}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
  type: "light",
  palette: {
    primary: { main: "#232323" },
    text: {
      primary: "white",
      secondary: "#F17f1f",
    },
  },
  typography: {
    fontFamily: "gotham, Arial",
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [gotham],
        },
      },
    },
  },
})
const darkTheme = createMuiTheme({
  palette: {
    ...defaultTheme.palette,
    type: "dark",
    primary: { main: "#fff" },
    secondary: { main: "#F17f1f" },
    background: { default: "#232323", paper: "#444444" },
    text: {
      primary: "#fff",
      secondary: "#F17f1f",
    },
  },
  typography: {
    fontFamily: "gotham, Arial",
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [gotham],
    //     },
    //   },
    // },
  },
})

export { theme, darkTheme }

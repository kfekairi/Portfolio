import {
  CircularProgress,
  Container,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core"
import React, { useEffect } from "react"
import { useState } from "react"
import Home from "../components/sections/home"
import "../styles/index.scss"
import { theme, darkTheme } from "../theme"

export default function Index() {
  const [currentTheme, toggleTheme] = useState(theme)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const handleToggleTheme = () =>
    toggleTheme(prevState => (prevState === theme ? darkTheme : theme))

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {loading ? (
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Home />
        )}
      </ThemeProvider>
    </>
  )
}

// import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Home from "../components/sections/home"

import { ThemeProvider } from "@material-ui/core/styles"

import { theme, darkTheme } from "../theme"
import { CssBaseline } from "@material-ui/core"
import "../styles/index.scss"

export default function Index() {
  const [currentTheme, toggleTheme] = useState(darkTheme)
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
        {!loading && (
          <ReactFullpage
            //fullpage options
            navigation
            loopBottom={true}
            anchors={["Home", "Portfolio", "Skills", "Contact"]}
            scrollingSpeed={1000} /* Options here */
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div
                    className="section"
                    style={{
                      backgroundColor: currentTheme.palette.background.default,
                      zIndex: -100,
                    }}
                  >
                    <Home
                      toggleTheme={handleToggleTheme}
                      isDark={currentTheme.type}
                    />
                  </div>
                  <div className="section">
                    <p>Section 2</p>
                  </div>
                  <div className="section">
                    <p>Section 3</p>
                  </div>
                  <div className="section">
                    <p>Section 4</p>
                  </div>
                </ReactFullpage.Wrapper>
              )
            }}
          />
        )}
      </ThemeProvider>
    </>
  )
}

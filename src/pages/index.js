// import { Link } from "gatsby"
import React from "react"
// import "../styles/index.scss"
import ReactFullpage from "@fullpage/react-fullpage"
import Home from "../components/sections/home"

export default function Index() {
  return (
    <>
      <ReactFullpage
        //fullpage options
        navigation
        anchors={["Home", "Portfolio", "Skills", "Contact"]}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
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
    </>
  )
}

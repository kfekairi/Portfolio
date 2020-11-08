import React from "react"
import { fadeInRight } from "react-animations"
import Radium, { StyleRoot } from "radium"
import NavItem from "./navItem"

const styles = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
}

export default function NavBar() {
  return (
    <StyleRoot>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 385,
          height: 35,
          backgroundColor: "#00000040",
          borderBottomLeftRadius: 80,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: 8,

          ...styles.fadeInRight,
        }}
      >
        <nav>
          <ul
            style={{
              display: "flex",
              margin: 0,
              listStyleType: "none",
              // backgroundColor: "red",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavItem title="Home" linkTo="#Home" />
            <NavItem title="Potfolio" linkTo="#Portfolio" />
            <NavItem title="Skills" linkTo="#Skills" />
            <NavItem title="Contact" linkTo="#Contact" />
          </ul>
        </nav>
      </div>
    </StyleRoot>
  )
}
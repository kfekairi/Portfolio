import React from "react"
import { fadeInRight } from "react-animations"
import Radium, { StyleRoot } from "radium"
import NavItem from "./navItem"
import { IconButton, useMediaQuery, useTheme } from "@material-ui/core"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import Brightness7Icon from "@material-ui/icons/Brightness7"

const styles = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },
}

export default function NavBar({ onNavClicked }) {
  return (
    <StyleRoot>
      <nav
        style={{
          position: "fixed",
          right: 0,
          width: 385,
          height: 50,
          backgroundColor: "#00000040",
          borderBottomLeftRadius: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...styles.fadeInRight,
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "center",
          }}
        >
          <NavItem title="Home" onNavClicked={() => onNavClicked(0)} />
          <NavItem title="Skills" onNavClicked={() => onNavClicked(1)} />
          <NavItem title="Portfolio" onNavClicked={() => onNavClicked(2.25)} />
          <NavItem title="Contact" onNavClicked={() => onNavClicked(3)} />
        </ul>
      </nav>
    </StyleRoot>
  )
}

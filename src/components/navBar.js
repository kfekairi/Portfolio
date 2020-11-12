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

export default function NavBar({ toggleTheme, isDark, handleDrawar }) {
  return (
    <StyleRoot>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: 385,
          height: 50,
          backgroundColor: "#00000040",
          borderBottomLeftRadius: 80,
          // justifyContent: "center",
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
            <IconButton
              onClick={toggleTheme}
              style={{ position: "absolute", right: 0, alignSelf: "center" }}
            >
              {isDark === "light" ? (
                <NightsStayIcon />
              ) : (
                <Brightness7Icon color="primary" />
              )}
            </IconButton>
          </ul>
        </nav>
      </div>
    </StyleRoot>
  )
}

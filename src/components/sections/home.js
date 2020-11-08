import React from "react"
import BackgroundImg from "../background-img"
import NavBar from "../navBar"
// import HomeStyle from "./home.module.scss"
import { fadeInLeft, fadeInLeftBig } from "react-animations"

import background2 from "../../assets/image/background2.png"
import Radium, { StyleRoot } from "radium"
import { makeStyles } from "@material-ui/styles"
import { IconButton } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
// import { theme } from "../../theme"

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  fadeInLeftBig: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeftBig, "fadeInLeftBig"),
  },
}

export default function Home({ toggleTheme, isDark }) {
  const classes = useStyles()
  return (
    <div>
      <NavBar toggleTheme={toggleTheme} isDark={isDark} />
      <BackgroundImg />
      <StyleRoot>
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            ...styles.fadeInLeftBig,
          }}
        >
          <IconButton>
            {isDark === "light" ? (
              <TwitterIcon style={{ color: "#4267B2" }} />
            ) : (
              <TwitterIcon color="primary" />
            )}
          </IconButton>
          <br />
          <IconButton>
            {isDark === "light" ? (
              <FacebookIcon style={{ color: "#1DA1F2" }} />
            ) : (
              <FacebookIcon color="primary" />
            )}
          </IconButton>
        </div>
        <div style={{ paddingLeft: 30, ...styles.fadeInLeft }}>
          <h1>Hello,</h1>
          <h3>My name is Khaled.</h3>
          <h3>
            I'm a <span className={classes.title}>Software Developer</span>
          </h3>
        </div>
        <img
          src={background2}
          alt="none"
          style={{
            width: 400,
            position: "absolute",
            bottom: 0,
            left: 0,
            ...styles.fadeInLeftBig,
          }}
        />
      </StyleRoot>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.text.secondary,
  },
}))

import React from "react"
import BackgroundImg from "../background-img"
import NavBar from "../navBar"
// import HomeStyle from "./home.module.scss"
import { fadeInLeft, fadeInLeftBig } from "react-animations"

import background2 from "../../assets/image/background2.png"
import Radium, { StyleRoot } from "radium"
import { makeStyles } from "@material-ui/styles"
import { IconButton } from "@material-ui/core"
// import { theme } from "../../theme"
import Fb from "../../assets/image/fb.svg"
import Twitter from "../../assets/image/twitter.svg"
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
            top: 20,
            left: 12,
            ...styles.fadeInLeftBig,
          }}
        >
          <IconButton>
            {isDark === "light" ? (
              <Twitter width={45} fill="#4267B2" />
            ) : (
              <Twitter width={45} fill="#fff" />
            )}
          </IconButton>
          <br />
          <IconButton>
            {isDark === "light" ? (
              <Fb width={45} fill="#1981E8" />
            ) : (
              <Fb width={45} fill="#fff" />
            )}
          </IconButton>
        </div>
        <div style={{ paddingLeft: 30, ...styles.fadeInLeft }}>
          <p>
            <span className={classes.title}>Hello,</span> <br />
            <span className={classes.subTitle}>My name is Khaled </span> <br />
            <span className={classes.subTitle}>
              I'm a <span className={classes.job}>Software Developer</span>
            </span>
          </p>
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
    fontSize: 48,
    fontWeight: 900,
  },
  subTitle: {
    fontSize: 24,
  },
  job: {
    color: theme.palette.text.secondary,
  },
}))

import React from "react"
import { makeStyles, SvgIcon } from "@material-ui/core"
import { useRef } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Radium, { StyleRoot } from "radium"
import { fadeInLeft, fadeInLeftBig } from "react-animations"

import NavBar from "../navBar"
import BackgroundImg from "../background-img"
import { red } from "@material-ui/core/colors"

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

function Home() {
  const ref = useRef()
  const classes = useStyles()
  return (
    <div>
      <Parallax ref={ref} pages={2}>
        <ParallaxLayer speed={-1} factor={3}>
          <SvgIcon
            viewBox="0 0 75 75"
            style={{ width: 75, height: 75, position: "absolute", left: 15 }}
          >
            <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
            <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
          </SvgIcon>
          <SvgIcon viewBox="0 0 30 30" style={{ width: 30, height: 30 }}>
            <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
          </SvgIcon>
          <SvgIcon viewBox="0 0 75 75" style={{ width: 75, height: 75 }}>
            <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
            <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
          </SvgIcon>
          <SvgIcon viewBox="0 0 30 30" style={{ width: 30, height: 30 }}>
            <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
          </SvgIcon>
          <SvgIcon viewBox="0 0 75 75" style={{ width: 75, height: 75 }}>
            <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"></path>
            <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"></path>
          </SvgIcon>
          <SvgIcon viewBox="0 0 30 30" style={{ width: 30, height: 30 }}>
            <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"></path>
          </SvgIcon>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1}>
          <BackgroundImg />
          <NavBar />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.5}>
          <StyleRoot>
            <div style={{ paddingLeft: 30, ...styles.fadeInLeft }}>
              <p>
                <span className={classes.title}>Hello,</span> <br />
                <span className={classes.subTitle}>
                  My name is Khaled{" "}
                </span>{" "}
                <br />
                <span className={classes.subTitle}>
                  I'm a <span className={classes.job}>Software Developer</span>
                </span>
              </p>
            </div>
          </StyleRoot>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "red" }}
          ></div>
        </ParallaxLayer>
      </Parallax>
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

export default Home

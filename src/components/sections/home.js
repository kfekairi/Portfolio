import React, { useState } from "react"
import BackgroundImg from "../background-img"
import NavBar from "../navBar"
// import HomeStyle from "./home.module.scss"
import { fadeInLeft, fadeIn } from "react-animations"

import background2 from "../../assets/background2.png"
import Radium, { StyleRoot } from "radium"
import IconButton from "../iconButton"

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <BackgroundImg />
      <IconButton />
      <StyleRoot>
        <div style={{ paddingLeft: 30, ...styles.fadeInLeft }}>
          <h1>Hello,</h1>
          <h3>My name is Khaled.</h3>
          <h3>
            I'm a <span style={{ color: "#f0a500" }}>Software Developer</span>
          </h3>
        </div>
      </StyleRoot>

      <img
        src={background2}
        style={{
          width: 400,
          position: "absolute",
          bottom: 0,
          left: 0,
          ...styles.fadeIn,
        }}
      />
    </div>
  )
}

import React from "react"
import { IconButton, makeStyles, SvgIcon } from "@material-ui/core"
import { useRef } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Radium, { StyleRoot } from "radium"
import { fadeInLeft, fadeInLeftBig } from "react-animations"
import Fb from "../../assets/image/fb.svg"
import Twitter from "../../assets/image/twitter.svg"

import NavBar from "../navBar"
import BackgroundImg from "../background-img"
import { useHistory } from "react-router"

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
      {/*CONTENTFUL_SPACE_ID = shmn5zzzbzqh CONTENTFUL_ACCESS_TOKEN =
      XbNUPKaceVVgMHEuDlOaNQvmFbv2w4yFmfp23FmCLAY*/}
      <Parallax ref={ref} pages={4}>
        <ParallaxLayer speed={0.1}>
          <BackgroundImg />
          <NavBar />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.5}>
          <StyleRoot>
            <div
              style={{
                position: "absolute",
                top: -300,
                left: 30,
                ...styles.fadeInLeftBig,
              }}
            >
              <IconButton onClick={() => {}}>
                <Twitter width={55} fill="#c8c6a7" />
              </IconButton>
              <br />
              <IconButton>
                <Fb width={55} fill="#c8c6a7" />
              </IconButton>
            </div>
            <div style={{ paddingLeft: 30, ...styles.fadeInLeft }}>
              <p>
                <span className={classes.title}>Hello,</span> <br />
                <span className={classes.subTitle}>My name is Khaled</span>
                <br />
                <span className={classes.subTitle}>
                  I'm an{" "}
                  <span className={classes.job}>
                    Embedded Software Developer
                  </span>
                </span>
              </p>
            </div>
          </StyleRoot>
        </ParallaxLayer>
        <ParallaxLayer offset={1.099} speed={-0.1}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: "linear-gradient(to right, #6A5ACD, #01BEFE)",
              clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ParallaxLayer offset={0} speed={0}>
              <div style={{}}>
                <p
                  style={{
                    position: "absolute",
                    color: "white",
                    margin: 28,
                    left: 10,
                    top: 0,
                    fontSize: 42,
                    fontWeight: 900,
                  }}
                >
                  Brief
                </p>
              </div>
            </ParallaxLayer>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={1.5}>
          <div
            style={{
              width: "100%",
              height: "130%",
              backgroundImage: "linear-gradient(to right, #2D3748, #2D3748)",
              clipPath: "polygon(0 10%, 100% 0%, 100% 90%, 0 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ParallaxLayer offset={0} speed={0}>
              <div style={{}}>
                <p
                  style={{
                    position: "absolute",
                    color: "white",
                    margin: 28,
                    left: 10,
                    top: 50,
                    fontSize: 42,
                    fontWeight: 900,
                  }}
                >
                  Work
                </p>
              </div>
            </ParallaxLayer>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "gotham",
    fontSize: 52,
    fontWeight: 900,
  },
  subTitle: {
    fontFamily: "gotham",
    fontSize: 32,
  },
  job: {
    fontFamily: "gotham",
    color: "#48BB78",
  },
}))

export default Home

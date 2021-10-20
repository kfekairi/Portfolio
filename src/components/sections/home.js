import React, { useState } from "react"
import {
  Drawer,
  Fab,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { useRef } from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Radium, { StyleRoot } from "radium"
import { fadeInLeft, fadeInLeftBig } from "react-animations"
import Fb from "../../assets/image/fb.svg"
import Twitter from "../../assets/image/twitter.svg"
import { ArrowUpward } from "@material-ui/icons"
import NavBar from "../navBar"
import BackgroundImg from "../background-img"
import Hamburger from "hamburger-react"
import NavItem from "../navItem"
import { Skills } from "./skills/skills"

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
  const [display, setDisplay] = useState(false)
  const [drawarState, setDrawerState] = useState(false)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const handleDrawar = toggled => {
    toggled ? setDrawerState(true) : setDrawerState(false)
  }
  return (
    <div
      onScroll={e => {
        if (e.target.scrollTop > 350) {
          setDisplay(true)
        } else {
          setDisplay(false)
        }
      }}
    >
      <Parallax ref={ref} pages={3.5}>
        <ParallaxLayer speed={0.1}>
          <BackgroundImg />
          {matches && (
            <NavBar
              onNavClicked={index => {
                ref.current.scrollTo(index)
              }}
            />
          )}
          {!matches && (
            <StyleRoot>
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  margin: 12,
                  zIndex: 999,
                  ...styles.fadeInLeft,
                }}
              >
                <Hamburger
                  rounded
                  toggled={drawarState}
                  toggle={setDrawerState}
                  onToggle={toggled => {
                    handleDrawar(toggled)
                  }}
                />
                <Drawer
                  open={drawarState}
                  onClose={() => setDrawerState(false)}
                  onClick={() => setDrawerState(false)}
                  PaperProps={{
                    style: {
                      width: "50%",
                      opacity: 0.85,
                      backgroundColor: "#141821",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      padding: 0,
                    },
                  }}
                  ModalProps={{
                    style: {},
                  }}
                >
                  <ul>
                    <NavItem
                      title="Home"
                      onNavClicked={_ => {
                        ref.current.scrollTo(0)
                      }}
                      style={{ fontSize: 25, padding: 15 }}
                    />
                    <NavItem
                      title="Skills"
                      onNavClicked={_ => {
                        ref.current.scrollTo(1)
                      }}
                      style={{ fontSize: 25, padding: 15 }}
                    />
                    <NavItem
                      title="Portfolio"
                      onNavClicked={_ => {
                        ref.current.scrollTo(2)
                      }}
                      style={{ fontSize: 25, padding: 15 }}
                    />
                    <NavItem
                      title="Contact"
                      onNavClicked={_ => {
                        ref.current.scrollTo(3)
                      }}
                      style={{ fontSize: 25, padding: 15 }}
                    />
                  </ul>
                </Drawer>
              </div>
            </StyleRoot>
          )}
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.5}>
          <StyleRoot>
            <div
              style={{
                position: "absolute",
                top: "-40%",
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
                  I'm
                  <span className={classes.job}> Full-Stack Web Developer</span>
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
              {/* <div style={{}} id="brief">
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
              </div> */}
              <Skills />
            </ParallaxLayer>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={1}>
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
      <Fab
        onClick={() => ref.current.scrollTo(0)}
        color="primary"
        style={{
          position: "absolute",
          right: 16,
          transform: `translate(${0}%, 90vh`,
          display: display ? "block" : "none",
        }}
      >
        <ArrowUpward />
      </Fab>
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

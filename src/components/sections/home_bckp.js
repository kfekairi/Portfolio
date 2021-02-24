import React, { useState } from "react"
import BackgroundImg from "../background-img"
import NavBar from "../navBar"
import HomeStyle from "./home.module.scss"
import { fadeInLeft, fadeInLeftBig } from "react-animations"
import NavItem from "../navItem"

import background2 from "../../assets/image/background2.png"
import Radium, { StyleRoot } from "radium"
import { makeStyles } from "@material-ui/styles"
import { Sling as Hamburger } from "hamburger-react"

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
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
  const [drawarState, setDrawerState] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const handleDrawar = toggled => {
    toggled ? setDrawerState(true) : setDrawerState(false)
  }

  return (
    <div>
      {!matches ? (
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
                  backgroundColor: "#BE6526",
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
                  linkTo="#Home"
                  style={{ fontSize: 25, padding: 15 }}
                />
                <NavItem
                  title="Potfolio"
                  linkTo="#Portfolio"
                  style={{ fontSize: 25, padding: 15 }}
                />
                <NavItem
                  title="Skills"
                  linkTo="#Skills"
                  style={{ fontSize: 25, padding: 15 }}
                />
                <NavItem
                  title="Contact"
                  linkTo="#Contact"
                  style={{ fontSize: 25, padding: 15 }}
                />
              </ul>
            </Drawer>
          </div>
        </StyleRoot>
      ) : (
        <NavBar toggleTheme={toggleTheme} isDark={isDark} />
      )}

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
  "MuiDrawer-modal": {
    backgroundColor: "red",
  },
}))

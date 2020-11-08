import { Link } from "gatsby"
import React from "react"
import NavItemStyle from "./navItem.module.scss"

export default function NavItem({ linkTo, title }) {
  return (
    <li className={NavItemStyle.myNav} activeClassName={NavItemStyle.active}>
      <a href={linkTo} style={{ textDecoration: "none" }}>
        {title}
      </a>
    </li>
  )
}

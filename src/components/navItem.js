import React from "react"
import NavItemStyle from "./navItem.module.scss"

export default function NavItem({ linkTo, title, style }) {
  return (
    <li className={NavItemStyle.myNav}>
      <a
        href={linkTo}
        style={{ textDecoration: "none", color: "white", ...style }}
      >
        {title}
      </a>
    </li>
  )
}

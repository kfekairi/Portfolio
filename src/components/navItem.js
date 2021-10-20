import React, { useRef } from "react"
import NavItemStyle from "./navItem.module.scss"

export default function NavItem({ title, style, onNavClicked }) {
  return (
    <li className={NavItemStyle.myNav}>
      <a
        // href={linkTo}
        onClick={onNavClicked}
        style={{ textDecoration: "none", color: "white", ...style }}
      >
        {title}
      </a>
    </li>
  )
}

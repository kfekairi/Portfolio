import React from "react"
import { fadeInDown } from "react-animations"
import Radium, { StyleRoot } from "radium"

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
}

export default function BackgroundImg() {
  return (
    <StyleRoot>
      <view
        style={{
          position: "absolute",
          left: 0,
          top: -100,
          width: "100%",
          height: "100%",
          zIndex: -1,
          ...styles.fadeInDown,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1796.726 928">
          <g id="Layer_2" data-name="Layer 2" transform="translate(-123.274)">
            <path
              id="Path_1"
              data-name="Path 1"
              d="M1812,928q54.351,0,108-2.876V0H123.274C478.149,557.869,1101.847,928,1812,928Z"
              fill="#48BB78"
            />
          </g>
        </svg>
      </view>
    </StyleRoot>
  )
}

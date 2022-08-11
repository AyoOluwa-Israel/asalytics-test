import React from 'react'
import {ButtonType} from "../../types/index"



const Button = ({text, styles}:ButtonType) => {
  return (
    <button className={`rounded-[8px] text-white transition ease-in-out duration-550 ${styles}`}>
      {text}
    </button>
  )
}

export default Button
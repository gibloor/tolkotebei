import React, { useState } from "react";
import './style.css'

function MenuDrop(props) {
  const { data } = props

  return (
    <ul className="menu-list-drop">
      {
        data.map((item, index) => (
          <li key={index}>
            {item.title}
          </li>
        ))
      }
    </ul>
  )
}

export default MenuDrop;

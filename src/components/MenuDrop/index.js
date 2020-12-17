import React, { useState } from "react";
import './style.css'

function MenuDrop(props) {
  const { data } = props

  return (
    <div className="menu-list-drop">
      {
        data.map((item) => (
          <ul>
          {item.map((items, index) => (
            <li key={index}>
              {items.title}
            </li>
          ))}
          </ul>
        ))
      }
    </div>
  )
}

export default MenuDrop;

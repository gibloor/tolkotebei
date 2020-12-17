import React, { useEffect, useState } from "react";
import './style.css'
import MenuDrop from './../MenuDrop'
import OutsideClick from './../OutsideClicker'

const headerMenu = [
  { 
    title: 'Специальности',
    value: 'specialty',
    items: [
      [
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
      ],
      [
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
      ],
      [
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
      ],
      [
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
        { title: 'Специальности', value: 'specialty' },
      ],
    ]
  },

  { 
    title: 'Студентам',
    value: 'students',
    items: [
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
    ]
  },
  { 
    title: 'Выпускникам', 
    value: 'graduates',
    items: [
      [
        { title: 'Выпускникам1', value: 'graduates' },
        { title: 'Выпускникам2', value: 'graduates' },
        { title: 'Выпускникам3', value: 'graduates' },
      ],
      [
        { title: 'Выпускникам4', value: 'graduates' },
        { title: 'Выпускникам5', value: 'graduates' },
        { title: 'Выпускникам6', value: 'graduates' },
        { title: 'Выпускникам6', value: 'graduates' },
      ],
      [
        { title: 'Выпускникам7', value: 'graduates' },
        { title: 'Выпускникам8', value: 'graduates' },
        { title: 'Выпускникам9', value: 'graduates' },
        { title: 'Выпускникам9', value: 'graduates' },
        { title: 'Выпускникам9', value: 'graduates' },
      ],
      [
        { title: 'Выпускникам10', value: 'graduates' },
        { title: 'Выпускникам11', value: 'graduates' },
      ],

    ]
  },
]

function HeaderMenu() {

  const [activeMenu, setActiveMenu] = useState();

  return (
    <OutsideClick>
      <div>
        <nav className="navHead">
          <ul className="menu-list">
            {
              headerMenu.map((item) => (
                <li key={item.value} onClick={() => setActiveMenu(item.items)}>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </nav>
        {
          activeMenu && <MenuDrop data={activeMenu} />
        }
      </div>
    </OutsideClick>
  );
}

export default HeaderMenu;
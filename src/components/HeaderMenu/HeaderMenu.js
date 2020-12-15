import React, { useState } from "react";
import './style.css'
import MenuDrop from './../MenuDrop'

const headerMenu = [
  { 
    title: 'Специальности',
    value: 'specialty',
    items: [
      { title: 'Специальности', value: 'specialty' },
      { title: 'Специальности', value: 'specialty' },
      { title: 'Специальности', value: 'specialty' },
    ]
  },

  { 
    title: 'Студентам',
    value: 'students',
    items: [
      { title: 'Студентам', value: 'students' },
      { title: 'Студентам', value: 'students' },
      { title: 'Студентам', value: 'students' },
    ]
  },
  { 
    title: 'Выпускникам', 
    value: 'graduates',
    items: [
      { title: 'Выпускникам', value: 'graduates' },
      { title: 'Выпускникам', value: 'graduates' },
      { title: 'Выпускникам', value: 'graduates' },
    ]
  },
]

function HeaderMenu() {

  const [activeMenu, setActiveMenu] = useState();

  return (
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
  );
}

export default HeaderMenu;

// {headerMenu.map(item => (
//   <li>
//     {item.title}
//   </li>
// ))}

// const headerMenu = [
//   [
//     { title: 'Специальности', value: 'specialty' },
//     { title: 'Студентам', value: 'students' },
//     { title: 'Выпускникам', value: 'graduates'},
//   ],
//   [
//     { title: 'Специальности', value: 'specialty' },
//     { title: 'Студентам', value: 'students' },
//     { title: 'Выпускникам', value: 'graduates'},
//   ]
// ]

{/* <ul>
                  {
                    col.map(item => (
                      <li key={item.value}>
                        {item.title}
                      </li>
                    ))
                  }
                </ul> */}
                  // const headerMenu = [
  //   { title: 'Специальности',  },
  //   { title: 'Студентам', },
  //   { title: 'Сотрудникам', },
  //   { title: 'Выпускникам', },
  //   { title: 'Партнёрам', },
  //   { title: 'Креативное образование', },
  //   { title: 'Одно окно', },
  //   { title: '📞', },
  // ] 
import React, { useState, useEffect } from 'react'; 

function HeaderMenu() {
    const pointsMenu = [
        {title:'Специальности'},
        {title:'Студентам'},
        {title:'Сотрудникам'},
        {title:'Выпускникам'},
        {title:'Партнёрам'},
        {title:'Креативное образование'},
        {title:'Одно окно<'},
        {title:'📞'},
    ]

    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        function 
        document.addEventListener('mousedown', this.handleClickOutside);

        return(
            document.removeEventListener('mousedown', this.handleClickOutside);
        );
    });

    return (
        <nav className="navHead">
            <ul onClick={setClicked(!clicked)}>
                <li>Специальности</li>
                <li>Студентам</li>
                <li>Сотрудникам</li>
                <li>Выпускникам</li>
                <li>Партнёрам</li>
                <li>Креативное образование</li>
                <li>Одно окно</li>
                <li>📞</li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;
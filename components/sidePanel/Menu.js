import React from "react"

const Menu = ({header, items, active, setActive}) => {

    let cost = 0
    
    return (
        <div className="menu">
            <div className="blur" />
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    <img src="gacha.png" />
                    <li>
                        <h3>ФИО</h3>
                    </li>
                    <li>
                        <h3>Номер кошелька</h3>
                    </li>
                    <li>
                        <h3>Баланс: {cost} (чел)</h3>
                    </li>
                    <li>
                        <h3>Статус: живой/мёртвый/уволен/неуволен/вольный/невольный/подневольный</h3>
                    </li>
                    <h3>Пройденные курсы</h3>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                            <span className="material-icons">{item.icon}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu
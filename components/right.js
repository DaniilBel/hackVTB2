import Link from 'next/link';
import { useState } from 'react';
import Menu from "./sidePanel/Menu"

const Right = (menuActive, setMenuActive) => {
    
    const items = [
        {
            value: "Главная",
            href: "/main",
            icon: ""
        },
        {
            value: "Урсула",
            href: "/main",
            icon: ""
        },
        {
            value: "Главная",
            href: "/main",
            icon: ""
        }
    ]
    return (
        <div className="menu">  
            <Menu header={"Какое-то дерьмо"} items={items}/>
        </div>
    )
}

// <Menu active={menuActive} setActive={setMenuActive} header={"Какое-то дерьмо"} items={items}/>

export default Right;
import Link from 'next/link';
import { useState } from 'react';
import Right from './right';

const Navbar = () => {
    const {menuActive, setMenuActive} = useState(false)

    return (
        <nav>
            <div className="btn" onClick={() => !setMenuActive}>
                <span />
            </div>

            <div className="logo">  
                <h1>VTB</h1>
                
            </div>

            <Right menuActive={menuActive} setMenuActive={setMenuActive} />

            <Link href="/courses"><a>Курсы</a></Link>
            <Link href="/activity"><a>Активность</a></Link>
            <Link href="/market"><a>Маркетплэйс</a></Link>
            <Link href="/prifile"><a>Мои токены</a></Link>
        </nav>
    );
}

export default Navbar;
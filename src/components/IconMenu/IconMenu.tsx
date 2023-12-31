import { useState } from "react";
import s from "./Burger-menu.module.scss"

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const burgerToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return <>
        <div onClick={burgerToggle} className={`${s.burgerMenu} ${isMenuOpen ? s.open : s.close}`}>
            <div className={s.burgerMenu_burgerLine}></div>
            <div className={s.burgerMenu_menuList}>
                <ul>
                    <li><a href="/marketplace">Marketplace</a></li>
                    <li><a href="/rankings">Rankings</a></li>
                    <li><a href="/connect">Connect a wallet</a></li>
                </ul>
            </div>
        </div>
    </>
};
export default BurgerMenu;
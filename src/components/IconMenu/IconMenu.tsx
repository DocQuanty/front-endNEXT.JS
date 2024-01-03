import { FC, useState } from "react";
import s from "./Burger-menu.module.scss"
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MenuProps {
    menuData: {
        menu: string, href: string,
    }[];
}

const BurgerMenu: FC<MenuProps> = ({ menuData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const burgerToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return <>
        <div onClick={burgerToggle} className={`${s.burgerMenu} ${isMenuOpen ? s.open : s.close}`}>
            <div className={s.burgerMenu_burgerLine}></div>
            <div className={s.burgerMenu_menuList}>
                <ul>
                    {menuData.map((el, i) => (
                        <li key={i}>
                            <Link href={el.href} className={`${pathname === el.href ? "c-red" : ""}`}>
                                {el.menu}
                            </Link>
                        </li>

                    ))}
                    <Link href={"/pages/createAccount"} >
                        SingUp
                    </Link>
                </ul>
            </div>
        </div>
    </>
};
export default BurgerMenu;
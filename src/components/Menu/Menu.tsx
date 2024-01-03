"use client"
import s from "./menu.module.scss"
import Link from "next/link";
import { FC, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";
import { usePathname } from "next/navigation";

interface MenuProps {
    menuData: {
        menu: string, href: string,
    }[];
}

const Menu: FC<MenuProps> = ({ menuData }) => {
    const pathname = usePathname();
    console.log(pathname);
    const style = "last:mr-3 lg:last:mr-10 sm:mr-5 lg:mr-12"

    return (
        <section>
            <div className="hidden md:inline ">
                {menuData.map((el, i) => (
                    <Link key={i} href={el.href} className={`${style} ${pathname === el.href ? s.active : ""}`}>
                        {el.menu}
                    </Link>
                ))}
            </div>
            {/* responsive menu (burger) */}
            <div className="md:hidden">
                <IconMenu />
            </div>
        </section>
    );
};
export default Menu;
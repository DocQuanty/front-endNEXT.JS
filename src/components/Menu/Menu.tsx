"use client"
import Link from "next/link";
import { FC, useState } from "react";

interface MenuProps {
    menuData: {
        menu: string, href: string,
    }[];
}

const Menu: FC<MenuProps> = ({ menuData }) => {
    return <section>
        {menuData.map((el, i) => {
            return <Link className="hidden lg:inline mr-12" key={i} href={el.href}>{el.menu}</Link>
        })}
    </section>
};
export default Menu;
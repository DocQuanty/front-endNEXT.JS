"use client"
import Link from "next/link";
import { FC, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";

interface MenuProps {
    menuData: {
        menu: string, href: string,
    }[];
}

const Menu: FC<MenuProps> = ({ menuData }) => {
    return (
        <section>
            <div className="hidden md:inline ">
                {menuData.map((el, i) => (
                    <Link key={i} href={el.href} className="mr-12 last:mr-2">
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
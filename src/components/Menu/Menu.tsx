import Link from "next/link";

const Menu = () => {
    interface MenuItems {
        menu: string,
        href: string,
    }
    const dataMenu: MenuItems[] = [
        { menu: "Marketplace", href: "/", },
        { menu: "Rankings", href: "/", },
        { menu: "Connect a wallet", href: "/", },
    ]
    return <section>
        {dataMenu.map((el: MenuItems, i: number) => {
            { console.log(el); }
            return <Link className="mr-12" key={i} href={el.href}>{el.menu}</Link>
        })}
    </section>
};
export default Menu;
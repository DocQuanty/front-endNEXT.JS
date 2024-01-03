import Button from "@/components/Button/Button";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const menuData = [
    { menu: "Home", href: "/", },
    { menu: "Marketplace", href: "/pages/marketplace", },
    { menu: "Rankings", href: "/pages/rankings", },
    { menu: "Connect a wallet", href: "/pages/connectWallet", },
]

const Header: FC = () => {
    return <div className="flex px-3 sm:px-12 py-5 items-center justify-between">
        <Link href="/" >
            <Image className="inline"
                src="/logo.svg"
                alt="Vercel Logo"
                width={32}
                height={32}
                priority
            />
            <span>NFT Marketplace</span>
        </Link>
        <div className="flex items-center">
            <Menu menuData={menuData} />
            <Button text={"Sign Up"} className={"hidden md:flex rounded-2xl px-7 py-4 text-base whitespace-nowrap"} icon="/user.svg" />
        </div>

    </div>
};
export default Header;
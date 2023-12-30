import Button from "@/components/Button/Button";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import { FC } from "react";

const menuData = [
    { menu: "Marketplace", href: "/marketplace", },
    { menu: "Rankings", href: "/rankings", },
    { menu: "Connect a wallet", href: "/connectWallet", },
]

const Header: FC = () => {
    return <div className="flex px-12 py-5 items-center justify-between">
        <a href="/" >
            <Image className="inline"
                src="/logo.svg"
                alt="Vercel Logo"
                width={32}
                height={32}
                priority
            />
            <span>NFT Marketplace</span>
        </a>
        <div className="flex items-center">
            <Menu menuData={menuData} />
            <Button text={"Sign Up"} className={"flex rounded-2xl px-7 py-4 text-base "} icon="/user.svg" />
        </div>

    </div>
};
export default Header;
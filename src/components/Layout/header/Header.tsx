import Button from "@/components/Button/Button";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
    return <div className="flex px-12 py-5 items-center justify-between">
        <div>
            <Image className="inline"
                src="/logo.svg"
                alt="Vercel Logo"
                width={32}
                height={32}
                priority
            />
            <span>NFT Marketplace</span>
        </div>
        <div className="flex items-center">
            <Menu />
            <Button text={"Sign Up"} className={"flex rounded-2xl px-7 py-4 text-base "} icon="/user.svg" />
        </div>

    </div>
};
export default Header;
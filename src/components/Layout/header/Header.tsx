import Button from "@/components/Button/Button";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import { FC } from "react";

// Marketplace
// Rankings
// Connect a wallet

// BTN-Sign Up



const Header: FC = () => {
    return <div className="flex items-center justify-between">
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
        <div>
            <Menu />
            <Button text={"awdawd"} w={5} h={3} />
        </div>

    </div>
};
export default Header;
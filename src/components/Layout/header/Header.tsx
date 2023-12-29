import Link from "next/link";
import { FC } from "react";

const Header:FC = () => {
return <div >
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
</div>
};
export default Header;
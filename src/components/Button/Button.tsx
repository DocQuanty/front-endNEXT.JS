'use client';

import { FC } from "react";
import s from "./Button.module.scss"
import Link from "next/link";
// import classNames from "classnames";

interface ButtonType {
    icon?: string;
    text: string;
    // w?: number;
    // h?: number;
    className?: string
}

const Button: FC<ButtonType> = ({ icon, text, className }) => {
    return <Link href="/pages/createAccount" className={`${className} ${s.color}`}  >
        {
            icon ? <img className="mr-3" src={icon} alt="icon" /> : null
        }
        {text}
    </Link>
};
export default Button;
'use client';

import { FC } from "react";
import s from "./Button.module.scss"
// import classNames from "classnames";

interface ButtonType {
    icon?: string;
    text: string;
    // w?: number;
    // h?: number;
    className?: string
}

const Button: FC<ButtonType> = ({ icon, text, className }) => {
    return <a href="/" className={`${className} ${s.color}`}  >
        {
            icon ? <img className="mr-3" src={icon} alt="icon" /> : null
        }
        {text}
    </a>
};
export default Button;
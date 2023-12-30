'use client';

import { FC } from "react";

interface ButtonType {
    icon?: string;
    text: string;
    h: number;
    w: number;
}

const Button: FC<ButtonType> = ({ icon, text, h = "1rem", w = "2rem" }) => {
    return <button className="border w-1 " style={{ width: `${w}rem`, height: `${h}rem` }}> <span>{icon}</span>{text}</button>
};
export default Button;
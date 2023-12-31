import Image from "next/image";
import { FC } from "react";
// import icon from "/public/user.svg"

interface DataProps {
    register: Function;
    className?: string
}
interface InputType {
    type: string,
    placeholder: string,
    name: string | number,
    srcIcon: string
}
const inputsConfig: InputType[] = [
    { type: 'text', placeholder: 'Username', name: 'username', srcIcon: '/user.svg' },
    { type: 'email', placeholder: 'Email', name: 'email', srcIcon: '/envelope.svg' },
    { type: 'password', placeholder: 'Password', name: 'password', srcIcon: '/lock.svg' },
    { type: 'password', placeholder: 'Confirm Password', name: 'confirmPassword', srcIcon: '/lock.svg' },
];

const Input: FC<DataProps> = ({ register, className }) => {
    return (
        <>
            {inputsConfig.map((config, i) => (
                <div className={`relative ${className}`}>
                    <Image className="absolute top-3 left-4" src={config.srcIcon} alt={""} width={20} height={20} />
                    <input
                        className="placeholder-slate-500  focus:outline-none rounded-3xl text-black block pr-20 pl-16 py-3"
                        key={i}
                        type={config.type}
                        placeholder={config.placeholder}
                        {...register(config.name)}
                    />
                </div>
            ))}
        </>
    );
};
export default Input;
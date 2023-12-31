import { FC } from "react";

interface DataProps {
    register: Function;
}
interface InputType {
    type: string,
    placeholder: string,
    name: string | number
}
const inputsConfig: InputType[] = [
    { type: 'text', placeholder: 'Username', name: 'username' },
    { type: 'text', placeholder: 'Username', name: 'name' },
    { type: 'email', placeholder: 'Email', name: 'email' },
    { type: 'password', placeholder: 'Password', name: 'password' },
    { type: 'password', placeholder: 'Confirm Password', name: 'confirmPassword' },
];

const Input: FC<DataProps> = ({ register }) => {
    return (
        <>
            {inputsConfig.map((config, i) => (
                <input
                    className='text-black'
                    key={i}
                    type={config.type}
                    placeholder={config.placeholder}
                    {...register(config.name)}

                />
            ))}
            {/* <input
                className={'block text-black'}
                type="text"
                placeholder="Username"
                {...register('username')} // Пример использования register
            />
            <input className={'block'}
                type="text"
                placeholder="Username"
                {...register("name")}
            />
            <input
                className={'block'}
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            <input
                className={'block'}
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <input
                className={'block'}
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
            /> */}
        </>
    );
};
export default Input;
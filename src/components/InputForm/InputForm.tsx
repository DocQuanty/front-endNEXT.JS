"use client"
// import { useClient } from 'next/server';
// import s from './FormInput.module.scss';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Input from './Input/Input';
import { type } from 'os';

interface IFormState {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const FormInput = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm<IFormState>()

    const onSubmit: SubmitHandler<IFormState> = async (data) => {
        setIsLoading(true);
        console.log(data);
        try {
            if (data.password === data.confirmPassword) {
                const response = await fetch("http://localhost:5000/api/body", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const responseData = await response.json();
                    setIsSuccess(true);
                    reset();
                    console.log(responseData);
                } else {
                    const errorData = await response.json();
                    console.error("Server responded with an error:", response.status, response.statusText, errorData);
                }
            } else {
                console.error("Passwords do not match");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input register={register} />

                {/* <input
                    className={'block'}
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
                <button disabled={isLoading} style={{ border: "1px solid black" }} type="submit">{isLoading ? "Loading" : "Create Account"}</button>
            </form>
            {isSuccess ? null : (
                <div >Account has been created!</div>
            )}
        </>
    );
}
export default FormInput;
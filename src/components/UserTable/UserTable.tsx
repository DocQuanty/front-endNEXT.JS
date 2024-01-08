'use client'
import { FC, useState } from "react";

interface User {
    id: number;
    name: string;
    sold: number;
    volume: number;
}

interface UserTableProps {
    data: object
    active: "string"
}

const UserTable: FC<UserTableProps> = ({ data, active }) => {

    return (
        <ul>
            {data?.map((user) => (
                <li key={user.id}>
                    <span>number#1</span>
                    <br />
                    <span>icon</span>
                    <br />
                    <span>{user.name}</span>
                    <br />
                    <span>change</span>
                    <br />
                    <span>{active === "ThisWeek" ? user.sold + 100 : user.sold}</span>
                    <br />
                    <span>{active === "ThisWeek" ? user.volume + 100 : user.volume}</span>
                    <br />
                    <br />
                </li>
            ))}
        </ul>
    );
};

export default UserTable;

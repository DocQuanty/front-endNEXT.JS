'use client'
import { FC, useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    sold: number;
    volume: number;
}

interface UserTableProps {
    activeTab: string;
}

const UserTable: FC<UserTableProps> = ({ activeTab }) => {
    const [data, setData] = useState<User[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/users/", {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    console.error(`HTTP error! Status: ${response.status}`);
                    return;
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };

        fetchData();
    }, []); // Порожній масив означає, що ефект буде викликано лише після монтажу компонента

    return (
        <ul>
            {data?.map((user) => (
                <li key={user.id}>
                    <span>number#1</span>
                    {" "}
                    <span>icon</span>
                    {" "}
                    <span>{user.name}</span>
                    {" "}
                    <span>change</span>
                    {" "}
                    <span>{user.sold}</span>
                    {" "}
                    <span>{user.volume}</span>
                </li>
            ))}
        </ul>
    );
};

export default UserTable;

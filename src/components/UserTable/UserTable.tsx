'use client'
import { FC, Fragment, useState } from "react";
import s from "./UserTable.module.scss";


interface User {
    id: number;
    name: string;
    sold: number;
    volume: number;
}

interface UserTableProps {
    data: User[]
    active: string
}

const UserTable: FC<UserTableProps> = ({ data, active }) => {
    return (
        <div className={s.parent}>
            <div>#</div>
            <div>Artist</div>
            <div>Change</div>
            <div>NFTs Sold</div>
            <div>Volume</div>
            {data?.map((user) => (
                <Fragment key={user.id}>
                    <div>{user.id}</div>
                    <div>
                        <span className="text-red-500">icon {" "}</span>
                        <span>{user.name}</span>
                    </div>
                    <div>+1.41%</div>
                    <div>
                        {active === "ThisWeek" ? user.sold + 100 : user.sold}
                    </div>
                    <div>{active === "ThisWeek" ? user.volume + 100 : user.volume} ETH</div>
                </Fragment>
            ))}
        </div>
    )

};

export default UserTable;

'use client'
import { FC, Fragment, useState } from "react";
import s from "./UserTable.module.scss";


interface Img {
    id_img: number;
    id_user: number;
    src: string;
}

interface User {
    id: number;
    name: string;
    sold: number;
    volume: number;
    img: Img;
}

interface UserTableProps {
    data: User[];
    active: string;
}

const UserTable: FC<UserTableProps> = ({ data, active }) => {
    console.log('[data]', data)

    return (

        <div className={s.parent}>
            <div className={s.header}>
                <div className={s.nested}>#</div>
                <div className={s.nested}>Artist</div>
                <div className={s.nested}>Change</div>
                <div className={s.nested}>NFTs Sold</div>
                <div className={s.nested}>NFTs Volume</div>
            </div>
            {data.map((user) => (
                <div key={user.id} className={s.content_table}>
                    <div className="box">{user.id}</div>
                    <div className={s.img_block}>
                        <img src={user.img.src} alt="table_img" />
                        <span className={s.userName}>
                            {user.name}
                        </span>
                    </div>
                    <div className={s.change}>+1.41%</div>
                    <div className={s.sold}>
                        {active === "ThisWeek" ? user.sold + 100 : user.sold}</div>
                    <div className={s.volume}>
                        {active === "ThisWeek" ? user.volume + 100 : user.volume} ETH</div>
                </div>
            ))}
        </div>
    )

};

export default UserTable;

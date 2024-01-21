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
            <div className={s.info_block}>#</div>
            <div className={s.info_block}>Artist</div>
            <div className={s.info_block}>Change</div>
            <div className={s.info_block}>NFTs Sold</div>
            <div className={s.info_block}>Volume</div>
            {data.map((user) => (
                <Fragment key={user.id}>
                    <div className={s.sequence}>{user.id}</div>
                    <div className={s.artist}>
                        <span className={s.img}>
                            <img src={user.img.src} alt="alfredo" />
                        </span>
                        <div className={s.name} >{user.name}</div>
                    </div>

                    <div className={s.change}>+1.41%</div>
                    <div className={s.sold}>
                        {active === "ThisWeek" ? user.sold + 100 : user.sold}
                    </div>
                    <div className={s.volume}>{active === "ThisWeek" ? user.volume + 100 : user.volume} ETH</div>
                </Fragment>
            ))}
        </div>
    )

};

export default UserTable;

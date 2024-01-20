'use client'
import { FC, Fragment, useState } from "react";
import s from "./UserTable.module.scss";


interface User {
    id: number;
    name: string;
    sold: number;
    volume: number;
}
// interface Img {
//     id_img: number;
//     id_user: number;
//     name: string;
// }

interface UserTableProps {
    data: User[];
    active: string;
}

const UserTable: FC<UserTableProps> = ({ data, active }) => {
    // const [newArrData, setNewArrData] = useState()

    // if (img && Array.isArray(img) && img && Array.isArray(img)) {
    //     setNewArrData(...data, ...img)
    //     console.log(newArrData)
    // }

    console.log('[data]', data)

    return (
        <div className={s.parent}>
            <div>#</div>
            <div>Artist</div>
            <div>Change</div>
            <div>NFTs Sold</div>
            <div>Volume</div>
            {/* {newArrData?.map((user) => (
                <Fragment key={user.id}>
                    <div>{user.id}</div>
                    <div>
                        <span><img src="/icons/alfredo.svg" alt="alfredo" /></span>
                        <span>{user.name}</span>
                    </div>
                    <div>+1.41%</div>
                    <div>
                        {active === "ThisWeek" ? user.sold + 100 : user.sold}
                    </div>
                    <div>{active === "ThisWeek" ? user.volume + 100 : user.volume} ETH</div>
                </Fragment>
            ))} */}
            {data.map((user) => (
                <Fragment key={user.id}>
                    <div>{user.name}</div>
                    <div>
                        <span><img src="" alt="alfredo" /></span>
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

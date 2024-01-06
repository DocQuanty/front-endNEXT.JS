"use client"
import Layout from "@/components/Layout/Layout";
import UserTable from "@/components/UserTable/UserTable";
// import { Metadata } from "next";
import { useState } from "react";

// this is not work in client components
// export const metadata: Metadata = {
//     title: "Rankings",
// }

const Rankings = () => {
    const [activeTab, setActiveTab] = useState("Today");

    const handleChangeTable = (Tab: string) => {
        console.log("changeTableOn" + " " + Tab);
        setActiveTab(Tab)
    }
    return <Layout><section>
        <div>
            <h1>Top Creators</h1>
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>
        <div className="wrapper">
            <div>
                <button onClick={() => handleChangeTable("Today")}>Today</button>
                <button onClick={() => handleChangeTable("ThisWeek")}>ThisWeek</button>
                <button onClick={() => handleChangeTable("ThisMonth")}>ThisMonth</button>
                <button onClick={() => handleChangeTable("AllTime")}>AllTime</button>
            </div>
            <div>
                {activeTab === "Today" && <UserTable activeTab={activeTab} />}
                {activeTab === "ThisWeek" && <UserTable activeTab={activeTab} />}
                {activeTab === "ThisMonth" && <UserTable activeTab={activeTab} />}
                {activeTab === "AllTime" && <UserTable activeTab={activeTab} />}
            </div>
        </div>
    </section></Layout>
};
export default Rankings;
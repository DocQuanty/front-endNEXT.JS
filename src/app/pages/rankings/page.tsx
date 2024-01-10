"use client"
import Layout from "@/components/Layout/Layout";
import UserTable from "@/components/UserTable/UserTable";
// import { Metadata } from "next";
import { useEffect, useState } from "react";


// this is not work in client components
// export const metadata: Metadata = {
//     title: "Rankings",
// }

interface User {
    id: number;
    name: string;
    sold: number;
    volume: number;
}

const Rankings = () => {
    const [activeTab, setActiveTab] = useState("Today");
    const [data, setData] = useState<User[] | null>(null);
    const isTabActive = (tab: string) => tab === activeTab;

    const handleChangeTable = (Tab: string) => {
        // console.log("changeTableOn" + " " + Tab);
        setActiveTab(Tab)
    }

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
    }, []);

    const changeTab = (active: any, data: User[] | null) => {
        switch (active) {
            case "Today":
                return data ? <UserTable data={data} active={active} /> : null;
            case "ThisWeek":
                return data ? <UserTable data={data} active={active} /> : null;
            case "ThisMonth":
                return data ? <UserTable data={data} active={active} /> : null;
            case "AllTime":
                return data ? <UserTable data={data} active={active} /> : null;
            default:
                break;
        }
    }

    const button = [
        { tabName: "Today" },
        { tabName: "ThisWeek" },
        { tabName: "ThisMonth" },
        { tabName: "AllTime" }
    ]

    return <Layout>
        <section className="pl-28 pr-28 " >
            <div>
                <h1>Top Creators</h1>
                <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
            <div className="wrapper">
                <div className="flex justify-center mb-10">
                    {button.map((tab) => (
                        <button
                            key={tab.tabName}
                            onClick={() => handleChangeTable(tab.tabName)}
                            className={`w-full py-2 text-2xl font-semibold text-zinc-400    ${isTabActive(tab.tabName) ? "transition-colors duration-300 border-b-2 border-x-neutral-600 text-white" : ""}`}
                        >{tab.tabName}</button>
                    ))}
                </div>
                {changeTab(activeTab, data)}
            </div>
        </section>
    </Layout>
};
export default Rankings;
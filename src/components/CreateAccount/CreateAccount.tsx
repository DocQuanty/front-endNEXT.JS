"use client"

import InputForm from "@/components/InputForm/InputForm"
import Image from "next/image";
import { createRef, useEffect, useState } from "react";

const CreateAccount = () => {
    const refComponent = createRef();
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const screenWidth = window.screen.width

        if (screenWidth <= 640) {
            setWidth(375)
            setHeight(232)
        }
        else if (screenWidth > 640 && screenWidth < 1024) {
            setWidth(397)
            setHeight(315)
        }
        else if (screenWidth > 1024) {
            setWidth(610)
            setHeight(691)
        }

    }, [refComponent]);

    return <section className="block sm:flex sm:flex-1 sm:items-center md:justify-center">
        <div className="sm:mr-2 lg:w-1/2 md:mr-12" >
            <Image className="w-full bg-contain " src={"/jpg/CreateAccount.jpg"} alt={"jpg"} width={width} height={height} />
        </div>
        <div>
            <div className="sm:mt-3 sm:w-full md:mt-28 lg:px-5">
                <div className="text-4xl md:text-5xl mt-5 sm:mt-0 mb-5 sm:mb-2 md:font-semibold">Create account</div>
                <div className="sm:text-xs md:text-xl mb-7 md:font-normal">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
                <InputForm />
            </div>
        </div>
    </section>
};
export default CreateAccount;
"use client"

import InputForm from "@/components/InputForm/InputForm"
import Image from "next/image";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";

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

    return <section className="block  sm:flex items-center">
        <div className="sm:mr-12 lg:mr-32" >
            <Image src={"/jpg/CreateAccount.jpg"} alt={"jpg"} width={width} height={height} />
        </div>
        <div>
            <div className="sm:mt-3 md:mt-28">
                <div className="sm:text-4xl md:text-5xl mb-4 font-semibold">Create account</div>
                <div className="sm:text-xs md:text-xl max-w-96 mb-7 font-normal">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
                <InputForm />
            </div>
        </div>
    </section>
};
export default CreateAccount;
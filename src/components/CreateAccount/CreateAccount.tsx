import InputForm from "@/components/InputForm/InputForm"
import Image from "next/image";

const CreateAccount = () => {
    return <section className="flex ">
        <div className="mr-32" >
            <Image className="mr-24" src={"/jpg/CreateAccount.jpg"} alt={"awd"} width={610} height={651} />
        </div>
        <div>
            <div className="mt-28">
                <div className="text-5xl mb-4 font-semibold">Create account</div>
                <div className="text-xl max-w-96 mb-7 font-normal">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
                <InputForm />
            </div>
        </div>
    </section>
};
export default CreateAccount;
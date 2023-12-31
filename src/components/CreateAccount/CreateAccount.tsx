import InputForm from "@/components/InputForm/InputForm"

const CreateAccount = () => {
    return <section>
        <div></div>
        <div>
            <div className="text">
                <div className="title">Create account</div>
                <div className="description">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
                <InputForm />
                <button>Create Account</button>
            </div>
        </div>
    </section>
};
export default CreateAccount;
import CreateAccount from "@/components/CreateAccount/CreateAccount";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create account page",
}

const CreateAccountPage = () => {
    return (
        <Layout>
            <CreateAccount />
        </Layout>
    )
};
export default CreateAccountPage;
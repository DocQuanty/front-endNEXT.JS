import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "TEST",
}

function IndexPage() {
    return (
        <Layout >
            <h1>awd</h1>
        </Layout>
    );
}

export default IndexPage;
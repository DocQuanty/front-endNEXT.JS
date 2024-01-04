import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
}

const Home = () => {
  return (
    <Layout>
      Home
    </Layout>
  )
}

export default Home
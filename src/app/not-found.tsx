'use client'
import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import { NextPage } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NotFound: NextPage = () => {
    const pathname = usePathname()
    return (
        <Layout title='404 not found' >
            <div className='flex items-center justify-center h-screen'>
                <div className='mr-11'>
                    <h1>Not Found</h1>
                    <p>Could not find requested resource at : <span style={{ color: "red" }}>{pathname}</span></p>
                </div>
                <Link className='mt-4' href="/">
                    <Button text={"Go back at home"} className={" rounded-2xl px-7 py-4 whitespace-nowrap"} />
                </Link>
            </div>
        </Layout>
    )
}

export default NotFound
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page({params}) {
  const router = useRouter()
 
  return (
    <main>
        {/* роутинг на гланую страницу */}
        <button type="button" onClick={() => router.push('/')}>
            goHome
        </button>
        <br />
        <button type="button" onClick={() => router.replace('/')}>
            goHomeRep
        </button>

        <br />
            {`Dashboard ${params.carsid}`}
    </main>
  )
}
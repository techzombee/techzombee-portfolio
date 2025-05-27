import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import AuthGuard from '../components/AuthGuard'

export default function Home() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string | null>(null)

  //check Login
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setUserEmail(session?.user?.email ?? null)
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }

  return (
    <AuthGuard>
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
            Welcome{userEmail ? `, ${userEmail}` : ''}!
        </h1>
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
        >
            Log out
        </button>
        </main>
    </AuthGuard>
  )
}
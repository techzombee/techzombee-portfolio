import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import TabNav from './TabNav'

export default function Header() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      {/* 좌측: 로고 / 서비스명 */}
      <div className="text-xl font-bold">
        <Link href="/">MVP Starter Kit</Link>
      </div>

      {/* 중앙: 탭 */}
      <nav className="flex-1 flex justify-center">
        <TabNav />
      </nav>

      {/* 우측: 로그인 상태에 따라 버튼 */}
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-black"
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/signin"
            className="text-sm text-blue-600 hover:underline"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  )
}
// components/AuthGuard.tsx

// NOTE: This component is currently not in use.

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../lib/supabase'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/signin')
      } else {
        setLoading(false)
      }
    })
  }, [router])

  if (loading) return <p></p>

  return <>{children}</>
}
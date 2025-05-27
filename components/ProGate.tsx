import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ProGate() {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const fetchToken = async () => {
      const { data } = await supabase.auth.getSession()
      setAccessToken(data.session?.access_token ?? null)
    }
    fetchToken()
  }, [])

  const handleUpgrade = async () => {
    if (!accessToken) {
      console.error('No access token found')
      return
    }

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      console.error('Checkout session failed:', data)
    }
  }

  return (
    <button 
      onClick={handleUpgrade} 
      className="text-sm bg-yellow-400 text-black px-3 py-1 rounded"
    >
      Upgrade
    </button>
  )
}
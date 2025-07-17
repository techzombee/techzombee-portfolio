// components/TabNav.tsx

// NOTE: This component is currently not in use.

import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const tabs = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Logs', href: '/logs' },
  { label: 'Settings', href: '/settings' },
]

export default function TabNav() {
  const router = useRouter()

  return (
    <nav className="space-x-6">
      {tabs.map(tab => (
        <Link
          key={tab.href}
          href={tab.href}
          className={clsx(
            'text-sm font-medium',
            router.pathname === tab.href
              ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
              : 'text-gray-600 hover:text-black'
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
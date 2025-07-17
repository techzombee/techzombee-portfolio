import Link from 'next/link'
import TabNav from './TabNav'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="text-xl font-bold">
        <Link href="/">techzombee</Link>
      </div>

      <nav className="flex-1 flex justify-center">
        <TabNav />
      </nav>
    </header>
  )
}
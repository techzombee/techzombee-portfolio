import Header from '../content/Header'
import Footer from '../content/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  )
}
import Footer from '../content/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 py-6">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
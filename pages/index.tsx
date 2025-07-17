import SnsIcons from '@/components/SnsIcons'

export default function Home() {
  return (
    <>
      <div className="flex justify-center mb-6">
        <SnsIcons />
      </div>

      <section className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black-600 mt-20">
          Welcome!
        </h1>
      </section>
    </>
    
  )
}
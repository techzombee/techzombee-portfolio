const bullets = [
    'iOS Engineer',
    'Full-Stack background',
    'Production banking experience',
    'AI automation builder',
]

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">About</h2>
            <ul className="space-y-1 text-sm text-gray-700">
                {bullets.map((item) => (
                    <li key={item}>- {item}</li>
                ))}
            </ul>
        </section>
    )
}
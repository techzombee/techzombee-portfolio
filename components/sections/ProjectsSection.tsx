const projects = [
    // { year: '2021', title: 'Nature walks', href: '#' },
    // { year: '2020', title: 'Plant-based cookware', href: '#' },
    // { year: '2018', title: 'Interactive art installation', href: '#' },
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Side Projects</h2>
            <div className="space-y-3">
                {projects.map((item) => (
                    <div key={item.title} className="grid grid-cols-[120px_1fr] gap-x-4 text-sm">
                        <span className="text-gray-400">{item.year}</span>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {item.title}{' '}
                            <sup className="text-gray-400">*</sup>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

const experiences = [
    {
        period: 'Nov 2021 — Present',
        title: 'Software Engineer, iOS · Kookmin Bank',
        href: '#',
        location: 'Seoul, South Korea',
        images: [],
    },
    {
        period: 'Mar 2021 — Oct 2021',
        title: 'Software Engineer, Full-Stack · Kookmin Bank',
        href: '#',
        location: 'Seoul, South Korea',
        images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
    },
    {
        period: 'Jan 2017 — Feb 2021',
        title: 'Software Engineer, Full-Stack · Awesome Company',
        href: '#',
        location: 'Seoul, South Korea',
        images: [],
    },
    {
        period: 'Jan 2013 — Dec 2016',
        title: 'Software Engineer, Full-Stack · Blue Korea',
        href: '#',
        location: 'Seoul, South Korea',
        images: [],
    },
]

export default function ExperienceSection() {
    return (
        <section id="experience" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
                {experiences.map((item, i) => (
                    <div key={i} className="grid grid-cols-[120px_1fr] gap-x-4 text-sm">
                        <span className="text-gray-400 pt-0.5">{item.period}</span>
                        <div>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {item.title}{' '}
                                <sup className="text-gray-400">↗</sup>
                            </a>
                            <p className="text-gray-400">{item.location}</p>
                            {item.images.length > 0 && (
                                <div className="flex gap-2 mt-3 overflow-x-auto">
                                    {item.images.map((src, j) => (
                                        <div
                                            key={j}
                                            className="w-24 h-16 rounded bg-gray-200 flex-shrink-0 overflow-hidden"
                                        >
                                            <img
                                                src={src}
                                                alt=""
                                                className="w-full h-full object-cover"
                                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
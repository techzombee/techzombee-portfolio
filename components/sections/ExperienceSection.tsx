import { useState, useEffect } from 'react'

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
        images: [
            '/career/inqAllAccounts_eng.png',
            '/career/consentPersonInfo_eng.png',
            '/career/signGovMortgage_eng.png',
        ],
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
    const [lightbox, setLightbox] = useState<string | null>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightbox(null)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    return (
        <section id="experience" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
                {experiences.map((item, i) => (
                    <div key={i} className="grid grid-cols-[160px_1fr] gap-x-4 text-sm">
                        <span className="text-gray-400 pt-0.5 whitespace-nowrap">{item.period}</span>
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
                                        <button
                                            key={j}
                                            onClick={() => setLightbox(src)}
                                            className="w-24 h-16 rounded bg-gray-200 flex-shrink-0 overflow-hidden hover:opacity-80 transition-opacity cursor-zoom-in"
                                        >
                                            <img
                                                src={src}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {lightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={() => setLightbox(null)}
                >
                    <img
                        src={lightbox}
                        alt=""
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    )
}

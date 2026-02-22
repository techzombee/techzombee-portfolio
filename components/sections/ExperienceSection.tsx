import ImageGallery from '@/components/ui/ImageGallery'

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
    return (
        <section id="experience" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
                {experiences.map((item, i) => (
                    <div key={i} className="grid grid-cols gap-x-4 text-sm">
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
                            <ImageGallery images={item.images} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

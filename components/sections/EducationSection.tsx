import ImageGallery from '@/components/ui/ImageGallery'

const education = [
    {
        period: 'Sep 2023 — Aug 2025',
        degree: "B.S. in Computer Science · Korea National Open University",
        href: 'https://en.wikipedia.org/wiki/Korea_National_Open_University',
        location: 'Seoul, South Korea',
        images: [],
    },
    {
        period: 'Mar 2019 — Feb 2021',
        degree: "M.S. in Information and Communication Technology (Top of Class) · Ajou University",
        href: 'https://en.wikipedia.org/wiki/Ajou_University',
        thesis: {
            title: "Strength Training Intensity Measurement System Based on Skin Temperature — Smart Sportswear & Machine Learning",
            url: "https://dcoll.ajou.ac.kr/dcollection/srch/srchDetail/000000030731?localeParam=en",
        },
        location: 'Suwon, South Korea',
        images: ['/education/transcript_ajou.png'],
    },
    {
        period: 'Feb 2013 — Feb 2018',
        degree: 'B.S. in Business Administration · Academic Credit Bank System',
        href: 'https://en.wikipedia.org/wiki/Academic_Credit_Bank_System',
        location: 'Seoul, South Korea',
        images: [],
    },
]

export default function EducationSection() {
    return (
        <section id="education" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Education</h2>
            <div className="space-y-4">
                {education.map((item, i) => (
                    <div key={i} className="grid grid-cols gap-x-4 text-sm">
                        <span className="text-gray-400 pt-0.5 whitespace-nowrap">{item.period}</span>
                        <div>
                            <p>
                                {(() => {
                                    const [degree, school] = item.degree.split(' · ')
                                    return <>{degree} · <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{school} <sup className="text-gray-400">↗</sup></a></>
                                })()}
                            </p>
                            {item.thesis && (
                                <p className="text-xs">
                                    <a
                                        href={item.thesis.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {item.thesis.title}{' '}
                                        <sup className="text-gray-400">↗</sup>
                                    </a>
                                </p>
                            )}
                            <p className="text-gray-400">{item.location}</p>
                            <ImageGallery images={item.images} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const education = [
    {
        period: 'Sep 2023 — Aug 2025',
        degree: "B.S. in Computer Science · Korea National Open University",
        location: 'Seoul, South Korea',
    },
    {
        period: 'Mar 2019 — Feb 2021',
        degree: "M.S. in Information and Communication Technology (Top of Class) · Ajou University",
        location: 'Suwon, South Korea',
    },
    {
        period: 'Feb 2013 — Feb 2018',
        degree: 'B.S. in Business Administration · Academic Credit Bank System',
        location: 'Seoul, South Korea',
    },
]

export default function EducationSection() {
    return (
        <section id="education" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Education</h2>
            <div className="space-y-4">
                {education.map((item, i) => (
                    <div key={i} className="grid grid-cols-[160px_1fr] gap-x-4 text-sm">
                        <span className="text-gray-400 pt-0.5 whitespace-nowrap">{item.period}</span>
                        <div>
                            <p>{item.degree}</p>
                            <p className="text-gray-400">{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

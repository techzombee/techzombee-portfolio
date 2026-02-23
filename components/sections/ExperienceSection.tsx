import ImageGallery from '@/components/ui/ImageGallery'

const experiences = [
    {
        period: 'Nov 2021 — Present',
        title: 'Software Engineer, iOS · Kookmin Bank',
        location: 'Seoul, South Korea',
        images: [
            '/career/starbanking_appstore.jpeg',
            '/career/simpleHome_eng.jpeg',
            '/career/customCamera_eng.jpeg',
        ],
        captions: [
            {
                title: "KB Star Banking – 14M+ Monthly Active Users (MAU)",
                bullets: [
                    "Contributed to one of Korea's largest mobile banking platforms",
                    "Reduced app launch time from 6.0s → 1.9s through refactoring and network optimization",
                    "Eliminated legacy logic to improve startup performance and stability",
                    "Resolved critical WebView–Native bridge issues in hybrid architecture",
                    "Served as Technical Project Lead (PL) for a government-backed digital wallet initiative",
                ],
            },
            {
                title: "Simple Home Dashboard – Core Native Screen Development",
                bullets: [
                    "Developed the main dashboard used for high-frequency banking interactions",
                    "Designed shared native methods exposed to WebView modules",
                    "Built reusable communication interfaces between native app and web components",
                    "Modularized hybrid interaction layers to improve maintainability",
                    "Designed secure local data handling logic for sensitive user information",
                ],
            },
            {
                title: "Custom Camera Module – Utility Bill Submission Feature",
                bullets: [
                    "Implemented a custom in-app camera interface for bill capture",
                    "Developed native-to-web integration methods for hybrid usage",
                    "Processed captured images into standardized formats before returning to WebView",
                ],
            },
        ],
    },
    {
        period: 'Mar 2021 — Oct 2021',
        title: 'Software Engineer, Full-Stack · Kookmin Bank',
        location: 'Seoul, South Korea',
        images: [
            '/career/inqAllAccounts_eng.png',
            '/career/consentPersonInfo_eng.png',
            '/career/signGovMortgage_eng.png',
        ],
        captions: [
            {
                title: "All Accounts Overview – Cross-Channel Full-Stack Development",
                bullets: [
                    "Served as Project Lead for this feature within the Star Banking app",
                    "Developed UI across three channels: website, mobile web, and native app",
                    "Implemented backend transaction logic using Java and SQL for real-time financial data rendering",
                    "Ensured consistent account aggregation logic across all channels"
                ]
            },
            {
                title: "Third-Party Data Consent – Digital Workflow Transformation",
                bullets: [
                    "Led this feature initiative to digitize third-party data consent for mortgage applications",
                    "Enabled customers to complete legally required consent online without visiting a branch",
                    "Restructured legacy datasets and designed new database tables to support the workflow",
                    "Coordinated cross-team collaboration to define requirements and integrate with existing systems"
                ]
            },
            {
                title: "Government Mortgage e-Signature – End-to-End Online Execution",
                bullets: [
                    "Led implementation of the electronic signature workflow for government-backed mortgage loans",
                    "Validated loan data retrieved via enterprise integration layer (EAI) prior to signature processing",
                    "Enabled fully online loan execution, eliminating mandatory in-branch signing",
                    "Ensured transactional integrity and regulatory compliance within financial systems"
                ]
            }
        ],
    },
    {
        period: 'Jan 2017 — Feb 2021',
        title: 'Software Engineer, Full-Stack · Awesome Company',
        location: 'Seoul, South Korea',
        images: [],
    },
    {
        period: 'Jan 2013 — Dec 2016',
        title: 'Software Engineer, Full-Stack · Blue Korea',
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
                            <p>{item.title}</p>
                            <p className="text-gray-400">{item.location}</p>
                            <ImageGallery images={item.images} captions={item.captions} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

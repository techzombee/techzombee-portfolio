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
        images: [
            '/career/awesomecompany_web_main_en.png',
            '/career/awesomecompany_web_admin_en.png',
            '/career/awesomecompany_app_main_en.png',
        ],
        captions: [
            {
                title: "Web – Main Shop Page",
                bullets: [
                    "Built the main shopping page using React with Redux state management",
                    "Developed RESTful product and banner APIs using Spring Boot",
                    "Implemented JWT-based authentication and persistent login sessions",
                    "Designed dynamic product grid with real-time cart count synchronization",
                    "Optimized performance with lazy loading and AWS S3 image delivery",
                ],
            },
            {
                title: "Web – Admin Dashboard",
                bullets: [
                    "Developed admin dashboard with Role-Based Access Control (RBAC)",
                    "Implemented product and order CRUD APIs using Spring Boot and JPA",
                    "Designed relational database schema for products, users, and orders",
                    "Built sales analytics and order status management features",
                    "Deployed backend services on AWS EC2 with RDS integration",
                ],
            },
            {
                title: "Mobile App – iOS / Hybrid Integration",
                bullets: [
                    "Designed and implemented RESTful APIs to support seamless mobile integration with the Spring Boot backend",
                    "Implemented JWT-based authentication and secure HTTPS communication for protected mobile sessions",
                    "Developed dynamic two-column product grid with real-time search and keyword filtering",
                    "Built synchronized cart management system across web and mobile platforms with backend validation",
                    "Optimized API response payloads and network performance to enhance mobile user experience",
                ],
            },
        ],
    },
    {
        period: 'Jan 2013 — Dec 2016',
        title: 'Software Engineer, Full-Stack · Blue Korea',
        location: 'Seoul, South Korea',
        images: [
            '/career/bluekorea_web_main_en.png',
            '/career/bluekorea_web_shop_en.png',
            '/career/bluekorea_web_admin_en.png',
            '/career/bluekorea_app_main_en.png',
        ],
        captions: [
            {
                title: "Main Page",
                bullets: [
                    "Developed the main landing page using Spring MVC and JSP",
                    "Implemented dynamic content rendering with AngularJS for interactive components",
                    "Integrated banner and featured product APIs through a controller-service architecture",
                    "Applied session-based user state management for personalized content delivery",
                    "Optimized server response time by improving MyBatis query performance",
                ],
            },
            {
                title: "Shopping Page – Product List & Detail",
                bullets: [
                    "Designed product listing and detail pages using AngularJS and Bootstrap UI components",
                    "Implemented filtering, sorting, and pagination backed by MyBatis queries",
                    "Built cart and order processing logic within the Spring service layer",
                    "Managed transactional order handling using Spring's declarative transaction management",
                    "Designed relational schemas for product, order, and user domains in Oracle DB",
                ],
            },
            {
                title: "Admin Page",
                bullets: [
                    "Developed an admin dashboard for product and order management using Spring MVC",
                    "Implemented full CRUD functionality through MyBatis mapper configuration",
                    "Applied Role-Based Access Control (RBAC) using session and interceptor mechanisms",
                    "Created reporting views for sales statistics using aggregated SQL queries",
                    "Improved batch data processing performance through query optimization",
                ],
            },
            {
                title: "Mobile Integration – Hybrid App Support",
                bullets: [
                    "Designed RESTful APIs to support hybrid mobile application integration",
                    "Implemented JSON-based communication between the web server and mobile client",
                    "Developed authentication APIs for secure mobile login sessions",
                    "Optimized API response payload size to enhance mobile performance",
                    "Deployed and monitored server logs to handle mobile traffic efficiently",
                ],
            },
        ],
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

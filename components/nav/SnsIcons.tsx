const sns = [
    {
        name: 'Github',
        href: 'https://github.com/techzombee',
        src: '/icons-sns/github-black.png',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/damon-cho/',
        src: '/icons-sns/linkedin-black.png',
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/techzombee/',
        src: '/icons-sns/instagram-black.svg',
    },
        {
        name: 'X',
        href: 'https://x.com/techzombee_io',
        src: '/icons-sns/x-black.png',
    },
];

export default function SnsIcons() {
    return (
        <div className="flex gap-4 items-center">
            {sns.map(({ name, href, src }) => (
                <a
                key={name}
                href={href}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:opacity-70 transition-opacity"
                >
                    <img title={name} src={src} alt={name} className="w-5 h-5 object-contain" />
                </a>
            ))}
        </div>
    );
}
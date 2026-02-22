const contacts = [
    { platform: 'Threads', username: 'username', href: '#' },
    { platform: 'Figma', username: 'username', href: '#' },
    { platform: 'Instagram', username: 'username', href: '#' },
    { platform: 'Bluesky', username: 'username', href: '#' },
    { platform: 'Mastodon', username: 'username', href: '#' },
    { platform: 'X', username: 'username', href: '#' },
]

export default function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-24 mb-10">
            <h2 className="text-sm font-semibold mb-4">Contact</h2>
            <div className="space-y-2">
                {contacts.map((item) => (
                    <div key={item.platform} className="grid grid-cols gap-x-4 text-sm">
                        <span className="text-gray-400">{item.platform}</span>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {item.username}{' '}
                            <sup className="text-gray-400">*</sup>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { sectionList } from "@/constants/sections";

export default function ScrollSpyNav() {
    const activeId = useScrollSpy(sectionList.map((s) => s.id), 96)

    return (
        <nav className="sticky top-24">
            <ul className="space-y-2 text-sm">
                {sectionList.map((section) => (
                    <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`block transition-colors duration-200 ${
                            activeId === section.id ? 'text-blue-500 font-bold' : 'text-gray-500'
                          }`}
                        >
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
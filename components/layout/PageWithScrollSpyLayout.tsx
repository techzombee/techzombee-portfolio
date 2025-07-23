import ScrollSpyNav from "../nav/ScrollSpyNav";

export default function PageWithScrollSpyLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen">
            <aside className="sticky top-24 hidden w-60 shrink-0 border-r border-gray-200 p-6 lg:block">
                <ScrollSpyNav />
            </aside>

            <main className="flex-grow p-6">{children}</main>
        </div>
    )
}
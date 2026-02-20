import SnsIcons from '@/components/nav/SnsIcons'

export default function ProfileHeader() {
    return (
        <div className="mb-10">
            <div className="flex items-start gap-3">
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                        src="/profile.jpg"
                        alt="Heechan Cho"
                        className="w-full h-full object-cover object-[center_15%]"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                </div>
                <div>
                    <h1 className="text-sm font-semibold">Heechan Cho (Damon)</h1>
                    <p className="text-sm text-gray-500">Seoul, South Korea</p>
                    <div className="mt-2">
                        <SnsIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}

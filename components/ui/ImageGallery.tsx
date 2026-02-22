import { useState, useEffect } from 'react'

interface Props {
    images: string[]
}

export default function ImageGallery({ images }: Props) {
    const [lightbox, setLightbox] = useState<string | null>(null)

    useEffect(() => {
        if (!lightbox) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightbox(null)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [lightbox])

    if (images.length === 0) return null

    return (
        <>
            <div className="flex gap-2 mt-3">
                {images.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => setLightbox(src)}
                        className="w-24 h-16 rounded bg-gray-200 flex-shrink-0 overflow-hidden hover:opacity-80 transition-opacity cursor-zoom-in"
                    >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {lightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={() => setLightbox(null)}
                >
                    <img
                        src={lightbox}
                        alt=""
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    )
}

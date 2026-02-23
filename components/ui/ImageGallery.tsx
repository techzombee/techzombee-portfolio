import { useState, useEffect } from 'react'

interface Props {
    images: string[]
    captions?: string[]
}

export default function ImageGallery({ images, captions = [] }: Props) {
    const [index, setIndex] = useState<number | null>(null)
    const hasMany = images.length > 1

    useEffect(() => {
        if (index === null) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIndex(null)
            if (e.key === 'ArrowLeft') setIndex(i => (i !== null && i > 0 ? i - 1 : i))
            if (e.key === 'ArrowRight') setIndex(i => (i !== null && i < images.length - 1 ? i + 1 : i))
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [index, images.length])

    if (images.length === 0) return null

    return (
        <>
            <div className="flex gap-2 mt-3">
                {images.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className="w-24 h-16 rounded bg-gray-200 flex-shrink-0 overflow-hidden hover:opacity-80 transition-opacity cursor-zoom-in"
                    >
                        <img src={src} alt="" className="w-full h-full object-fill" />
                    </button>
                ))}
            </div>

            {index !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={() => setIndex(null)}
                >
                    {/* Prev arrow column — always present to keep card centered */}
                    <div className="w-10 sm:w-16 flex-shrink-0 flex justify-center">
                        {index > 0 && (
                            <button
                                onClick={e => { e.stopPropagation(); setIndex(index - 1) }}
                                className="text-white text-5xl hover:opacity-60 transition-opacity"
                            >
                                ‹
                            </button>
                        )}
                    </div>

                    {/* Card */}
                    <div
                        className="flex flex-1 max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative flex-1 bg-black">
                            <img
                                src={images[index]}
                                alt=""
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </div>

                        {/* Info panel */}
                        <div className="w-1/3 bg-white border-l border-gray-200 flex flex-col p-4 text-sm">
                            <button
                                onClick={() => setIndex(null)}
                                className="self-end text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none"
                            >
                                ✕
                            </button>
                            {captions[index] && (
                                <p className="mt-4 text-gray-700">{captions[index]}</p>
                            )}
                            {hasMany && (
                                <p className="mt-auto text-gray-400 text-xs">{index + 1} / {images.length}</p>
                            )}
                        </div>
                    </div>

                    {/* Next arrow column — always present to keep card centered */}
                    <div className="w-10 sm:w-16 flex-shrink-0 flex justify-center">
                        {index < images.length - 1 && (
                            <button
                                onClick={e => { e.stopPropagation(); setIndex(index + 1) }}
                                className="text-white text-5xl hover:opacity-60 transition-opacity"
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

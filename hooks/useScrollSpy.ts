import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 0) {
    const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
    const intersectingMap = useRef<Map<string, boolean>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    if (id) intersectingMap.current.set(id, entry.isIntersecting);
                });

                // Pick the topmost intersecting section by iterating ids in DOM order
                const topmost = ids.find((id) => intersectingMap.current.get(id));
                if (topmost) setActiveId(topmost);
            },
            {
                root: null,
                rootMargin: `-${offset}px 0px -50% 0px`,
                threshold: 0,
            }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ids, offset]);

    return activeId;
}
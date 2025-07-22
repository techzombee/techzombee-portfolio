import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 0) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: `-${offset}px 0px -80% 0px`,
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        setActiveId(id);
                        break;
                    }
                }
            }
        }, observerOptions);

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [ids, offset]);

    return activeId
}
import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { routes } from '../const';

export const useActiveLink = () => {
    const { scrollY } = useScroll();
    const [activeLink, setActiveLink] = useState(0);
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", () => {
        routes.forEach((route) => {
            const section = document.getElementById(route.name.toLowerCase());
            if (section) {
                const rect = section.getBoundingClientRect();
                const threshold = window.innerHeight * 0.2; // Ajusta según sea necesario

                if (rect.top <= threshold && rect.bottom >= -threshold) {
                    setActiveLink(route.href);
                }
            }
        });
    });

    useEffect(() => {
        const currentPath = location.pathname + location.hash;
        setActiveLink(currentPath);

        const scrollToTarget = (hash) => {
            const target = document.getElementById(hash.replace('#', ''));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        };

        if (location.hash) {
            scrollToTarget(location.hash);
        }
    }, [location]);

    return [activeLink];
};

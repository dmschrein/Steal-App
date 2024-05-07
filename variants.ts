// variants.ts
import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'left' | 'right' | 'down', duration: number = 0.3): Variants => {
    const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
    const y = direction === 'up' ? -100 : direction === 'down' ? 100 : 0;

    return {
        hidden: { opacity: 0, x, y },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                ease: "easeInOut"
            }
        },
    };
};


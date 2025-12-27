'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    delay?: number;
    x?: number;
}

export default function ClientMotionWrapper({ children, delay = 0, x = 0 }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
}

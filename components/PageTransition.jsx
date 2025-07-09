"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ childeren }) => {
    const pathname = usePathname();
    return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: {
                        delay: 1, duration: 0.4, ease: "easeInOut"
                    },
                }}
                className="h-screen w-screen fixed bg-[#1c1c22] top-0 pointer-events-none"
            />
            {childeren}
        </div>
    </AnimatePresence>
    );
};

export default PageTransition;
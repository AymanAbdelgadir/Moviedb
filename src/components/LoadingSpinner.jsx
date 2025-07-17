import React from "react";
import { motion } from "framer-motion";

// Variants for the parent container
const ballContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2,
            repeat: Infinity,
            repeatType: "loop",
        },
    },
};

// Variants for each ball
const ball = {
    initial: { y: "0%" },
    animate: {
        y: ["0%", "-100%", "0%"],
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

const LoadingSpinner = () => {
    return (
        <motion.div
            className="flex justify-center items-center min-h-screen gap-8 bg-gray-100"
            variants={ballContainer}
            initial="initial"
            animate="animate"
        >
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="w-8 h-8 bg-blue-500 rounded-full"
                    variants={ball}
                />
            ))}
        </motion.div>
    );
};

export default LoadingSpinner;

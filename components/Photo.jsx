"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeInOut" }
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full shadow-lg overflow-hidden flex items-center justify-center relative"
            >
                {/* Image */}
                <div className="relative w-[288px] h-[288px] xl:w-[488px] xl:h-[488px]">
                    <Image
                        src="/assets/withcz.png"
                        priority
                        quality={100}
                        layout="fill"
                        alt="Description"
                        className="object-cover rounded-full"
                    />
                </div>

                {/* Animated Circle */}
                <motion.svg
                    className="absolute top-0 left-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="250"
                        cy="250"
                        r="250"
                        stroke="#00ff99"  // Green color for animation
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
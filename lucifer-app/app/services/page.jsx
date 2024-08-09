"use client"

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Backend Development',
        description: 'Backend development handles the server-side logic, databases, and integrations, ensuring that the application functions correctly and efficiently behind the scenes.',
        href: "/backend"
    },
    {
        num: '02',
        title: 'Frontend Development',
        description: 'Frontend development focuses on creating the user interface and experience of a website or application, making it visually appealing and interactive.',
        href: "/frontend"
    },
    {
        num: '03',
        title: 'Full-Stack Development',
        description: 'Full-stack development combines both frontend and backend skills, allowing a developer to build and manage both the user-facing and server-side aspects of an application.',
        href: "/fullstack"
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent
                                group-hover:text-accent transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group-hover:bg-accent transition-all duration-500 hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl group-hover:text-white transition-all duration-500" />
                                </Link>
                            </div>
                            {/* Title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            {/* Description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* Border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
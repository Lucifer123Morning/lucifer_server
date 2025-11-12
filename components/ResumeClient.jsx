'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.jsx';

const about = {
    title: 'About me',
    description: "I'm a software engineer developer",
    info: [
        { fieldName: "Name", fieldValue: "Dmitro Listopadov" },
        { fieldName: "Phone", fieldValue: "(+380982032942)" },
        { fieldName: "Experience", fieldValue: "12+ Years" },
        { fieldName: "Discord", fieldValue: "666_lucifer_666_" },
        { fieldName: "Nationality", fieldValue: "Ukraine" },
        { fieldName: "Email", fieldValue: "listopadov2744@gmail.com" },
        { fieldName: "Freelance", fieldValue: "@dmitro_l" },
        { fieldName: "Languages", fieldValue: "English, Ukraine" },
    ],
};

const experience = {
    title: "My experience",
    description: "I'm a software engineer developer",
    items: [
        { company: "---", position: "Full Stack Developer", duration: '2024' },
        { company: "---", position: "Back-end Developer", duration: 'winter 2023' },
        { company: "---", position: "Front-end Developer", duration: 'summer 2024' },
        { company: "---", position: "Freelance Developer", duration: '2024' },
    ],
};

const education = {
    title: "My education",
    description: "I'm a software engineer developer",
    items: [
        { institution: "www.boot.dev", url: "https://www.boot.dev", degree: "Back-end Developer", duration: '2023' },
        { institution: "www.codecademy.com", url: "https://www.codecademy.com", degree: "Back-end Developer", duration: '2024' },
        { institution: "www.codecademy.com", url: "https://www.codecademy.com", degree: "Front-end Developer", duration: '2024' },
        { institution: "www.codecademy.com", url: "https://www.codecademy.com", degree: "FullStack Developer", duration: '2024' },
    ],
};

const skills = {
    title: "My skills",
    description: "I'm a software engineer developer",
    skills: [
        { icon: <FaHtml5 />, name: 'html5' },
        { icon: <FaCss3 />, name: 'css 3' },
        { icon: <FaJs />, name: 'javascript' },
        { icon: <FaReact />, name: 'react.js' },
        { icon: <SiNextdotjs />, name: 'next.js' },
        { icon: <SiTypescript />, name: 'typescript' },
        { icon: <FaNodeJs />, name: 'node.js' },
    ],
};

export default function ResumeClient() {
    const [activeTab, setActiveTab] = useState('experience');
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const inner = (
        <div className="container mx-auto px-6">
            <Tabs
                defaultValue="experience"
                className="relative flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between gap-[60px] xl:gap-[100px] min-h-screen"
                onValueChange={(v) => setActiveTab(v)}
            >
                {/* Sidebar: смещён вниз, имеет больший z-index, больше статичности (убран scale) */}
                <div
                    className="hidden xl:flex flex-col items-center justify-center w-[240px] h-screen sticky top-1/2 -translate-y-1/2">
                    <TabsList
                        className="flex flex-col items-center justify-center gap-4 w-full bg-transparent border-none p-0">
                        {[
                            {value: "experience", label: "Experience"},
                            {value: "education", label: "Education"},
                            {value: "skills", label: "Skills"},
                            {value: "about", label: "About me"},
                        ].map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className={`mx-auto block min-w-[150px] max-w-[220px] text-center text-sm font-medium py-2.5 px-5 rounded-full border-l-4 transition-all duration-300
                                ${activeTab === tab.value
                                    ? "border-accent text-accent bg-white/95 text-black shadow-[0_6px_18px_rgba(0,255,150,0.12)]"
                                    : "border-transparent text-white/70 hover:text-accent hover:bg-primary/30"}
                                `}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {/* Right content */}
                <div className="flex-1 space-y-12 relative z-10 xl:-mt-12">
                    {/* Experience */}
                    <TabsContent value="experience">
                        <Section title={experience.title} desc={experience.description}>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {experience.items.map((item, i) => (
                                    <li key={i}
                                        className="bg-bg-primary border-l-4 border-accent rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl font-semibold mt-2">{item.position}</h3>
                                        <p className="text-white/60">{item.company}</p>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    </TabsContent>

                    {/* Education */}
                    <TabsContent value="education">
                        <Section title={education.title} desc={education.description}>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {education.items.map((item, i) => (
                                    <li key={i}
                                        className="bg-bg-primary border-l-4 border-accent rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                        <span className="text-accent">{item.degree}</span>
                                        <h3 className="text-xl mt-2">{item.duration}</h3>
                                        <p className="text-white/60">{item.institution}</p>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    </TabsContent>

                    {/* Skills */}
                    <TabsContent value="skills">
                        <Section title={skills.title} desc={skills.description}>
                            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                                {skills.skills.map((item, i) => (
                                    <TooltipProvider key={i} delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="h-[100px] bg-bg-primary border border-border-primary rounded-xl flex justify-center items-center group hover:border-accent transition-all">
                        <span className="text-3xl text-white/80 group-hover:text-accent transition-colors">
                          {item.icon}
                        </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </ul>
                        </Section>
                    </TabsContent>

                    {/* About */}
                    <TabsContent value="about">
                        <Section title={about.title} desc={about.description}>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                {about.info.map((item, i) => (
                                    <li key={i}
                                        className="bg-bg-primary border border-border-primary p-6 rounded-xl hover:border-accent transition-colors">
                                        <p className="text-accent font-semibold">{item.fieldName}</p>
                                        <p className="text-white">{item.fieldValue}</p>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );

    return mounted ? (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 0.4, duration: 0.6, ease: 'easeInOut'}}}
            className="py-12"
        >
            {inner}
        </motion.div>
    ) : <div>{inner}</div>;
}

// ✨ Дополнительный компонент для секций
function Section({title, desc, children}) {
    return (
        <div className="flex flex-col gap-6 text-center xl:text-left">
            <h3 className="text-3xl font-bold text-accent">{title}</h3>
            <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">{desc}</p>
            {children}
        </div>
    );
}
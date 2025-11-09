// javascript
'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.jsx';
import { ScrollArea } from './ui/scroll-area';

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
    icon: '/assets/resume/badge.svg',
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
    icon: '/assets/resume/cap.svg',
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
        { icon: <FaHtml5/>, name: 'html5' },
        { icon: <FaCss3/>, name: 'css 3' },
        { icon: <FaJs/>, name: 'javascript' },
        { icon: <FaReact/>, name: 'react.js' },
        { icon: <SiNextdotjs/>, name: 'next.js' },
        { icon: <SiTypescript/>, name: 'typescript.js' },
        { icon: <FaNodeJs/>, name: 'node.js' },
    ],
};

export default function ResumeClient() {
    const [activeTab, setActiveTab] = useState('experience');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const inner = (
        <div className="container mx-auto">
            <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between gap-[60px] xl:gap-[100px] min-h-screen"
                onValueChange={(v) => setActiveTab(v)}
            >
                {/* Левая колонка */}
                <div className="flex flex-col items-center justify-center w-full xl:w-[240px] h-auto xl:h-screen sticky top-0">
                    <TabsList className="flex flex-col items-stretch justify-center gap-4 w-full bg-transparent border-none p-0">
                        {[
                            { value: "experience", label: "Experience" },
                            { value: "education", label: "Education" },
                            { value: "skills", label: "Skills" },
                            { value: "about", label: "About me" },
                        ].map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className={`w-full text-left text-base font-semibold py-3 px-5 rounded-lg border-l-4 transition-all duration-300 ${
                                    activeTab === tab.value
                                        ? "border-accent text-accent bg-primary shadow-[0_0_10px_rgba(0,255,150,0.25)]"
                                        : "border-transparent text-white/80 hover:text-accent"
                                }`}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <div className="flex-1">
                    <TabsContent value='experience' className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <div className="max-h-[400px] overflow-auto">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="bg-bg-primary h-[184px] py-6 px-10 rounded-xl border-l-4 border-accent flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                                        >
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"
                                               className="w-full h-full block">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left truncate">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"/>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value='education' className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            <div className="max-h-[400px] overflow-auto">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="bg-bg-primary h-[184px] py-6 px-10 rounded-xl border-l-4 border-accent flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                                        >
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"
                                               className="w-full h-full block">
                                                <span className="text-accent">{item.degree}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left truncate">
                                                    {item.duration}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"/>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value='skills' className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skills.map((item, index) => (
                                    <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="w-full h-[150px] bg-bg-primary border border-border-primary rounded-xl flex justify-center items-center group overflow-hidden">
                                                    <span
                                                        className="text-2xl group-hover:text-accent transition-all duration-300">
                                                        {item.icon}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{item.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>

                    <TabsContent value='about' className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-8 xl:gap-12">
                            <h3 className="text-4xl font-bold text-gradient bg-clip-text text-transparent">{about.title}</h3>
                            <p className="max-w-2xl text-white/80 mx-auto xl:mx-0 break-words">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-3xl mx-auto xl:mx-0">
                                {about.info.map((item, index) => (
                                    <li key={index}
                                        className="flex flex-col gap-4 items-start border border-border-primary p-6 rounded-xl bg-bg-primary shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full break-words">
                                        <span className="text-white/90 font-semibold text-lg">{item.fieldName}:</span>
                                        <span className="text-xl text-white break-words">{item.fieldValue}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );

    return mounted ? (
        <motion.div
            initial={{opacity: 0}}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex items-start justify-start py-12 xl:py-0"
        >
            {inner}
        </motion.div>
    ) : (
        <div className="min-h-[80vh] flex items-start justify-start py-12 xl:py-0">
            {inner}
        </div>
    );
}

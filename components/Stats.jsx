"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const calculateYearsOfExperience = (startYear = 2019) => {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - startYear;
    return experience < 0 ? 0 : experience; // защита от ошибок
};

export const Stats = () => {
    const [years, setYears] = useState(0);

    useEffect(() => {
        // при монтировании вычисляем опыт
        setYears(calculateYearsOfExperience(2024));
    }, []);

    const stats = [
        {
            num: years,
            text: "Years of experience",
        },
        {
            num: 8,
            text: "Projects completed",
        },
        {
            num: 7,
            text: "Technologies mastered",
        },
        {
            num: 500,
            text: "Code commits",
        },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-8 justify-center max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                        >
                            <div className="relative flex flex-col items-center">
                                <CountUp
                                    end={item.num}
                                    duration={2.5}
                                    delay={0.5}
                                    className="text-4xl xl:text-6xl font-extrabold text-accent"
                                />
                                <p className="text-white/80 text-sm mt-2 text-center">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
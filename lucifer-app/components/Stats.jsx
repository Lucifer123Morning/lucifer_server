"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const calculateYearsOfExperience = () => {
    const startYear = 2019; // Замените на год начала вашего опыта
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
};

const Stats = () => {
    const [years, setYears] = useState(calculateYearsOfExperience());

    useEffect(() => {
        setYears(calculateYearsOfExperience());
    }, []);

    const stats = [
        {
            num: years,
            text: "Years of experience",
        },
        {
            num: 26,
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
                            <div className="relative">
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold countup-animation"
                                />
                                {item.text === "Years of experience" && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="countup-circle"></div>
                                    </div>
                                )}
                            </div>
                            <p className={`max-w-[${item.text.length < 15 ? "100px" : "150px"}]`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Stats };

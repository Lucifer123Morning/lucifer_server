"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "home", path: '/', icon: '/zen.png' },
    { name: "services", path: '/services', icon: '/ser.png' },
    { name: "resume", path: '/resume', icon: '/zen.png' },
    { name: "work", path: '/work', icon: '/spider.png' },
    { name: "contact", path: '/contact.png', icon: './contact.png'},
    { name: "music", path: '/music', icon: './mus.png' },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl"></div>

                <Link href="/public" className="flex items-center justify-center mb-8">
                    <img
                        src="/bird.png"
                        alt="Lucifer Logo"
                        className="w-8 h-8 mr-2 border-2 border-white rounded-full shadow-lg"
                    />
                    <h1 className="text-4xl font-semibold">
                        Lucifer<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        const isActive = link.path === pathname;
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`text-xl capitalize hover:text-accent transition-all flex items-center gap-2 ${
                                    isActive ? "text-accent border-b-2 border-accent" : "text-white"
                                }`}
                            >
                                <img
                                    src={link.icon || '/default-icon.png'} // Use a default image if `link.icon` is missing or incorrect
                                    alt={`${link.name} icon`}
                                    className="w-8 h-8 object-contain rounded-full border-2 border-white"
                                    style={{ filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))' }}
                                />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

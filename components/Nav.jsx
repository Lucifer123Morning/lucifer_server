"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "home", path: '/', icon: './zen.png' },
    { name: "services", path: '/services', icon: './ser.png' },
    { name: "resume", path: '/resume', icon: './zen.png' },
    { name: "work", path: '/work', icon: './spider.png' },
    { name: "contact", path: '/contact', icon: './contact.png' },
    { name: "music", path: '/music', icon: './mus.png' },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize font-medium transition-all flex items-center gap-2 hover:text-accent ${
                            isActive
                                ? "text-accent border-b-2 border-accent pb-1"
                                : "text-white"
                        }`}
                    >
                        <img
                            src={link.icon}
                            alt={`${link.name} icon`}
                            className="w-8 h-8 object-contain rounded-full border-2 border-white"
                            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))' }}
                        />
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
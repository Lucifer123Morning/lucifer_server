import Link from 'next/link';
import { Button } from "./ui/button";
import Head from 'next/head';

// components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <>
            <header className="py-8 xl:py-12 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold flex items-center">
                            <img
                                src="/bird.png"
                                alt="Lucifer Logo"
                                className="w-8 h-8 mr-2 border-2 border-white rounded-full shadow-lg"
                            />
                            Lucifer<span className="text-accent">.</span>
                        </h1>
                    </Link>

                    {/* desktop nav & hire me button */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link href="/contact">
                            <Button>Hire me</Button>
                        </Link>
                    </div>

                    {/* mobile nav */}
                    <div className="xl:hidden">
                        <MobileNav />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
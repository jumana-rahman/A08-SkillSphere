"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { 
            name: "Home", 
            path: "/" 
        },
        { 
            name: "Courses", 
            path: "/courses" 
        },
        { 
            name: "My Profile", 
            path: "/profile" 
        },
    ];

    return (
        <div className="border-b px-4 md:px-6 lg:px-8">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={40}
                        height={40}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-2xl md:text-3xl text-purple-700">
                        SkillSphere
                    </h3>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">

                    <ul className="flex items-center gap-5 text-md font-medium text-gray-700">

                        {navLinks.map((link) => (
                            <li
                                key={link.path}
                                className={`transition-all duration-300 border-b-2 pb-1 ${
                                    pathname === link.path
                                        ? "text-purple-700 border-purple-700"
                                        : "border-transparent hover:text-purple-700"
                                }`}
                            >
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        ))}

                    </ul>
                </div>

                {/* Buttons */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center text-md gap-3 font-medium text-gray-700">
                        <li className="py-2 px-3 rounded-md border border-gray-700 transition-all duration-300 hover:bg-purple-700 hover:text-white">
                            <Link href={"/login"}>Login</Link>
                        </li>

                        <li className="bg-purple-700 border border-purple-700 text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-purple-900">
                            <Link href={"/register"}>Register</Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-3xl text-black"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile & Tablet Menu */}
            {menuOpen && (
                <div className="lg:hidden pb-4">
                    <ul className="flex flex-col gap-4 text-md font-medium text-gray-700 items-center">

                        {navLinks.map((link) => (
                            <li
                                key={link.path}
                                className={`transition-all duration-300 border-b-2 pb-1 w-fit ${
                                    pathname === link.path
                                        ? "text-purple-700 border-purple-700"
                                        : "border-transparent hover:text-purple-700"
                                }`}
                            >
                                <Link
                                    href={link.path}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        <li className="py-2 px-3 rounded-md border border-gray-700 transition-all duration-300 hover:bg-purple-700 hover:text-white w-full text-center">
                            <Link href={"/login"} onClick={() => setMenuOpen(false)}>
                                Login
                            </Link>
                        </li>

                        <li className="bg-purple-700 border border-purple-700 text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-purple-900 w-full text-center">
                            <Link href={"/register"} onClick={() => setMenuOpen(false)}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
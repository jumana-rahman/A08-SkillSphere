"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        
        toast.success("Logged out!");

        router.push("/login");
    }

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
        <div className="sticky top-0 z-50 border-b px-4 bg-white/90 backdrop-blur-xl md:px-6 lg:px-8">
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
                    { !user && <ul className="flex items-center text-md gap-3 font-medium text-gray-700">
                        <li className="py-2 px-3 rounded-md border border-gray-700 transition-all duration-300 hover:bg-purple-700 hover:text-white">
                            <Link href={"/login"}>Login</Link>
                        </li>

                        <li className="bg-purple-700 border border-purple-700 text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-purple-900">
                            <Link href={"/register"}>Register</Link>
                        </li>
                    </ul> }

                    {
                        user && <div className="hidden lg:flex items-center gap-3">
                            <Avatar>
                                <Avatar.Image 
                                alt="John Doe" 
                                src={user?.image} 
                                referrerPolicy="no-referrer"
                                />

                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>

                            <Button onClick={handleSignOut} className="bg-purple-700 border border-purple-700 text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-purple-900">
                                Logout <FiLogOut />
                            </Button>
                        </div>

                    }
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

                        { !user && <ul>
                                <li className="py-2 px-3 rounded-md border border-gray-700 transition-all duration-300 hover:bg-purple-700 hover:text-white w-full text-center mb-2">
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
                        }

                        {
                            user && <div className="flex flex-col justify-center items-center gap-2">
                                <Avatar>
                                    <Avatar.Image 
                                    alt="John Doe" 
                                    src={user?.image} 
                                    referrerPolicy="no-referrer"
                                    />

                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>

                                <Button onClick={handleSignOut} className="bg-purple-700 border border-purple-700 text-white py-2 px-3 rounded-md transition-all duration-300 hover:bg-purple-900">
                                    Logout <FiLogOut />
                                </Button>
                            </div>
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
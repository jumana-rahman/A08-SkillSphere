"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-purple-700 text-white px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-between gap-10">

                {/* Logo & Description */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="w-auto h-auto"
                        />

                        <h2 className="text-2xl font-black">
                            SkillSphere
                        </h2>
                    </div>

                    <p className="text-sm text-gray-200 leading-6">
                        Upgrade your skills with industry-leading courses and
                        learn from expert instructors anytime, anywhere.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-4">
                        Contact Info
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-200">
                        <li>Email: support@skillsphere.com</li>
                        <li>Phone: +880 1234-567890</li>
                        <li>Location: Garib-E-Nawaz Ave, Sector-12, Uttara, Dhaka-1230, Bangladesh</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-200">
                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-white transition-all duration-300"
                            >
                                Terms & Conditions
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/privacy"
                                className="hover:text-white transition-all duration-300"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">
                        Follow Us
                    </h3>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300"
                        >
                            <FaFacebookF />
                        </Link>

                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300"
                        >
                            <FaLinkedinIn />
                        </Link>

                        <Link
                            href="https://youtube.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-purple-700 transition-all duration-300"
                        >
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-purple-500 py-4 text-center text-sm text-gray-200">
                © {new Date().getFullYear()} SkillSphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
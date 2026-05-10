"use client";

import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import {
    FaEnvelope,
    FaUserGraduate,
    FaPenFancy,
    FaBookOpen,
    FaCertificate,
    FaClock,
} from "react-icons/fa";

const MyProfile = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <section className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 py-14 px-4 md:px-6 lg:px-8 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-400/20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}
                <div className="text-center">

                    <div className="relative inline-block overflow-hidden">

                        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 py-2 bg-clip-text text-transparent">
                            {user?.name}&apos;s Profile
                        </h1>

                        {/* Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                    </div>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
                        Manage your account information and track your learning
                        progress with SkillSphere.
                    </p>

                </div>

                {/* Main Card */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-1">

                        <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-[2rem] shadow-2xl overflow-hidden">

                            {/* Top Gradient */}
                            <div className="h-36 bg-gradient-to-r from-purple-800 via-fuchsia-700 to-indigo-700"></div>

                            {/* Profile Image */}
                            <div className="relative flex justify-center">

                                <div className="-mt-20 border-8 border-white rounded-full shadow-xl overflow-hidden">

                                    <Image
                                        src={user?.image || "/default-user.png"}
                                        alt={user?.name || "User"}
                                        width={160}
                                        height={160}
                                        className="w-40 h-40 object-cover"
                                    />

                                </div>

                            </div>

                            {/* User Info */}
                            <div className="px-8 pb-10 text-center">

                                <h2 className="mt-6 text-3xl font-black text-gray-900">
                                    {user?.name || "SkillSphere User"}
                                </h2>

                                <div className="mt-4 flex items-center justify-center gap-3 text-gray-600">

                                    <FaEnvelope className="text-purple-700" />

                                    <p className="text-sm break-all">
                                        {user?.email}
                                    </p>

                                </div>

                                {/* Role Badge */}
                                <div className="mt-6 inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-5 py-2 rounded-full font-semibold text-sm">

                                    <FaUserGraduate />

                                    Active Learner

                                </div>

                                {/* Update Button */}
                                <Link
                                    href="/profile/update-profile"
                                    className="mt-8 inline-flex items-center justify-center gap-3 w-full bg-purple-700 text-white font-semibold h-14 rounded-2xl hover:bg-purple-800 transition-all duration-300"
                                >

                                    <FaPenFancy />

                                    Update Profile

                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Learning Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="bg-white border border-purple-100 rounded-[2rem] shadow-lg p-8 text-center">

                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white flex items-center justify-center text-2xl">
                                    <FaBookOpen />
                                </div>

                                <h3 className="mt-5 text-4xl font-black text-purple-900">
                                    12
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Courses Enrolled
                                </p>

                            </div>

                            <div className="bg-white border border-purple-100 rounded-[2rem] shadow-lg p-8 text-center">

                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white flex items-center justify-center text-2xl">
                                    <FaClock />
                                </div>

                                <h3 className="mt-5 text-4xl font-black text-purple-900">
                                    84h
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Learning Hours
                                </p>

                            </div>

                            <div className="bg-white border border-purple-100 rounded-[2rem] shadow-lg p-8 text-center">

                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white flex items-center justify-center text-2xl">
                                    <FaCertificate />
                                </div>

                                <h3 className="mt-5 text-4xl font-black text-purple-900">
                                    5
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Certificates Earned
                                </p>

                            </div>

                        </div>

                        {/* About Card */}
                        <div className="bg-white border border-purple-100 rounded-[2rem] shadow-lg p-8 md:p-10">

                            <h3 className="text-3xl font-black text-purple-900">
                                About Learner
                            </h3>

                            <p className="mt-6 text-gray-600 leading-8">
                                Passionate about learning modern technologies,
                                improving practical skills, and building
                                real-world projects through immersive online
                                education experiences at SkillSphere.
                            </p>

                        </div>

                        {/* Skills */}
                        <div className="bg-white border border-purple-100 rounded-[2rem] shadow-lg p-8 md:p-10">

                            <h3 className="text-3xl font-black text-purple-900">
                                Skills & Interests
                            </h3>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <span className="px-5 py-3 rounded-full bg-purple-100 text-purple-800 font-semibold">
                                    Web Development
                                </span>

                                <span className="px-5 py-3 rounded-full bg-purple-100 text-purple-800 font-semibold">
                                    UI/UX Design
                                </span>

                                <span className="px-5 py-3 rounded-full bg-purple-100 text-purple-800 font-semibold">
                                    React.js
                                </span>

                                <span className="px-5 py-3 rounded-full bg-purple-100 text-purple-800 font-semibold">
                                    Next.js
                                </span>

                                <span className="px-5 py-3 rounded-full bg-purple-100 text-purple-800 font-semibold">
                                    MongoDB
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Shine Animation */}
            <style jsx>{`
                @keyframes shine {
                    0% {
                        left: -120%;
                    }

                    100% {
                        left: 150%;
                    }
                }

                .animate-shine {
                    animation: shine 3s linear infinite;
                }
            `}</style>

        </section>
    );
};

export default MyProfile;
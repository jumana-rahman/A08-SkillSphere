"use client";

import {
    FaImage,
    FaUserAlt,
    FaArrowLeft,
    FaPenFancy,
} from "react-icons/fa";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        try {

        const { data, error } = await authClient.updateUser({
            name,
            image,
        });

        if (error) {
            toast.error(error.message || "Update failed!");
            return;
        }

        toast.success("Profile updated successfully!");

        } catch (err) {
            toast.error("Something went wrong!");
        }
    }
    return (
        <section className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 py-14 px-4 md:px-6 lg:px-8 overflow-hidden relative">

            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-400/20 blur-3xl rounded-full"></div>

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Back Button */}
                <Link
                    href="/profile"
                    className="inline-flex items-center gap-3 text-purple-800 font-semibold mb-8 hover:text-purple-950 transition-all duration-300"
                >
                    <FaArrowLeft />
                    Back to Profile
                </Link>

                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-[2.5rem] shadow-2xl overflow-hidden">

                    {/* Top Gradient */}
                    <div className="h-40 bg-gradient-to-r from-purple-800 via-fuchsia-700 to-indigo-700 relative">

                        {/* Floating Icon */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center text-4xl text-purple-700 border-8 border-white">

                            <FaPenFancy />

                        </div>

                    </div>

                    {/* Content */}
                    <div className="px-6 md:px-10 pt-20 pb-10">

                        {/* Heading */}
                        <div className="text-center">

                            <div className="relative inline-block overflow-hidden">

                                <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 py-2 bg-clip-text text-transparent">
                                    Update Profile
                                </h1>

                                {/* Shine Effect */}
                                <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                            </div>

                            <p className="mt-5 text-gray-600 max-w-xl mx-auto leading-7">
                                Personalize your SkillSphere account by updating
                                your profile information.
                            </p>

                        </div>

                        {/* Form */}
                        <form onSubmit={onSubmit} className="mt-12 space-y-8">

                            {/* Name */}
                            <div>

                                <label className="text-gray-800 font-semibold flex items-center gap-3 mb-3">

                                    <FaUserAlt className="text-purple-700" />

                                    Full Name

                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="w-full h-14 px-5 rounded-2xl border border-purple-200 bg-white outline-none focus:border-purple-700 shadow-sm text-gray-700"
                                />

                            </div>

                            {/* Image URL */}
                            <div>

                                <label className="text-gray-800 font-semibold flex items-center gap-3 mb-3">

                                    <FaImage className="text-purple-700" />

                                    Image URL

                                </label>

                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Enter your image URL"
                                    className="w-full h-14 px-5 rounded-2xl border border-purple-200 bg-white outline-none focus:border-purple-700 shadow-sm text-gray-700"
                                />

                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-purple-700 via-fuchsia-700 to-indigo-700 text-white font-bold text-lg shadow-lg hover:scale-[1.01] transition-all duration-300"
                            >
                                Update Information
                            </button>

                        </form>

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

export default UpdateProfilePage;
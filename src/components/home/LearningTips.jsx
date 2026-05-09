"use client";

import { Card } from "@heroui/react";
import { FaBrain, FaClock, FaBookOpen, FaLightbulb } from "react-icons/fa";

const tips = [
    {
        id: 1,
        icon: <FaBrain />,
        title: "Active Learning",
        description:
            "Practice by building projects, taking notes, and applying concepts instead of only watching tutorials.",
    },

    {
        id: 2,
        icon: <FaClock />,
        title: "Master Time Management",
        description:
            "Create a consistent study routine and break learning sessions into focused time blocks.",
    },

    {
        id: 3,
        icon: <FaBookOpen />,
        title: "Revision Strategy",
        description:
            "Revise topics regularly to improve long-term memory and strengthen your understanding.",
    },

    {
        id: 4,
        icon: <FaLightbulb />,
        title: "Learn Smart",
        description:
            "Focus on understanding concepts deeply rather than memorizing everything blindly.",
    },
];

const LearningTips = () => {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white overflow-hidden">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">

                <div className="relative inline-block overflow-hidden">
    
                        <h1 className="mt-5 text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent">
                            Learning Tips
                        </h1>

                        {/* Glass Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                </div>

                <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
                    Improve your learning journey with smart study techniques,
                    productivity hacks, and time management strategies.
                </p>
            </div>

            {/* Tips Grid */}
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {tips.map((tip) => (
                    <Card
                        key={tip.id}
                        className=" relative overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-lg"
                    >

                        {/* Glow Background */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 p-8">

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white flex items-center justify-center text-2xl shadow-lg">
                                {tip.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                {tip.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 text-gray-600 leading-7 text-sm">
                                {tip.description}
                            </p>

                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default LearningTips;
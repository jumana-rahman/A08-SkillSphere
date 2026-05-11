"use client";

import { FaBrain, FaClock, FaBookOpen, FaLightbulb } from "react-icons/fa";

const studyTips = [
    {
        icon: <FaBrain />,
        title: "Active Learning",
        desc: "Build projects instead of only watching tutorials.",
    },
    {
        icon: <FaBookOpen />,
        title: "Smart Revision",
        desc: "Revise regularly to strengthen memory retention.",
    },
];

const timeTips = [
    {
        icon: <FaClock />,
        title: "Pomodoro Technique",
        desc: "Study in 25-minute focused sessions with breaks.",
    },
    {
        icon: <FaLightbulb />,
        title: "Daily Planning",
        desc: "Plan tasks daily to stay consistent and productive.",
    },
];

const LearningTips = () => {
    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">

                <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent">
                    Learning Tips
                </h1>

                <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                    Improve your study habits with structured techniques and time management strategies.
                </p>

            </div>

            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Study Techniques */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">

                    <h2 className="text-2xl font-bold text-purple-700 mb-6">
                        📘 Study Techniques
                    </h2>

                    <div className="space-y-6">

                        {studyTips.map((tip, i) => (
                            <div key={i} className="flex gap-4">

                                <div className="text-purple-700 text-2xl mt-1">
                                    {tip.icon}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {tip.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        {tip.desc}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Time Management */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">

                    <h2 className="text-2xl font-bold text-fuchsia-700 mb-6">
                        ⏳ Time Management Tips
                    </h2>

                    <div className="space-y-6">

                        {timeTips.map((tip, i) => (
                            <div key={i} className="flex gap-4">

                                <div className="text-fuchsia-700 text-2xl mt-1">
                                    {tip.icon}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {tip.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        {tip.desc}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LearningTips;
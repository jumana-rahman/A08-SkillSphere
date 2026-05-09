import Image from "next/image";
import { FaClock, FaSignal, FaStar, FaBookOpen, FaPlayCircle, FaCertificate } from "react-icons/fa";

const curriculum = [
    "Introduction & Course Overview",
    "Fundamental Concepts & Setup",
    "Core Practical Learning",
    "Real-World Project Building",
    "Advanced Techniques & Optimization",
    "Deployment & Career Guidance",
];

const CourseDetails = ({ courses }) => {
    return (
        <section className="min-h-screen bg-purple-50 py-14 px-4 md:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* Category */}
                        <span className="inline-block bg-purple-100 text-purple-800 font-semibold px-5 py-2 rounded-full text-sm">
                            {courses.category}
                        </span>

                        {/* Title */}
                        <div className="relative inline-block overflow-hidden mt-5">

                            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent leading-tight">
                                {courses.title}
                            </h1>

                            {/* Shine */}
                            <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-gray-600 leading-8 text-lg">
                            {courses.description}
                        </p>

                        {/* Info Cards */}
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">

                            <div className="bg-white border border-purple-100 rounded-3xl p-5 shadow-md text-center">
                                <FaClock className="mx-auto text-purple-700 text-2xl" />
                                <p className="mt-3 text-sm text-gray-500">
                                    Duration
                                </p>
                                <h4 className="font-bold text-gray-800 mt-1">
                                    {courses.duration}
                                </h4>
                            </div>

                            <div className="bg-white border border-purple-100 rounded-3xl p-5 shadow-md text-center">
                                <FaSignal className="mx-auto text-purple-700 text-2xl" />
                                <p className="mt-3 text-sm text-gray-500">
                                    Level
                                </p>
                                <h4 className="font-bold text-gray-800 mt-1">
                                    {courses.level}
                                </h4>
                            </div>

                            <div className="bg-white border border-purple-100 rounded-3xl p-5 shadow-md text-center">
                                <FaStar className="mx-auto text-yellow-500 text-2xl" />
                                <p className="mt-3 text-sm text-gray-500">
                                    Rating
                                </p>
                                <h4 className="font-bold text-gray-800 mt-1">
                                    {courses.rating}
                                </h4>
                            </div>

                            <div className="bg-white border border-purple-100 rounded-3xl p-5 shadow-md text-center">
                                <FaCertificate className="mx-auto text-purple-700 text-2xl" />
                                <p className="mt-3 text-sm text-gray-500">
                                    Certificate
                                </p>
                                <h4 className="font-bold text-gray-800 mt-1">
                                    Included
                                </h4>
                            </div>

                        </div>

                        {/* Instructor */}
                        <div className="mt-10 bg-white border border-purple-100 rounded-3xl p-6 shadow-md">

                            <p className="text-gray-500 text-sm">
                                Course Instructor
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-purple-900">
                                {courses.instructor}
                            </h3>

                            <p className="mt-3 text-gray-600 leading-7">
                                Learn directly from an experienced mentor with
                                real-world industry knowledge and practical
                                teaching expertise.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute -top-10 -left-10 w-52 h-52 bg-purple-400/30 rounded-full blur-3xl"></div>

                        <div className="absolute bottom-0 right-0 w-60 h-60 bg-fuchsia-400/20 rounded-full blur-3xl"></div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-purple-100 shadow-2xl">

                            <Image
                                src={courses.image}
                                alt={courses.title}
                                width={800}
                                height={600}
                                className="w-full h-125 object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
                                <FaBookOpen className="text-purple-700 text-xl" />
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Enrolled Students
                                    </p>
                                    <h4 className="font-bold text-gray-800">
                                        12K+ Learners
                                    </h4>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Curriculum */}
                <div className="mt-20">

                    <div className="text-center">

                        <h2 className="text-4xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent">
                            Course Curriculum
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
                            A structured learning roadmap designed to help you
                            build practical skills step by step.
                        </p>

                    </div>

                    {/* Curriculum List */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {curriculum.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-purple-100 rounded-3xl p-6 shadow-md flex items-center gap-5"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-600 text-white flex items-center justify-center text-xl shrink-0">
                                    <FaPlayCircle />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Module {index + 1}
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                        {item}
                                    </h3>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CourseDetails;
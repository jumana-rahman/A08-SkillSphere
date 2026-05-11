import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaFire,
    FaClock,
    FaStar,
} from "react-icons/fa";

const releases = [
    {
        id: 1,
        title: "AI-Powered Web Development",
        category: "Development",
        duration: "18 Hours",
        rating: 4.9,
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },

    {
        id: 2,
        title: "Modern UI/UX Design Masterclass",
        category: "Design",
        duration: "14 Hours",
        rating: 4.8,
        image:
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    },

    {
        id: 3,
        title: "Digital Marketing Growth Hacks",
        category: "Marketing",
        duration: "12 Hours",
        rating: 4.7,
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
];

const NewReleases = () => {

    return (
        <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-400/20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}
                <div className="text-center">

                    <div className="relative inline-block overflow-hidden">

                        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 py-2 bg-clip-text text-transparent">
                            New Releases
                        </h1>

                        {/* Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                    </div>

                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
                        Explore our newest premium courses carefully crafted to
                        help you master the latest industry skills and trends.
                    </p>

                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {releases.map((course) => (

                        <div
                            key={course.id}
                            className="group relative bg-white border border-purple-100 rounded-[2rem] overflow-hidden shadow-xl"
                        >

                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">

                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                                {/* Badge */}
                                <div className="absolute top-5 left-5 bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">

                                    {course.category}

                                </div>

                            </div>

                            {/* Content */}
                            <div className="p-8">

                                <div className="flex items-center gap-6 text-sm text-gray-500">

                                    <div className="flex items-center gap-2">

                                        <FaClock className="text-purple-700" />

                                        {course.duration}

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <FaStar className="text-yellow-500" />

                                        {course.rating}

                                    </div>

                                </div>

                                <h2 className="mt-5 text-2xl font-black text-gray-900 leading-snug">
                                    {course.title}
                                </h2>

                                <Link
                                    href="/courses"
                                    className="mt-8 inline-flex items-center gap-3 text-purple-700 font-bold group/link"
                                >

                                    Explore Course

                                    <FaArrowRight className="group-hover/link:translate-x-1 transition-all duration-300" />

                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


        </section>
    );
};

export default NewReleases;
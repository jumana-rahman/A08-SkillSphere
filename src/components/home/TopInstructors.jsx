"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Card } from "@heroui/react";

import {
    FaUsers,
    FaBriefcase,
} from "react-icons/fa";

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const fetchInstructors = async () => {
            const res = await fetch(
                "https://a08-skill-sphere.vercel.app/instructors.json"
            );

            const data = await res.json();

            setInstructors(data);
        };

        fetchInstructors();
    }, []);

    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50 overflow-hidden">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">

                <span className="inline-block bg-purple-100 text-purple-800 font-semibold px-5 py-2 rounded-full text-sm">
                    Learn From Experts
                </span>

                <div className="relative inline-block overflow-hidden mt-5">

                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-800 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent relative z-10">
                        Top Instructors
                    </h2>

                    {/* Shine Effect */}
                    <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                </div>

                <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
                    Meet our experienced mentors helping thousands of students
                    build real-world skills and successful careers.
                </p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto mt-16">

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {instructors.map((instructor) => (
                        <SwiperSlide key={instructor.id}>

                            <Card className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">

                                {/* Image */}
                                <div className="relative overflow-hidden">

                                    <Image
                                        src={instructor.image}
                                        alt={instructor.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Floating Glow */}
                                    <div className="absolute top-5 right-5 w-24 h-24 bg-purple-500/30 blur-3xl rounded-full"></div>

                                </div>

                                {/* Content */}
                                <div className="p-7">

                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-800 transition-all duration-300">
                                        {instructor.name}
                                    </h3>

                                    <p className="mt-2 text-purple-700 font-semibold">
                                        {instructor.designation}
                                    </p>

                                    {/* Stats */}
                                    <div className="mt-6 space-y-3">

                                        <div className="flex items-center gap-3 text-gray-600">
                                            <FaBriefcase className="text-purple-700" />
                                            <span>{instructor.experience}</span>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-600">
                                            <FaUsers className="text-purple-700" />
                                            <span>{instructor.students}</span>
                                        </div>

                                    </div>

                                </div>

                            </Card>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    );
};

export default TopInstructors;
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { TypeAnimation } from "react-type-animation";

import Banner1 from "@/assets/banner1.avif"
import Banner2 from "@/assets/banner2.avif"
import Banner3 from "@/assets/banner3.avif"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const slides = [
    {
        id: 1,
        title: "Upgrade Your Skills Today",
        description:
            "Discover immersive online courses designed to help you grow faster and smarter.",
        image: Banner1.src,
            
    },

    {
        id: 2,
        title: "Learn From Industry Experts",
        description:
            "Master real-world skills with interactive lessons and expert mentorship.",
        image: Banner2.src,
    },

    {
        id: 3,
        title: "Shape Your Future With SkillSphere",
        description:
            "Explore development, design, marketing, and high-demand tech skills.",
        image: Banner3.src,
    },
];

const Banner = () => {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-[85vh]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/70"></div>

                            {/* Glow Effects */}
                            <div className="absolute top-20 left-10 w-52 h-52 bg-purple-500/30 blur-3xl rounded-full"></div>

                            <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

                            {/* Content */}
                            <div className="relative z-10 text-center px-4 max-w-4xl">
                                <TypeAnimation
                                sequence={[
                                    slide.title,
                                    2000,
                                    "",
                                    500,
                                ]}
                                wrapper="h1"
                                speed={50}
                                repeat={Infinity}
                                className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-lg"
                                />

                                <p className="mt-6 text-gray-300 text-base md:text-xl leading-8 max-w-2xl mx-auto">
                                    {slide.description}
                                </p>

                                {/* BUTTON */}
                                <div className="mt-8">
                                    <a
                                        href="/courses"
                                        className="inline-block bg-purple-700 hover:bg-purple-900 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg"
                                    >
                                        <span className="flex items-center gap-2">Learn More <FaArrowUpRightFromSquare /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import InstructorCard from "../ui/InstructorCard";

const InstructorSlider = ({ instructors }) => {
    return (
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
                    <InstructorCard instructor={instructor} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default InstructorSlider;
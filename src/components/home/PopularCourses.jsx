import { Card, Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import { FaStar } from 'react-icons/fa';

const PopularCourses = async () => {
    const res = await fetch('https://a08-skill-sphere.vercel.app/data.json')
    const data = await res.json();
    const topRated = [...data]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3);
    return (
        <div className='py-10 px-4 md:px-6 lg:px-8 bg-linear-to-b from-white to-purple-100'>
            <div className='max-w-7xl mx-auto text-center'>

                {/* Heading */}
                <div>
                    <span className="inline-block bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full text-sm">
                        Top Rated Learning Paths
                    </span>

                    <h1 className='mt-5 text-4xl md:text-5xl font-black text-gray-900'>Popular Courses🔥</h1>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
                        Explore the most loved courses chosen by thousands of learners
                        to level up their skills and careers.
                    </p>
                </div>
                
                {/* Cards */}
                <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topRated.map(course => 
                        <Card
                        key={course.id}
                        className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                        >

                            {/* Image */}
                            <div className="relative">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute top-4 right-4 bg-white text-purple-700 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                                    <FaStar className="text-yellow-500" />
                                    {course.rating}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                    {course.category}
                                </span>

                                <h3 className="text-xl font-bold group-hover:text-purple-700 transition-all">
                                    {course.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    Instructor:{" "}
                                    <span className="font-semibold text-gray-800">
                                        {course.instructor}
                                    </span>
                                </p>

                                <Link href={`/courses/${course.id}`}>
                                    <Button className="w-full mt-5 bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800">
                                        View Details
                                    </Button>
                                </Link>

                            </div>
                        </Card>
                
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;
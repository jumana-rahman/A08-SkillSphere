import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaBriefcase, FaUsers } from 'react-icons/fa6';

const InstructorCard = ({instructor}) => {
    return (
        <div>
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
        </div>
    );
};

export default InstructorCard;
import CoursesCard from '@/components/ui/CoursesCard';
import React from 'react';

export const metadata = {
  title: "SkillSphere | Courses",
};

const CoursesPage = async () => {
    const res = await fetch('https://a08-skill-sphere.vercel.app/data.json')
    const data = await res.json();
    return (
        <div className='py-10 px-4 md:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto text-center'>
                <div className="relative inline-block overflow-hidden">
    
                        <h1 className="mt-5 text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent">
                            All Courses
                        </h1>

                        {/* Glass Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                </div>

                <p className='mt-5 text-gray-600 max-w-2xl mx-auto leading-7'>Browse our complete collection of courses and start mastering in-demand skills today.</p>

                {/* Cards */}
                <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map(course => 
                        <CoursesCard key={course.id} course={course}/>
                
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
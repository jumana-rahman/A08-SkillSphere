import CoursesCard from '@/components/home/CoursesCard';
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
                <h1 className="mt-5 text-4xl md:text-5xl text-purple-900 font-bold">
                All Courses
                </h1>

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
import CourseDetails from '@/components/ui/CourseDetails';
import React from 'react';

const CoursesDetailsPage = async ({ params }) => {
    const {id} = await params;
    const res = await fetch('https://a08-skill-sphere.vercel.app/data.json')
    const data = await res.json();

    const courses = data.find(c => c.id == id);
    
    return (
        <div>
            <CourseDetails courses={courses}/>
        </div>
    );
};

export default CoursesDetailsPage;
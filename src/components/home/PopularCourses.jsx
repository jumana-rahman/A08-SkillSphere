import CoursesCard from "./CoursesCard";

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

                    <div className="relative inline-block overflow-hidden">
    
                        <h1 className="mt-5 text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent">
                            Popular Courses
                        </h1>

                        {/* Glass Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                    </div>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
                        Explore the most loved courses chosen by thousands of learners
                        to level up their skills and careers.
                    </p>
                </div>
                
                {/* Cards */}
                <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topRated.map(course => 
                        <CoursesCard key={course.id} course={course}/>
                
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;
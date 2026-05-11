import InstructorSlider from "./InstructorSlider";

const TopInstructors = async () => {

    const res = await fetch(
        "https://a08-skill-sphere.vercel.app/instructors.json"
    );

    const instructors = await res.json();

    return (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-purple-50 overflow-hidden">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">

                <div className="relative inline-block overflow-hidden">

                    <h1 className="mt-5 text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 py-2 bg-clip-text text-transparent">
                        Top Instructors
                    </h1>

                    {/* Shine Effect */}
                    <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                </div>

                <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
                    Meet our experienced mentors helping thousands of students
                    build real-world skills and successful careers.
                </p>

            </div>

            {/* Slider Component */}
            <div className="max-w-7xl mx-auto mt-16">
                <InstructorSlider instructors={instructors} />
            </div>

        </section>
    );
};

export default TopInstructors;
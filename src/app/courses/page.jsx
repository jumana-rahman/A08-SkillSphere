import CoursesCard from "@/components/ui/CoursesCard";
import SearchCourses from "@/components/ui/SearchCourses";

export const metadata = {
    title: "SkillSphere | Courses",
};

const CoursesPage = async ({ searchParams }) => {

    const search = (await searchParams)?.search || "";

    const res = await fetch(
        "https://a08-skill-sphere.vercel.app/data.json",
        {
            cache: "no-store",
        }
    );

    const data = await res.json();

    // Filter Courses
    const filteredCourses = data.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="py-10 px-4 md:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <div className="relative inline-block overflow-hidden">

                    <h1 className="mt-5 text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 bg-clip-text text-transparent">
                        All Courses
                    </h1>

                    <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                </div>

                <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
                    Browse our complete collection of courses and start mastering
                    in-demand skills today.
                </p>

                {/* Search */}
                <div className="mt-10">
                    <SearchCourses />
                </div>

                {/* Cards */}
                <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredCourses.length > 0 ? (

                        filteredCourses.map((course) => (
                            <CoursesCard
                                key={course.id}
                                course={course}
                            />
                        ))

                    ) : (

                        <div className="col-span-full text-center py-20">

                            <h3 className="text-3xl font-bold text-purple-800">
                                No Courses Found
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Try searching with another keyword.
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default CoursesPage;
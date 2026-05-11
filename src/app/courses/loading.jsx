export default function Loading() {

    return (
        <div className="py-24 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Heading Skeleton */}
                <div className="flex flex-col items-center">

                    <div className="h-12 w-72 rounded-xl bg-purple-200 animate-pulse"></div>

                    <div className="mt-5 h-5 w-96 rounded-lg bg-purple-100 animate-pulse"></div>

                </div>

                {/* Cards Skeleton */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[...Array(6)].map((_, i) => (

                        <div
                            key={i}
                            className="bg-white border border-purple-100 rounded-[2rem] overflow-hidden shadow-lg"
                        >

                            <div className="h-60 bg-purple-100 animate-pulse"></div>

                            <div className="p-6">

                                <div className="h-6 w-3/4 bg-purple-100 rounded-lg animate-pulse"></div>

                                <div className="mt-4 h-4 w-full bg-purple-50 rounded-lg animate-pulse"></div>

                                <div className="mt-2 h-4 w-5/6 bg-purple-50 rounded-lg animate-pulse"></div>

                                <div className="mt-8 h-12 bg-purple-200 rounded-2xl animate-pulse"></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}
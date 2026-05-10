"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchCourses = () => {

    const router = useRouter();

    const searchParams = useSearchParams();

    const currentSearch = searchParams.get("search") || "";

    const [search, setSearch] = useState(currentSearch);

    const handleSearch = (e) => {

        e.preventDefault();

        if (search.trim()) {
            router.push(`/courses?search=${encodeURIComponent(search)}`);
        } else {
            router.push("/courses");
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto"
        >

            <div className="flex flex-col sm:flex-row gap-4">

                <input
                    type="text"
                    placeholder="Search courses by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-14 rounded-2xl border border-purple-200 bg-white px-5 outline-none focus:border-purple-700 text-gray-700 shadow-sm"
                />

                <button
                    type="submit"
                    className="h-14 px-8 rounded-2xl bg-purple-700 text-white font-semibold hover:bg-purple-800 transition-all duration-300"
                >
                    Search
                </button>

            </div>

        </form>
    );
};

export default SearchCourses;
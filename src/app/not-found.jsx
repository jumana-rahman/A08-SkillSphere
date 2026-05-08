import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            
            <h1 className="text-7xl md:text-9xl font-black text-purple-700">
                404
            </h1>

            <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-800">
                Page Not Found
            </h2>

            <p className="mt-3 text-gray-600 max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-8 bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-purple-900"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
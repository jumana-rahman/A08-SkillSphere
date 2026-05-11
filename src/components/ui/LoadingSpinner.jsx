export default function LoadingSpinner() {

    return (
        <div className="flex items-center justify-center py-24">

            <div className="relative">

                {/* Outer Ring */}
                <div className="w-20 h-20 rounded-full border-4 border-purple-200"></div>

                {/* Animated Ring */}
                <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-transparent border-t-purple-700 border-r-fuchsia-600 animate-spin"></div>

                {/* Inner Glow */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-700 to-fuchsia-600 opacity-20 blur-md"></div>

            </div>

        </div>
    );
}
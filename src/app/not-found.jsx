import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center bg-white px-4 text-center">
        
            <div className="relative">
                <h1 className="text-9xl font-black text-gray-100  select-none md:text-[12rem]">
                    404
                </h1>
                <p className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900 uppercase tracking-widest mt-4">
                    Page Not Found
                </p>
            </div>

          
            <div className="max-w-md mt-2 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                    Oops! You have wandered into empty space.
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    The page you are looking for doesn't exist, has been removed, or the link might be broken. Let's get you back on track!
                </p>
            </div>

          
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
                <Link
                    href="/"
                    className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-xl shadow-xs transition-all duration-200"
                >
                    Back to Home
                </Link>
                <Link
                    href="/rooms"
                    className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium text-sm rounded-xl transition-all duration-200"
                >
                    Browse Rooms
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
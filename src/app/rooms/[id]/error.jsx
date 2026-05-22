"use client";

import Link from 'next/link';
import React from 'react';

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">
            
            <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-50 px-3 py-1 rounded-full">
                    Error Occurred
                </span>
                <h1 className="text-3xl font-bold text-gray-950 tracking-tight mt-2">
                    Something went wrong
                </h1>
                <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                    An unexpected error occurred. Please try again or return to the home page.
                </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
                {reset && (
                    <button
                        onClick={() => reset()}
                        className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-lg transition-all cursor-pointer"
                    >
                        Try Again
                    </button>
                )}
                <Link
                    href="/"
                    className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium text-sm rounded-lg transition-all"
                >
                    Go Home
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;
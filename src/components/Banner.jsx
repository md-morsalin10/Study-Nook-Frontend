import React from 'react';
import Link from 'next/link';
import { IoMdCheckmark } from 'react-icons/io';
import Image from 'next/image';
import banner from "@/assets/classroom.png"

const Banner = () => {
    return (
        <div className="relative bg-[#0F172A] min-h-150 flex items-center py-5 overflow-hidden">
          
            <div className="absolute top-0 right-0 w-125 h-125 bg-[#C5A358] opacity-5 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side: Content */}
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-[#C5A358]/10 border border-[#C5A358]/20">
                        <span className="text-[#C5A358] text-sm font-medium">Quiet rooms, on demand</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                        Find Your Perfect <br />
                        <span className="text-[#C5A358]">Study Room</span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                        Browse and book quiet, private study rooms in your library by the hour.
                        List your own room and earn — without the scheduling headaches.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/rooms"
                            className="btn bg-[#C5A358] hover:bg-[#a6894a] border-none text-[#0F172A] font-bold px-8 h-14 rounded-xl flex items-center gap-2"
                        >
                            Explore Rooms</Link>

                        <button className="btn btn-outline border-gray-700 text-white hover:bg-gray-800 px-8 h-14 rounded-xl">
                            Get Started
                        </button>
                    </div>

                    {/* Stats or Trust Badges (Optional) */}
                    <div className="flex gap-8 pt-8 border-t border-gray-800">
                        <div>
                            <h3 className="text-2xl font-bold text-white">120+</h3>
                            <p className="text-gray-500 text-sm">Study Rooms</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">8K+</h3>
                            <p className="text-gray-500 text-sm">Happy Students</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Figma Style Image/Card Grid */}
                <div className="relative">
                    <div className="relative z-20 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src={banner}
                            alt="Study Room"
                            className="w-full h-112 object-cover"
                        />
                    </div>

                  
                    <div className="absolute -bottom-6 -left-10 z-30 bg-[#1E293B] p-5 rounded-2xl border border-gray-700 shadow-xl hidden md:block animate-bounce-slow">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#C5A358] rounded-full flex items-center justify-center">
                             <IoMdCheckmark size={25}/>
                            </div>
                            <div>
                                <p className="text-white font-bold">Focus Mode</p>
                                <p className="text-gray-400 text-xs">Zero distractions, pure success</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
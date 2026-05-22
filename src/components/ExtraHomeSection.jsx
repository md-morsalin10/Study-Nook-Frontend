import React from 'react';
import { Zap, Calendar, Kanban, Search, CheckCircle2, BookmarkCheck } from 'lucide-react';

const ExtraHomeSection = () => {
    return (
        <section className="bg-gray-50 dark:bg-[#0F172A] py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Why StudyNook?
                    </h2>
                    <div className="w-12 h-1 bg-[#C5A358] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">

                    <div className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none text-center flex flex-col items-center group hover:scale-[1.02] transition-all duration-300">
                        <div className="w-14 h-14 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-full flex items-center justify-center mb-6 shadow-md shadow-gray-400/20">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Instant Booking</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            No waiting for approvals. Book your slot instantly and get straight to your studies.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none text-center flex flex-col items-center hover:scale-[1.02] transition-all duration-300">
                        <div className="w-14 h-14 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-full flex items-center justify-center mb-6 shadow-md shadow-gray-400/20">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conflict-Free</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Our precise scheduling algorithm ensures zero double-bookings or scheduling mishaps.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none text-center flex flex-col items-center hover:scale-[1.02] transition-all duration-300">
                        <div className="w-14 h-14 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-full flex items-center justify-center mb-6 shadow-md shadow-gray-400/20">
                            <Kanban className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Manage Listings</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Library administrators and faculty can easily list, manage, and track room usage.
                        </p>
                    </div>

                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        How It Works
                    </h2>
                    <div className="w-12 h-1 bg-[#C5A358] mx-auto mt-4 rounded-full"></div>
                </div>


                <div className="relative">

                    <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-[#C5A358] text-white rounded-full flex flex-col items-center justify-center font-bold shadow-lg shadow-[#C5A358]/20 mb-6 group-hover:scale-105 transition-transform">
                                <span className="text-xs uppercase opacity-80 font-medium">Step</span>
                                <span className="text-2xl font-extrabold mt-[-2px]">1</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <Search className="w-4 h-4 text-[#C5A358]" />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Search Space</h4>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs px-4">
                                Filter by location, capacity, rate, and amenities to find your ideal study room.
                            </p>
                        </div>

                        
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-[#C5A358] text-white rounded-full flex flex-col items-center justify-center font-bold shadow-lg shadow-[#C5A358]/20 mb-6">
                                <span className="text-xs uppercase opacity-80 font-medium">Step</span>
                                <span className="text-2xl font-extrabold mt-[-2px]">2</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-[#C5A358]" />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Pick & Schedule</h4>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs px-4">
                                Select your preferred date, configure available time slots, and verify total cost.
                            </p>
                        </div>

                    
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-[#C5A358] text-white rounded-full flex flex-col items-center justify-center font-bold shadow-lg shadow-[#C5A358]/20 mb-6">
                                <span className="text-xs uppercase opacity-80 font-medium">Step</span>
                                <span className="text-2xl font-extrabold mt-[-2px]">3</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <BookmarkCheck className="w-4 h-4 text-[#C5A358]" />
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Confirm Booking</h4>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs px-4">
                                Secure your study room slot instantly and access complete checkout booking info.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExtraHomeSection;
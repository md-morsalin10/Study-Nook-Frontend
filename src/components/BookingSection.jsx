// components/BookingSection.jsx
'use client';
import Link from 'next/link';


const BookingSection = ({ room }) => {
    
    // TODO: replace with actual auth check
    const currentUser = null;
    const isOwner = currentUser?._id === room.ownerId;

    const { name, hourlyRate, floor, capacity, amenities = [], bookingCount = 0 } = room;

    return (
        <div className="sticky top-24">
            <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-lg shadow-amber-50 overflow-hidden">

                {/* Card Header */}
                <div className="bg-linear-to-r from-[#0F172A] to-[#1E293B] px-6 py-5">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                        Hourly Rate
                    </p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">${hourlyRate}</span>
                        <span className="text-slate-400 text-sm">/ hour</span>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-4">

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <i className="ti ti-calendar-stats text-amber-400 text-base" />
                        <span>
                            <span className="font-semibold text-[#0F172A]">{bookingCount}</span> confirmed bookings
                        </span>
                    </div>

                    <div className="border-t border-slate-100" />

                    {/* Info rows */}
                    <div className="flex flex-col gap-3">
                        {[
                            { icon: 'ti-users', label: 'Capacity', value: `${capacity} people` },
                            { icon: 'ti-building', label: 'Floor', value: floor },
                            { icon: 'ti-sparkles', label: 'Amenities', value: `${amenities.length} included` },
                        ].map((row) => (
                            <div key={row.label} className="flex items-center justify-between text-sm">
                                <span className="text-slate-400 flex items-center gap-2">
                                    <i className={`ti ${row.icon} text-slate-300`} />
                                    {row.label}
                                </span>
                                <span className="font-semibold text-[#0F172A]">{row.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-slate-100" />

                    {/* Book Now / Login to Book */}
                    {currentUser ? (
                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full py-3.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-amber-200 cursor-pointer"
                        >
                            <i className="ti ti-calendar-plus text-base" />
                            Book Now
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="w-full py-3.5 border-2 border-[#0F172A] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#0F172A] hover:text-white"
                        >
                            <i className="ti ti-lock text-base" />
                            Login to Book
                        </Link>
                    )}

                    {/* Owner Actions */}
                    {isOwner && (
                        <div className="flex gap-3">
                            <button className="flex-1 py-2.5 border border-[#0F172A] text-[#0F172A] text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                <i className="ti ti-edit text-base" />
                                Edit
                            </button>
                            <button className="flex-1 py-2.5 border border-red-200 text-red-500 text-sm font-semibold rounded-xl hover:bg-red-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                <i className="ti ti-trash text-base" />
                                Delete
                            </button>
                        </div>
                    )}

                    <p className="text-center text-xs text-slate-400">
                        <i className="ti ti-shield-check text-amber-400 mr-1" />
                        Free cancellation before booking date
                    </p>
                </div>
            </div>

            <Link
                href="/rooms"
                className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-amber-500 transition-colors"
            >
                <i className="ti ti-arrow-left text-sm" />
                Back to all rooms
            </Link>

         
        </div>
    );
};

export default BookingSection;
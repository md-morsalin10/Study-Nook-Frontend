'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({ data }) => {
    const { _id } = data;

    const {
        roomName,
        roomImage,
        floorInfo,
        date,
        startTime,
        endTime,
        totalCost,
        status: initialStatus = "Confirmed"
    } = data;

    const [bookingStatus, setBookingStatus] = useState(initialStatus);
    const isConfirmed = bookingStatus.toLowerCase() === 'confirmed';

    
    const handleCancelBooking = async () => {
        try {
          
            const res = await fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: "Cancelled" }) 
            });

            const patchData = await res.json();
            console.log(patchData, "From Cancel Handler");

            if (patchData.modifiedCount > 0) {
                setBookingStatus("Cancelled");
                toast.success('Booking Cancelled Successfully!');
            } else {
                toast.error('Failed to cancel or already cancelled.');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="bg-white border-b mb-3 border-slate-100 last:border-none px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">

            <div className="flex items-center gap-4 min-w-62 flex-1">
                <div className="relative w-16 h-12 rounded-xl overflow-hidden border border-slate-100 bg-slate-100 shrink-0">
                    <Image
                        src={roomImage}
                        fill
                        sizes="64px"
                        alt={roomName}
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-[#0F172A] text-sm md:text-base leading-tight hover:text-amber-500 transition-colors cursor-pointer">
                        {roomName}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                        <i className="ti ti-building text-sm" />
                        {floorInfo}
                    </p>
                </div>
            </div>

            <div className="min-w-30">
                <p className="text-xs text-slate-400 block md:hidden font-semibold uppercase tracking-wider mb-0.5">Date</p>
                <p className="text-sm font-medium text-slate-600">{date}</p>
            </div>

            <div className="min-w-35">
                <p className="text-xs text-slate-400 block md:hidden font-semibold uppercase tracking-wider mb-0.5">Time Slot</p>
                <p className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold">{startTime}</span>
                    <span className="text-slate-400 text-xs">to</span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold">{endTime}</span>
                </p>
            </div>

            <div className="min-w-25">
                <p className="text-xs text-slate-400 block md:hidden font-semibold uppercase tracking-wider mb-0.5">Total Cost</p>
                <p className="text-sm font-bold text-[#0F172A]">${Number(totalCost).toFixed(2)}</p>
            </div>

            <div className="min-w-27">
                <p className="text-xs text-slate-400 block md:hidden font-semibold uppercase tracking-wider mb-0.5">Status</p>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 ${isConfirmed
                    ? 'bg-emerald-50 text-green-600 border-emerald-100'
                    : 'bg-red-50 text-red-500 border-red-100'
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isConfirmed ? 'bg-green-500' : 'bg-red-500'}`} />
                    {bookingStatus}
                </span>
            </div>

            <div className="min-w-25 flex md:justify-end">
                {isConfirmed ? (
                    <button
                        onClick={handleCancelBooking} 
                        className="px-4 py-1.5 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1"
                    >
                      
                        Cancel
                    </button>
                ) : (
                    <button className="px-4 py-1.5 border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer">
                        Details
                    </button>
                )}
            </div>

        </div>
    );
};

export default BookingCard;
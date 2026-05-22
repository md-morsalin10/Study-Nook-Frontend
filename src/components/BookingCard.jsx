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
          
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/booking/${_id}`, {
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
       <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 hover:bg-slate-50/50 transition-all duration-300">

  
    <div className="flex items-center gap-4 min-w-60 flex-1 pb-3 md:pb-0 border-b border-dashed border-slate-100 md:border-none">
        <div className="relative w-16 h-14 rounded-xl overflow-hidden border border-slate-100 bg-slate-100 shrink-0 shadow-sm">
            <Image
                src={roomImage}
                fill
                sizes="64px"
                alt={roomName}
                className="object-cover"
            />
        </div>
        <div className="min-w-0">
            <h4 className="font-bold text-[#0F172A] text-sm md:text-base leading-tight hover:text-amber-500 transition-colors cursor-pointer truncate">
                {roomName}
            </h4>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                {floorInfo}
            </p>
        </div>
    </div>

   
    <div className="grid grid-cols-2 gap-y-4 gap-x-2 md:flex md:items-center md:gap-6 flex-2 md:justify-between">
        
      
        <div className="min-w-30">
            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 md:hidden">Date</p>
            <p className="text-sm font-semibold text-slate-600">{date}</p>
        </div>

      
        <div className="min-w-35">
            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 md:hidden">Time Slot</p>
            <div className="text-sm font-medium text-slate-700 flex items-center gap-1">
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold">{startTime}</span>
                <span className="text-slate-400 text-[10px]">to</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-semibold">{endTime}</span>
            </div>
        </div>

        {/* Total Cost */}
        <div className="min-w-25">
            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 md:hidden">Total Cost</p>
            <p className="text-sm font-bold text-[#0F172A]">${Number(totalCost).toFixed(2)}</p>
        </div>

        {/* Status */}
        <div className="min-w-27.5">
            <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1 md:hidden">Status</p>
            <div>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 ${
                    isConfirmed
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                        : 'bg-red-50 text-red-500 border-red-100'
                }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isConfirmed ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    {bookingStatus}
                </span>
            </div>
        </div>

    </div>

    <div className="min-w-25 flex md:justify-end mt-2 md:mt-0 pt-3 md:pt-0 border-t border-slate-100 md:border-none">
        {isConfirmed ? (
            <button
                onClick={handleCancelBooking} 
                className="w-full md:w-auto text-center justify-center px-5 py-2 md:py-1.5 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1 active:scale-95"
            >
                Cancel
            </button>
        ) : (
            <button className="w-full md:w-auto text-center justify-center px-5 py-2 md:py-1.5 border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer active:scale-95">
                Details
            </button>
        )}
    </div>

</div>
    );
};

export default BookingCard;
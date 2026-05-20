'use client';

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';

const TIME_SLOTS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

const BookingModal = ({ room, onClose }) => {
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [note, setNote] = useState('');

    const { data: session } = authClient.useSession();
    const user = session?.user


    const today = new Date().toISOString().split('T')[0];

    const startHour = startTime ? Number(startTime.slice(0, 2)) : 0;
    const endHour = endTime ? Number(endTime.slice(0, 2)) : 0;
    const hours = endHour - startHour;
    const totalCost = hours > 0 ? hours * room.hourlyRate : 0;


    const endTimeOptions = TIME_SLOTS.filter(t => t > startTime);

    const handleBooking = async () => {
        if (!date || !startTime || !endTime) return;

        const bookingInfo = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            roomId: room._id,
            roomName: room.name,
            roomImage: room.imageUrl,
            floorInfo: room.floor,
            date,
            startTime,
            endTime,
            note,
            totalCost
        };

        console.log("Submitting Booking Info:", bookingInfo);
        const res = await fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        const data = await res.json()
        // console.log(data, "from frontend");
        toast.success('Room Booked Successfully')
    
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">

                {/* Modal Header */}
                <div className="bg-linear-to-r from-[#0F172A] to-[#1E293B] px-6 py-5 flex items-center justify-between">
                    <div>
                        <h2 className="text-white font-bold text-lg">Reserve Your Slot</h2>
                        <p className="text-slate-400 text-xs mt-0.5">{room.name}</p>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <i className="ti ti-x text-xl" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 flex flex-col gap-4">
                    {/* Date */}
                    <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">Date</label>
                        <input
                            type="date"
                            min={today}
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                        />
                    </div>

                    {/* Time Row */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">Start Time</label>
                            <select
                                value={startTime}
                                onChange={e => { setStartTime(e.target.value); setEndTime(''); }}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                            >
                                <option value="">Select</option>
                                {TIME_SLOTS.slice(0, -1).map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">End Time</label>
                            <select
                                value={endTime}
                                onChange={e => setEndTime(e.target.value)}
                                disabled={!startTime}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all disabled:opacity-50"
                            >
                                <option value="">Select</option>
                                {endTimeOptions.map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Total Cost */}
                    {totalCost > 0 && (
                        <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-center justify-between">
                            <span className="text-sm text-slate-500 font-medium">Total Cost</span>
                            <span className="text-xl font-bold text-amber-600">${totalCost}</span>
                        </div>
                    )}

                    {/* Special Note */}
                    <div>
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">
                            Special Note <span className="text-slate-300 normal-case">(optional)</span>
                        </label>
                        <textarea
                            rows={3}
                            value={note}
                            onChange={e => setNote(e.target.value)}
                            placeholder="Any special requirements..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all resize-none"
                        />
                    </div>

                    {/* Confirm Button */}
                    <button
                        onClick={handleBooking}
                        disabled={!date || !startTime || !endTime}
                        className="w-full py-3.5 bg-[#F59E0B] hover:bg-[#D97706] disabled:opacity-50 disabled:cursor-not-allowed text-[#0F172A] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <i className="ti ti-calendar-check text-base" />
                        Confirm Booking
                    </button>

                    <button onClick={onClose} className="text-center text-sm text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
import BookingCard from '@/components/BookingCard';
import FadeIn from '@/components/MotionWrapper/FadeIn';
import ZoomIn from '@/components/MotionWrapper/ZoomIn';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { BiSolidError } from 'react-icons/bi';

export const metadata = {
    title: "My Booking - StudyNook",
};

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }

    })
    const BookingData = await res.json()

    console.log(BookingData.length);

    return (
        <div className='container mx-auto py-4 space-y-4 p-6 md:p-4'>
            {
                BookingData.length == 0 ? <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
                    <div className="bg-[#0F172A] border border-slate-800/60 rounded-3xl p-10 flex flex-col items-center justify-center text-center max-w-md w-full shadow-xl gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-[#1E293B] border border-slate-700/50 flex items-center justify-center">
                            <BiSolidError className='text-white' size={30} />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                No Bookings Yet
                            </h2>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                                You havent reserved any study rooms yet. Explore available slots and book your perfect study space today.
                            </p>
                        </div>

                        <div className="w-16 h-1 rounded-full bg-linear-to-r from-transparent via-[#C5A358]/40 to-transparent" />
                        <Link
                            href="/rooms"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A358] hover:bg-[#b0904a] text-[#0F172A] text-sm font-bold rounded-xl transition-all shadow-md shadow-[#C5A358]/10"
                        >
                         
                            Explore Rooms
                        </Link>

                        <p className="text-xs text-slate-600">
                            500+ study rooms available to book
                        </p>

                    </div>
                </div>
                    :
                    <div>
                        <ZoomIn delay={0.1}>
                            <h2 className='text-3xl font-bold text-[#0F172A]'>My Booking</h2>
                            <p className='text-muted'>Manage your upcoming and past study sessions.</p>
                        </ZoomIn>

                        <div className='py-3'>
                            {
                                BookingData.map((data, index) => <FadeIn delay={index * 0.1} key={data?._id}>
                                    <BookingCard data={data} />
                                </FadeIn>)
                            }
                        </div>
                    </div>}

        </div>
    );
};

export default MyBookingPage;
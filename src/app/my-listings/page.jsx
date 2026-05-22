import FadeIn from '@/components/MotionWrapper/FadeIn';
import RoomCard from '@/components/RoomCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { BiSolidError } from 'react-icons/bi';
import { PiNoteDuotone } from 'react-icons/pi';

export const metadata = {
    title: "My Listing - StudyNook",
};

const MyListingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/my-rooms/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const roomData = await res.json()

    console.log(roomData);

    return (
        <div className='container mx-auto my-10'>
            {
                roomData.length === 0 ? <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
                    <div className="bg-[#0F172A] border border-slate-800/60 rounded-3xl p-10 flex flex-col items-center justify-center text-center max-w-md w-full shadow-xl gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-[#1E293B] border border-slate-700/50 flex items-center justify-center">
                            <PiNoteDuotone className='text-white' size={30} />

                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                No Listing data found
                            </h2>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                                You havent reserved any study rooms yet. Explore available slots and book your perfect study space today.
                            </p>
                        </div>

                        <div className="w-16 h-1 rounded-full bg-linear-to-r from-transparent via-[#C5A358]/40 to-transparent" />
                        <Link
                            href="/add-room"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A358] hover:bg-[#b0904a] text-[#0F172A] text-sm font-bold rounded-xl transition-all shadow-md shadow-[#C5A358]/10"
                        >
                            <i className="ti ti-search text-sm" />
                            Add a New room
                        </Link>

                        <p className="text-xs text-slate-600">
                            500+ study rooms available to book
                        </p>

                    </div>
                </div> :
                    <div className='space-y-3'>
                        <FadeIn delay={0.1}>
                            <h2 className='text-3xl font-bold text-[#0F172A] py-2'>My Room Listings</h2>
                            <p className='text-muted text-sm py-2'>Manage your academic study spaces. Update availability, edit details, or
                                remove rooms from the StudyNook catalog.</p>
                        </FadeIn>
                        <div className='pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                roomData.map((room, index) =>
                                    <FadeIn key={room._id} delay={index * 0.1}>
                                        <RoomCard room={room} />
                                    </FadeIn>
                                )
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyListingPage;
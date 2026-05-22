import RoomCard from '@/components/RoomCard';
import React from 'react';
import Form from 'next/form';
import Link from 'next/link';
import FadeIn from '@/components/MotionWrapper/FadeIn';

export const metadata = {
    title: "Rooms - StudyNook",
}

const AllRoomPage = async ({ searchParams }) => {

    const params = await searchParams;


    const search = params?.search || "";
    const minRate = params?.minRate || "";
    const maxRate = params?.maxRate || "";
    const amenities = params?.amenities || "";


    const queryUrl = `${process.env.NEXT_PUBLIC_SERVER_ULR}/rooms?search=${search}&minRate=${minRate}&maxRate=${maxRate}&amenities=${amenities}`;

    const res = await fetch(queryUrl,
        { cache: 'no-store' });
    const roomData = await res.json();

    return (
        <div className='bg-white'>
            <div className='container mx-auto py-12 px-4 max-w-7xl  text-gray-900 min-h-screen'>

                <FadeIn delay={0.1}>
                    <div className='mb-8 border-b border-gray-100 pb-4'>
                        <h2 className='text-3xl font-bold text-gray-900'>All Available Rooms</h2>
                        <p className='text-gray-500 text-sm mt-1'>Find the perfect space for your next deep focus session.</p>
                    </div>
                </FadeIn>

                <div className='bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8'>
                    <Form action="/rooms" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

                        {/* title search */}
                        <FadeIn delay={0.2}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-600 uppercase">Search Name</label>
                                <input
                                    name="search"
                                    defaultValue={search}
                                    placeholder="enter title"
                                    className="w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:border-gray-500 transition-all"
                                />
                            </div>
                        </FadeIn>

                        {/* min rate */}
                        <FadeIn delay={0.2}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-600 uppercase">Price ($)</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <input
                                        name="minRate"
                                        type="number"
                                        defaultValue={minRate}
                                        placeholder="Min"
                                        className="w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:border-gray-500 transition-all"
                                    />
                                    <input
                                        name="maxRate"
                                        type="number"
                                        defaultValue={maxRate}
                                        placeholder="Max"
                                        className="w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:border-gray-500 transition-all"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                        {/* max rete */}

                        <FadeIn delay={0.3}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-600 uppercase">Amenities</label>
                                <input
                                    name="amenities"
                                    defaultValue={amenities}
                                    placeholder="WiFi, AC, Projector"
                                    className="w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:border-gray-500 transition-all"
                                />
                            </div>
                        </FadeIn>

                        <div className="flex gap-2 items-center">
                            <button
                                type="submit"
                                className="w-full h-11 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg text-sm transition-all"
                            >
                                Apply Filters
                            </button>


                            {(search || minRate || maxRate || amenities) && (
                                <Link href={'/rooms'} className="h-11 px-3 flex items-center justify-center text-xs font-medium text-gray-500 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all">
                                    <p>Reset</p>
                                </Link>
                            )}
                        </div>
                    </Form>
                </div>

                <div>
                    {roomData.length === 0 ? (
                        <div className="text-center py-16 border border-gray-200 rounded-xl bg-gray-50">
                            <p className="text-gray-400 text-sm">No rooms found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {roomData.map((room, index) => (
                                <FadeIn key={room._id} delay={index * 0.1}>
                                    <RoomCard room={room} />
                                </FadeIn>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AllRoomPage;
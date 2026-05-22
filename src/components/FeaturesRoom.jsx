import React from 'react';
import RoomCard from './RoomCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import FadeIn from './MotionWrapper/FadeIn';
import ZoomIn from './MotionWrapper/ZoomIn';

const FeaturesRoom = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/features`)
    const roomData = await res.json();

    console.log(roomData);

    return (
        <div className='max-w-7xl mx-auto my-10 p-6 md:p-5'>
            <ZoomIn delay={0.1} >
                <div className='flex justify-between items-center py-5'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#0F172A]'>Available Study Rooms</h2>

                    <Link href={`/rooms`}>
                        <button className='btn btn-outline border-none'>View All <FaArrowRight /></button>
                    </Link>
                </div>
            </ZoomIn>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    roomData.map((room, index) =>
                        <FadeIn key={room._id} delay={index * 0.1}>
                            <RoomCard room={room} />
                        </FadeIn>)
                }
            </div>
        </div>
    );
};

export default FeaturesRoom;
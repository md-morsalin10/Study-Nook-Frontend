import RoomCard from '@/components/RoomCard';
import React from 'react';

const AllRoomPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/rooms`)
    const roomData = await res.json()

    console.log(roomData);
    
    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-3xl font-bold py-3'>All Available Rooms</h2>
            <p className='text-muted pb-4'>Find the perfect space for your next deep focus session.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    roomData.map(room=> <RoomCard room={room} key={room._id} />)
                }
            </div>
        </div>
    );
};

export default AllRoomPage;
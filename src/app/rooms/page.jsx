import RoomCard from '@/components/RoomCard';
import React from 'react';

const AllRoomPage = async() => {
    const res = await fetch(`http://localhost:5000/rooms`)
    const roomData = await res.json()

    console.log(roomData);
    
    return (
        <div className='container mx-auto'>
            <h2>All Available Rooms</h2>
            <p>Find the perfect space for your next deep focus session.</p>
            <div className='grid grid-cols-4 gap-3'>
                {
                    roomData.map(room=> <RoomCard room={room} key={room._id} />)
                }
            </div>
        </div>
    );
};

export default AllRoomPage;
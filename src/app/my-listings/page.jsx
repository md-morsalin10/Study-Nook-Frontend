import RoomCard from '@/components/RoomCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/my-rooms/${user?.id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    const roomData = await res.json()

    console.log(roomData);

    return (
        <div className='container mx-auto'>
            {
                roomData.length === 0 ? <div>
                    <h2>No listing data available</h2>
                </div> :
                    <div>
                        <h2>My Room Listings</h2>
                        <p>Manage your academic study spaces. Update availability, edit details, or
                            remove rooms from the StudyNook catalog.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {
                                roomData.map(room => <RoomCard room={room} key={room._id} />)
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyListingPage;
import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    const user = session?.user
  
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const BookingData = await res.json()

    console.log(BookingData);
    
    return (
        <div className='container mx-auto py-4 space-y-4'>
            <h2 className='text-3xl font-bold'>My Booking</h2>
            <p className='text-muted'>Manage your upcoming and past study sessions.</p>

            <div className='py-3'>
                {
                    BookingData.map(data=> <BookingCard data={data} key={data?._id}/>)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;
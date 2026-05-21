import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

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
        <div className='container mx-auto py-4 space-y-4'>
            {
                BookingData.length == 0 ? <div>
                    <h2>No Booking Data available</h2>
                </div>
                    :
                    <div>
                        <h2 className='text-3xl font-bold text-[#0F172A]'>My Booking</h2>
                        <p className='text-muted'>Manage your upcoming and past study sessions.</p>

                        <div className='py-3'>
                            {
                                BookingData.map(data => <BookingCard data={data} key={data?._id} />)
                            }
                        </div>
                    </div>}

        </div>
    );
};

export default MyBookingPage;
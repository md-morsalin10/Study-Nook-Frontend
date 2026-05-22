
import Image from 'next/image';
import Link from 'next/link';
import BookingSection from '@/components/BookingSection';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
    title: "Room Details - StudyNook",
    description: "Discover and book premium private study rooms instantly. Focus better, book smarter with StudyNook.",
};

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;


    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    // console.log(token, 'token');

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/rooms/${id}`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    console.log(res, "from details page");


    if (!res.ok) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center gap-4">
                <i className="ti ti-mood-sad text-6xl text-slate-300" />
                <p className="text-slate-500 text-lg">Room not found.</p>
                <Link to="/rooms" className="text-amber-500 hover:underline text-sm">
                    ← Back to Rooms
                </Link>
            </div>
        );
    }

    const room = await res.json();

    console.log(room, "room from details");


    const {
        _id,
        name,
        imageUrl,
        hourlyRate,
        floor,
        capacity,
        amenities = [],
        description,
        bookingCount = 0,
    } = room;

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">


                <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                    <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
                    <Link href="/rooms" className="hover:text-amber-500 transition-colors">Rooms</Link>
                    <span className="text-[#0F172A] font-medium truncate max-w-50">{name}</span>
                </nav>


                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">


                    <div className="lg:col-span-3 flex flex-col gap-8">


                        <div className="relative rounded-2xl overflow-hidden shadow-md h-90">
                            <Image
                                src={imageUrl}
                                alt={room?.name}
                                fill
                                className="object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-[#0F172A]/80 backdrop-blur-sm text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-400/30">
                                <i className="ti ti-building mr-1" />
                                {floor}
                            </span>
                        </div>


                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 flex flex-col gap-6">


                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
                                    {name}
                                </h1>
                                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200 shrink-0">

                                    {bookingCount} Bookings
                                </span>
                            </div>


                            <div className="flex flex-wrap gap-2 md:gap-4">
                                <div className='border p-4 bg-base-200 rounded-2xl border-gray-200'>
                                    <p className='text-sm text-muted text-center font-bold'>Capacity</p>
                                    <h2 className='font-bold'>{capacity} People</h2>
                                </div>
                                <div className='border p-4 bg-base-200 rounded-2xl border-gray-200'>
                                    <p className='text-sm text-muted text-center font-bold'>Floor</p>
                                    <h2 className='font-bold'>{floor}</h2>
                                </div>
                                <div className='border p-4 px-9 bg-base-200 rounded-2xl border-gray-200'>
                                    <p className='text-sm text-muted text-center font-bold'>Rate</p>
                                    <h2 className='font-bold'>${hourlyRate}</h2>
                                </div>

                            </div>

                            <div className="border-t border-slate-100" />


                            <div>
                                <h3 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-3">
                                    About this Room
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                            </div>

                            <div className="border-t border-slate-100" />

                            {/* Amenities */}
                            <div>
                                <h3 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-4">
                                    Amenities
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {amenities.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5"
                                        >
                                            <span className="text-xs font-medium text-[#0F172A] capitalize">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <BookingSection id={id} room={room} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;
"use client"

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavbarProfileDropdown from './NavbarProfileDropdown';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname()

    const { data: session } = authClient.useSession();
    const user = session?.user

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const link = (
        <>
            <li>
                <Link href={'/'} className={`${pathName === '/' ? 'text-[#C5A358] border border-[#C5A358]' : ''} hover:text-[#C5A358] transition-colors focus:bg-transparent active:bg-transparent`}>Home</Link>
            </li>
            <li>
                <Link href={'/rooms'} className={`${pathName === '/rooms' ? 'text-[#C5A358] border border-[#C5A358]' : ''} hover:text-[#C5A358] transition-colors focus:bg-transparent active:bg-transparent`}>Rooms</Link>
            </li>
            {user && (
                <>
                    <li>
                        <Link href={'/add-room'} className={`${pathName === '/add-room' ? 'text-[#C5A358] border border-[#C5A358]' : ''} hover:text-[#C5A358] transition-colors focus:bg-transparent active:bg-transparent`}>Add Room</Link>
                    </li>
                    <li>
                        <Link href={'/my-listings'} className={`${pathName === '/my-listings' ? 'text-[#C5A358] border border-[#C5A358]' : ''} hover:text-[#C5A358] transition-colors focus:bg-transparent active:bg-transparent`}>My Listing</Link>
                    </li>
                    <li>
                        <Link href={'/my-bookings'} className={`${pathName==='/my-bookings' ? 'text-[#C5A358] border border-[#C5A358]':''} hover:text-[#C5A358] transition-colors focus:bg-transparent active:bg-transparent`}>My Booking</Link>
                    </li>
                </>
            )}
        </>
    );

    return (

        <div className='bg-[#0F172A] text-white border-b border-gray-800 sticky top-0 z-50'>
            <div className="navbar container mx-auto py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#C5A358]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#1E293B] rounded-box z-1 mt-3 w-52 p-4 shadow-2xl border border-gray-700">
                            {link}
                        </ul>
                    </div>
                    {/* Logo Section */}
                    <Link href="/" className='flex items-center gap-2'>
                        <span className='text-2xl font-bold tracking-tight text-white'>
                            Study<span className='text-[#C5A358]'>Nook</span>
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 font-medium">
                        {link}
                    </ul>
                </div>

                <div className="navbar-end gap-4">

                    {user ? <>

                        <NavbarProfileDropdown />

                        <Button
                            onClick={handleSignOut}
                            className={'rounded-xl hidden md:block'}
                            variant='danger'>Logout</Button>
                    </> : <>
                        <Link href={'/login'}>
                            <button className="text-sm font-medium hover:text-[#C5A358] transition-colors">
                                Login
                            </button>
                        </Link>
                        <Link
                            href={"/signup"}
                            className="btn bg-[#C5A358] hover:bg-[#a6894a] border-none text-[#0F172A] font-bold px-6 min-h-0 h-10"
                        >
                            Register
                        </Link>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
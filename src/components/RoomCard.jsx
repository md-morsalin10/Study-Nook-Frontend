import React from 'react';
import { Card, Button } from "@heroui/react";
import { HiStar, HiOutlineLocationMarker, HiUsers } from "react-icons/hi";
import { FaCircle } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const RoomCard = ({ room }) => {
    const { _id, name, imageUrl, hourlyRate, floor, capacity, amenities } = room;

    return (
        <Card className=" h-full flex flex-col border border-gray-200 shadow-sm rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow">


            <div className="relative w-full h-55 p-3">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                        alt={name}
                        src={imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover z-0"
                        priority={false}
                    />
                </div>
            </div>


            <div className="px-4 py-0 flex flex-col gap-2 grow">
                <div className="flex justify-between items-center mt-1">
                    <h3 className="text-[17px] font-bold text-gray-900 truncate">{name}</h3>
                    <div className="flex items-center gap-1">
                        <HiStar className="text-yellow-400 w-4 h-4" />
                        <span className="text-sm font-bold text-gray-700">4.9</span>
                    </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                    <HiOutlineLocationMarker className="w-4 h-4" />
                    <span className="text-xs font-medium">{floor}</span>
                </div>

                <div className="flex gap-2 mt-1">
                    <div className="flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-gray-600">
                        <HiUsers className="w-3.5 h-3.5" />
                        {capacity} People
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {amenities.map((item) => (
                        <div
                            key={item}
                            className="flex items-center justify-center bg-slate-50 border border-green-100/70 rounded-xl py-1 px-2 text-center"
                        >
    
                            <span className="text-xs flex items-center text-center font-medium text-[#0F172A]">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="px-4 py-5 flex justify-between items-center border-t border-gray-100 mt-4">
                <div className="flex flex-col">
                    <p className="text-xl font-extrabold text-gray-900">
                        ${hourlyRate}.00
                        <span className="text-xs font-medium text-gray-400 ml-1">/ hour</span>
                    </p>
                </div>
                <Link
                    className="bg-[#0F172A] text-white font-bold rounded-xl px-5 py-2 h-10 text-sm"
                    href={`/rooms/${_id}`}>

                    View Details

                </Link>
            </div>
        </Card>
    );
};

export default RoomCard;
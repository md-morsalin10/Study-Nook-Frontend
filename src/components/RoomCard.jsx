"use client"
import React from 'react';
import { Card, Button } from "@heroui/react";
import { HiStar, HiOutlineLocationMarker, HiUsers } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const RoomCard = ({ room }) => {
    const { _id, name, imageUrl, hourlyRate, floor, capacity, amenities } = room;

    return (
         <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col border border-gray-200 shadow-sm rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:border-[#C5A358]/30 transition-all duration-300">

                {/* Image */}
                <div className="relative w-full h-52 p-3">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <Image
                            alt={name}
                            src={imageUrl}
                            fill
                            sizes="(max-width: 768px) 100vw, 350px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={false}
                        />
                        {/* Overlay on hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent rounded-xl"
                        />
                    </div>
                </div>

                {/* Body */}
                <div className="px-4 py-0 flex flex-col gap-2 grow">

                    {/* Name + Rating */}
                    <div className="flex justify-between items-center mt-1">
                        <h3 className="text-[17px] font-bold text-gray-900 truncate">{name}</h3>
                        <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-100 px-2 py-0.5 rounded-lg">
                            <HiStar className="text-yellow-400 w-3.5 h-3.5" />
                            <span className="text-xs font-bold text-yellow-600">4.9</span>
                        </div>
                    </div>

                    {/* Floor */}
                    <div className="flex items-center gap-1 text-gray-400">
                        <HiOutlineLocationMarker className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs font-medium truncate">{floor}</span>
                    </div>

                    {/* Capacity */}
                    <div className="flex gap-2 mt-1">
                        <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-gray-600">
                            <HiUsers className="w-3.5 h-3.5" />
                            {capacity} People
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                        {amenities.slice(0, 3).map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl py-1 px-2 text-center"
                            >
                                <span className="text-[10px] font-semibold text-[#0F172A] capitalize">
                                    {item.replace("_", " ")}
                                </span>
                            </motion.div>
                        ))}
                        {amenities.length > 3 && (
                            <div className="flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl py-1 px-2">
                                <span className="text-[10px] font-semibold text-slate-400">
                                    +{amenities.length - 3} more
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-4 flex justify-between items-center border-t border-gray-100 mt-4">
                    <div className="flex flex-col">
                        <p className="text-xl font-extrabold text-gray-900">
                            ${hourlyRate}.00
                            <span className="text-xs font-medium text-gray-400 ml-1">/ hour</span>
                        </p>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <Link
                            href={`/rooms/${_id}`}
                            className="bg-[#0F172A] hover:bg-[#C5A358] text-white font-bold rounded-xl px-5 py-2.5 text-sm transition-colors duration-300 inline-block"
                        >
                            View Details
                        </Link>
                    </motion.div>
                </div>
            </Card>
        </motion.div>
    );
};

export default RoomCard;
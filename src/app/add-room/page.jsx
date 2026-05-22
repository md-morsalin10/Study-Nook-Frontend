"use client"
import { authClient } from '@/lib/auth-client';
import { Card, FieldError, Input, Label, TextField, TextArea, Button, Checkbox, CheckboxGroup } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const AddRoomPage = () => {
    const router = useRouter()
    const { data: session } = authClient.useSession();
    const user = session?.user

    // console.log(user);



    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const toggleAmenity = (value) => {
        setSelectedAmenities(prev =>
            prev.includes(value)
                ? prev.filter(a => a !== value)
                : [...prev, value]
        );
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        data.amenities = selectedAmenities;
        data.creatorEmail = user?.email;
        data.ownerId = user?.id
        data.ownerImage = user?.image
        data.ownerName = user?.name


        // console.log(data);

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/rooms`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(data)
        })
        const roomData = await res.json();
        // console.log(roomData);

        if (roomData?.insertedId) {
            toast.success('Room added successfully! 🎉');
            router.push('/my-listings')

        }
        else {
            toast.error('Failed to add room. Please try again.');
        }

    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10'>

                <div className="mb-8 text-center md:text-left">
                    <h2 className='text-3xl font-bold text-gray-900 tracking-tight'>Add a New Room</h2>
                    <p className="text-gray-500 mt-2 text-sm">Share your study space with the community</p>
                </div>
                <Card className="bg-white shadow-xl shadow-gray-200/60 border border-gray-100 rounded-2xl overflow-hidden">
                    <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-6">

                        <div className="w-full">
                            <TextField name="name" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Room Name</Label>
                                <Input
                                    placeholder="Enter Your Room Name"
                                    className="rounded-xl w-full bg-gray-50 border border-gray-200 text-gray-900 focus:border-gray-400 focus:bg-white transition-all"
                                />
                            </TextField>
                        </div>

                        <div className="w-full">
                            <TextField name="description" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Room Description</Label>
                                <TextArea
                                    placeholder="Describe your room..."
                                    className="rounded-xl min-h-30 w-full bg-gray-50 border border-gray-200 text-gray-900 focus:border-gray-400 focus:bg-white transition-all"
                                />
                            </TextField>
                        </div>

                        <div className="w-full">
                            <TextField name="imageUrl" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Image URL</Label>
                                <Input
                                    placeholder="Enter Image URL"
                                    className="rounded-xl w-full bg-gray-50 border border-gray-200 text-gray-900 focus:border-gray-400 focus:bg-white transition-all"
                                />
                            </TextField>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <TextField name="floor" isRequired>
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Floor</Label>
                                <Input placeholder="e.g. 3rd Floor" className="rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white transition-all" />
                            </TextField>

                            <TextField name="capacity" type="number" isRequired>
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Capacity</Label>
                                <Input placeholder="2" className="rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white transition-all" />
                            </TextField>

                            <TextField name="hourlyRate" type="number" isRequired>
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Hourly Rate ($)</Label>
                                <Input placeholder="5" className="rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white transition-all" />
                            </TextField>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-semibold block text-gray-700">
                                Available Amenities
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { label: "Whiteboard", value: "whiteboard" },
                                    { label: "Projector", value: "projector" },
                                    { label: "Wi-Fi", value: "wifi" },
                                    { label: "Power Outlets", value: "power_outlets" },
                                    { label: "Quiet Zone", value: "quiet_zone" },
                                    { label: "Air Conditioning", value: "ac" },
                                    { label: "Soundproofed", value: "soundproofed" },
                                ].map((item) => {
                                    const isSelected = selectedAmenities.includes(item.value);
                                    return (
                                        <label
                                            key={item.value}
                                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                            ${isSelected
                                                    ? "border-[#C5A358] bg-[#C5A358]/5"
                                                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                value={item.value}
                                                checked={isSelected}
                                                onChange={() => toggleAmenity(item.value)}
                                                className="hidden"
                                            />
                                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all
                                            ${isSelected
                                                    ? "bg-[#C5A358] border-[#C5A358]"
                                                    : "border-gray-300 bg-white"
                                                }`}
                                            >
                                                {isSelected && (
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className={`text-sm font-medium transition-colors ${isSelected ? "text-gray-900" : "text-gray-600"}`}>
                                                {item.label}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                type="submit"
                                className="w-full px-10 py-6 bg-gray-900 text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-all shadow-md shadow-gray-900/10"
                            >
                                Add Room
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddRoomPage;
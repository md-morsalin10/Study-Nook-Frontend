"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useState } from "react";

const EditModal = ({ room }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const { name, description, hourlyRate, floor, capacity, amenities = [], imageUrl, _id } = room

    // console.log(room);


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

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ULR}/rooms/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const roomData = await res.json();
        // console.log(roomData, "From modal");


    };

    return (
        <div>
            <Modal>
                <Button
                    className={'w-full py-6 border border-[#0F172A] text-[#0F172A] text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer'}
                    variant="secondary">Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl h-full">
                            <Modal.CloseTrigger />
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-6">

                                        <div className="w-full">
                                            <TextField defaultValue={name} name="name" isRequired className="w-full">
                                                <Label className="text-sm font-semibold mb-2 block text-[#0F172A]">Room Name</Label>
                                                <Input
                                                    placeholder="Enter Your Room Name"
                                                    className="rounded-xl w-full  border-gray-700"
                                                />
                                            </TextField>
                                        </div>

                                        <div className="w-full">
                                            <TextField defaultValue={description} name="description" isRequired className="w-full">
                                                <Label className="text-sm font-semibold mb-2 block text-[#0F172A]">Room Description</Label>
                                                <TextArea
                                                    placeholder="Describe your room..."
                                                    className="rounded-xl min-h-30 w-full border-gray-700"
                                                />
                                            </TextField>
                                        </div>


                                        <div className="w-full">
                                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired className="w-full">
                                                <Label className="text-sm font-semibold mb-2 block text-[#0F172A]">Image URL</Label>
                                                <Input
                                                    placeholder="https://..."
                                                    className="rounded-xl w-full  border-gray-700"
                                                />
                                            </TextField>
                                        </div>


                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <TextField defaultValue={floor} name="floor" isRequired>
                                                <Label className="text-sm font-semibold mb-2 block text-[#0F172A]">Floor</Label>
                                                <Input placeholder="e.g. 3rd Floor" className="rounded-xl  border-gray-700" />
                                            </TextField>

                                            <TextField defaultValue={capacity} name="capacity" type="number" isRequired>
                                                <Label className="text-sm font-semibold mb-2 text-[#0F172A]">Capacity</Label>
                                                <Input placeholder="2" className="rounded-xl border-gray-700" />
                                            </TextField>

                                            <TextField defaultValue={hourlyRate} name="hourlyRate" type="number" isRequired>
                                                <Label className="text-sm font-semibold mb-2 block text-[#0F172A]">Hourly Rate ($)</Label>
                                                <Input placeholder="5" className="rounded-xl border-gray-700" />
                                            </TextField>
                                        </div>


                                        <div className="space-y-4">
                                            <label className="text-sm font-semibold block text-[#0F172A]">
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
                                                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                                                           ${isSelected
                                                                    ? "border-[#C5A358] bg-[#C5A358]/10"
                                                                    : "border-gray-700/50 hover:border-[#C5A358]/50"
                                                                }`}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                value={item.value}
                                                                checked={isSelected}
                                                                onChange={() => toggleAmenity(item.value)}
                                                                className="hidden"
                                                            />
                                                            {/* Custom checkbox box */}
                                                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all
                                                                               ${isSelected
                                                                    ? "bg-[#C5A358] border-[#C5A358]"
                                                                    : "border-gray-500 bg-transparent"
                                                                }`}
                                                            >
                                                                {isSelected && (
                                                                    <svg className="w-3 h-3 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <span className="text-sm font-medium">
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
                                                slot='close'
                                                className="w-full  px-10 py-6 bg-[#C5A358] text-[#0F172A] font-bold text-lg rounded-xl hover:bg-[#a6894a] transition-all shadow-lg shadow-[#C5A358]/10"
                                            >
                                                Update
                                            </Button>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModal;
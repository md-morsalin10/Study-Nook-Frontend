"use client";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const DeleteAlert = ({ room }) => {

    const router = useRouter(); 
    const { _id } = room;

    const handleDelete = async () => {
     
        try {
            const res = await fetch(`http://localhost:5000/rooms/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            });

            const data = await res.json();
            console.log("Deleted successfully:", data);
            toast.success(`${room.name} deleted successfully`)

            router.push('/rooms');
            router.refresh();
        } catch (error) {
            toast.error(`Error deleting room:`, error)
        }
    };

    return (
        <div>
            <AlertDialog>
                <Button
                    className={'py-6 w-full border border-red-200 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer'}
                    variant="danger"
                >
                    Delete Room
                </Button>

                <AlertDialog.Backdrop
                    className="bg-linear-to-t from-[#0F172A]/95 via-[#0F172A]/70 to-transparent"
                    variant="blur"
                >
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-105">
                            <AlertDialog.CloseTrigger />

                            <AlertDialog.Header className="items-center text-center">
                                <AlertDialog.Icon status="danger">
                                    <TriangleExclamation className="size-5" />
                                </AlertDialog.Icon>
                                <AlertDialog.Heading>Permanently delete this room?</AlertDialog.Heading>
                            </AlertDialog.Header>

                            <AlertDialog.Body>
                                <p className="text-center text-gray-400 text-sm">
                                    This action cannot be undone. All data, booking history, and active slots associated with this study room will be permanently removed from our servers.
                                </p>
                            </AlertDialog.Body>

                            <AlertDialog.Footer className="flex-col-reverse gap-2">
                                <Button className="w-full" slot="close">
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleDelete}
                                    className="w-full" slot="close" variant="danger">
                                    Yes, Delete Room
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteAlert;
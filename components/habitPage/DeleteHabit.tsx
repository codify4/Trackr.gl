
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { deleteHabit } from "@/actions/actions";
import { redirect } from "next/navigation";

import { LuTrash2 } from "react-icons/lu";
import { Button } from "@/components/ui/button"


const DeleteHabit = ({ id }: { id: number }) => {
    const [open, setOpen] = useState(false)
  return (
   
        <Dialog open={open} onOpenChange={setOpen}>
            {open && (
                <div className="bg-dark-gray opacity-80 w-full h-full absolute top-0 left-0 z-10"></div>
            )}
            <DialogTrigger asChild>
                <Button variant="default" size="icon" className="text-white bg-square-red rounded-lg hover:bg-[#4E4E4E]">
                    <LuTrash2 size={20}/>
                </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center bg-card-gray border-0 rounded-xl w-11/12">
                <DialogHeader className="text-left">
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                    You cannot undo this action. This habit will permanently be deleted.
                    </DialogDescription>
                </DialogHeader>

                <form action={() => {
                        deleteHabit(id)
                        redirect('/')
                      }}
                    >
                      <Button 
                        type="submit"
                        variant="default" 
                        className="w-full text-white bg-square-red rounded-lg hover:bg-[#E60000]"
                      >
                        <LuTrash2 size={20} className="mr-2"/>
                        Delete
                      </Button>
                    </form>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteHabit
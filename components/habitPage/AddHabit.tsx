'use client'

import { useState } from "react"

import { addHabit } from "../../actions/actions"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { FaPlus } from "react-icons/fa6";

import { redirect } from "next/navigation"

import { cn } from "../../lib/utils";


const AddHabit = ({ className }: { className?: string }) => {
    
    const [name, setName] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {isOpen && (
                <div className="bg-dark-gray opacity-80 w-full h-full absolute top-0 left-0 z-10"></div>
            )}
            <DialogTrigger className={cn("flex flex-row items-center gap-1 bg-square-green rounded-lg cursor-pointer hover:bg-[#00D115] p-2 text-base", className)}>
                <FaPlus size={16} />
                Add Habit
            </DialogTrigger>
            <DialogContent className="w-11/12 bg-card-gray border-0 rounded-xl gap-5">
                <DialogHeader className="flex flex-col justify-start items-start">
                    <DialogTitle>Add New Habit</DialogTitle>
                    <DialogDescription>Enter the name of your new habit.</DialogDescription>
                </DialogHeader>
                <form action={async() => {
                    await addHabit(name)
                    setIsOpen(false)
                    setName('')
                    redirect('/')

                }}>
                    <Input
                        placeholder="Enter a habit"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex bg-input-gray mb-4"
                    />
                    <DialogFooter className="flex flex-row gap-2 items-end justify-end">
                        <Button
                        type="submit"
                        className="bg-square-green rounded-lg cursor-pointer hover:bg-[#00D115]"
                        >
                            Add Habit
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
    </Dialog>
    )
}

export default AddHabit
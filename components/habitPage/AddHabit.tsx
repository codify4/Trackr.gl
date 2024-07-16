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
import { redirect } from "next/navigation"


const AddHabit = () => {
    
    const [name, setName] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="bg-square-green rounded-lg cursor-pointer hover:bg-[#00D115] p-2 text-base">
                Add Habit
            </DialogTrigger>
            <DialogContent className="max-w-[425px] bg-card-gray border-0 rounded-xl gap-5">
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
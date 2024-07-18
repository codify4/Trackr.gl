import { useState } from "react"

import { useMediaQuery } from "react-responsive"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { FiEdit2 } from "react-icons/fi"

import { updateHabit } from "@/actions/actions"
import { redirect } from "next/navigation"


const EditHabit = ({ id }: { id: number }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('');
    
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
 
    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                {open && (
                    <div className="bg-dark-gray opacity-80 w-full h-full absolute top-0 left-0 z-10"></div>
                )}
                <DialogTrigger asChild>
                    <Button variant="default" size="icon" className="text-white bg-square-gray rounded-lg hover:bg-[#4E4E4E]">
                        <FiEdit2 size={20}/>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-card-gray border-0 rounded-xl">
                    <DialogHeader>
                        <DialogTitle>Edit habit</DialogTitle>
                        <DialogDescription>
                        Make changes to your habit here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>

                    <form 
                        className="flex flex-col gap-4"
                        action={() => {
                            updateHabit(id, value)
                            setOpen(false)
                            redirect('/')
                        }}
                    >
                        <Input 
                            autoComplete="off"
                            placeholder="Habit Name" 
                            className="bg-input-gray"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Button 
                            type="submit" 
                            className="bg-square-green" 
                        >
                            Save changes
                        </Button>
                    </form>

                </DialogContent>
            </Dialog>
        )
    }
    
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            {open && (
                <div className="bg-dark-gray opacity-80 w-full h-full absolute top-0 left-0 z-10"></div>
            )}
            <DrawerTrigger asChild>
                <Button variant="default" size="icon" className="text-white bg-square-gray rounded-lg hover:bg-[#4E4E4E]">
                    <FiEdit2 size={20}/>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col items-center bg-card-gray border-0 mb-6">
                <div className="w-20 h-2 rounded-3xl bg-square-gray"></div>
                <div>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Edit habit</DrawerTitle>
                        <DrawerDescription>
                            Make changes to your habit here. Click save when you're done.
                        </DrawerDescription>
                    </DrawerHeader>

                    <form 
                        className="grid items-start gap-4 px-4"
                        action={() => {
                            updateHabit(id, value)
                            setOpen(false)
                            redirect('/')
                        }}
                    >
                        <Input 
                            autoComplete="off"
                            placeholder="Habit Name" 
                            className="bg-input-gray"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Button 
                            type="submit" 
                            className="bg-square-green" 
                        >
                            Save changes
                        </Button>
                    </form>

                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="default" className="bg-btn-gray">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default EditHabit
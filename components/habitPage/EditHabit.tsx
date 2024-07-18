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

import { cn } from "@/lib/utils"
import { updateHabit } from "@/actions/actions"
import { redirect } from "next/navigation"


const EditHabit = ({ id }: { id: number }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('');
    
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
 
    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="default" size="icon" className="text-white bg-square-gray rounded-lg hover:bg-[#4E4E4E]">
                        <FiEdit2 size={20}/>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-card-gray border-0 rounded-xl">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
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
            <DrawerTrigger asChild>
                <Button variant="default" size="icon" className="text-white bg-square-gray rounded-lg hover:bg-[#4E4E4E]">
                    <FiEdit2 size={20}/>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-card-gray border-0">
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
            </DrawerContent>
        </Drawer>
    )
}

export default EditHabit
import { auth } from "@/auth";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import SignOut from "../signout";
import HabitCounter from "./HabitCounter";
  
const AccountSheet = async () => {
    const session = await auth();
    const user = session?.user;
    
    return (
        <>
            {
                user && (
                    <Sheet>
                        <SheetTrigger className="flex lg:hidden w-[200px]">
                            <div className="flex flex-row items-center justify-starts gap-2">
                                <Image 
                                    src={user.image || '/user-circle.svg'} 
                                    priority={true} 
                                    alt="User profile" 
                                    width={50} 
                                    height={50} 
                                    className="rounded-full"
                                />
                                <h1 className="text-xl">{user.name}</h1>
                            </div>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col items-center gap-3 lg:w-1/6 bg-[#000000] border-0 ">
                            <SheetHeader className="flex flex-col items-center w-full">
                                <SheetTitle className="text-2xl self-center">Profile</SheetTitle>
                                <SheetDescription className="flex flex-col items-center gap-3">
                                    <Image 
                                        src={user.image || '/user-circle.svg'} 
                                        priority={true} 
                                        alt="User profile" 
                                        width={100} 
                                        height={100} 
                                        className="rounded-full"
                                    />
                                    <div className="flex flex-row items-center gap-2 text-lg">
                                        <p>Name: </p>
                                        <span className="font-bold"> {user.name}</span>
                                    </div>
                                    <HabitCounter className="text-base font-bold bg-card-gray rounded-lg p-3" />
                                    
                                    <SignOut />
                                    
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                )
            }
        </>
    )
}

export default AccountSheet
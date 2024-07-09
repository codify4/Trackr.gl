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
  
const AccountSheet = async () => {
    const session = await auth();
    const user = session?.user;
    
    return (
        <>
            {
                user && (
                    <Sheet>
                        <SheetTrigger className="w-[200px]">
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
                        <SheetContent className="flex flex-col items-center gap-3 bg-dark-gray border-0 ">
                            <SheetHeader>
                                <SheetTitle className="text-2xl">Profile</SheetTitle>
                                <SheetDescription className="flex flex-col items-center gap-3">
                                    <Image 
                                    src={user.image || '/user-circle.svg'} 
                                    priority={true} 
                                    alt="User profile" 
                                    width={100} 
                                    height={100} 
                                    className="rounded-full"
                                    />
                                    <p className="text-lg">
                                    Name: 
                                    <span className="font-bold"> {user.name}</span>
                                    </p>
                                    <p className="text-lg">Tracking 5 Habits</p>
                                    
                                    <SignOut/>
                                    
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
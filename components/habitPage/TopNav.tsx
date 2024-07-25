/* Next */
import Link from "next/link";
import Image from "next/image";

/* Auth */
import { auth } from "@/auth";

/* Components */
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AddHabit from "./AddHabit";
import SignOut from "../signout";
import HabitCounter from "./HabitCounter";

/* Icons */
import { RiArrowDownSLine } from "react-icons/ri"
import { RxSlash } from "react-icons/rx";

const TopNav = async () => {
    const session = await auth();
    const user = session?.user;

    return (
      <>
        {user && (
          <header className="bg-[#00000059] py-4 px-6 lg:flex hidden items-center w-full justify-between text-base">
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Image src="/logo.png" width={40} height={40} alt="Trackr.gl" />
                  <span className="text-lg font-semibold">Trackr.gl</span>
                </Link>
              </div>
              <RxSlash size={30} className="ml-3 mr-2"/>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 px-2 py-3 rounded-lg hover:bg-square-gray">
                      <Avatar className="w-8 h-8 border mr-1">
                        <AvatarImage src={user?.image || '/user-cicle.svg'} />
                        <AvatarFallback>
                          <Image src='/user-circle.svg' width={60} height={60} alt="User" />
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-base font-medium">{user?.name}</span>
                      <RiArrowDownSLine size={20} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-[#000000] border-0 text-base p-2 rounded-lg">
                    <DropdownMenuItem className="p-2 rounded-lg text-base">
                      {user?.email}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-square-gray mx-1 py-px" />
                    <DropdownMenuItem className="flex items-center justify-center">
                      <SignOut />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <RxSlash size={30} className="mx-2"/>
              <HabitCounter className="text-base font-bold rounded-lg px-2 py-3 hover:bg-square-gray"/>
            </div>
            <AddHabit />
          </header>
        )}
        
      </>
    );
}

export default TopNav;
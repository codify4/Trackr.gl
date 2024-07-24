/* Next */
import Link from "next/link";
import Image from "next/image";

import { auth } from "@/auth";

/* Components */
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AddHabit from "./AddHabit";
import SignOut from "../signout";
import { RiArrowDownSLine } from "react-icons/ri"
import { RxSlash } from "react-icons/rx";

const TopNav = async () => {
    const session = await auth();
    const user = session?.user;

    return (
      <>
        {user && (
          <header className="bg-[#000000] py-4 px-6 lg:flex hidden items-center w-full justify-between text-base">
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Image src="/logo.png" width={40} height={40} alt="Trackr.gl" />
                  <span className="text-lg font-semibold">Trackr.gl</span>
                </Link>
              </div>
              <RxSlash size={30} className="mx-2"/>
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
                  <DropdownMenuContent align="center" className="bg-[#000000] border-0 text-base p-2">
                    <DropdownMenuItem className="p-2 cursor-pointer rounded-lg text-base hover:bg-square-gray">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-2 cursor-pointer rounded-lg text-base hover:bg-square-gray">
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-square-gray mx-1" />
                    <DropdownMenuItem className="flex items-center justify-center">
                      <SignOut />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <AddHabit />
          </header>
        )}
        
      </>
    );
}

export default TopNav;
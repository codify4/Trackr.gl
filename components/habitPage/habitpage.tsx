import { auth } from "@/auth";

import SignInForm from "@/components/signin";
import AccountSheet from "./AccountSheet";
import { Button } from "../ui/button";
import Habit from "./Habit";

const HabitPage = async () => {
    const session = await auth();
    const user = session?.user;

    return (
        <>
            {
                user ? (
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex flex-row items-center justify-center gap-20 mb-5">
                            <AccountSheet />

                            <Button variant="default" className="bg-square-green text-md rounded-lg cursor-pointer hover:bg-[#00D115]">Add Habit</Button>
                        </div>

                        <Habit />
                    </div>
                ) : <SignInForm />
            }
        </>
    )
}

export default HabitPage
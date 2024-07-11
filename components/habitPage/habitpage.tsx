import { auth } from "@/auth";

import SignInForm from "@/components/signin";
import AccountSheet from "./AccountSheet";
import Habit from "./Habit";
import AddHabit from "./AddHabit";

const HabitPage = async () => {
    const session = await auth();
    const user = session?.user;

    return (
        <>
            {
                user ? (
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex flex-row items-center justify-center gap-[75px] mb-5">
                            <AccountSheet />

                            <AddHabit userId={user.id} />
                        </div>

                        <Habit />
                    </div>
                ) : <SignInForm />
            }
        </>
    )
}

export default HabitPage
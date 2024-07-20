import AddHabit from "./AddHabit";
import Habits from "./Habits";

import AccountSheet from "./AccountSheet";


const HabitPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex flex-row items-center justify-center gap-[75px] mb-5">
                    <AccountSheet />
                    <AddHabit />
                </div>

                <Habits />
            </div>
        </>
    );
};

export default HabitPage;
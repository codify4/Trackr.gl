import { getHabitsCount } from '@/actions/actions';

const HabitCounter = async () => {
    const count = await getHabitsCount();

    return (
        <div className="flex flex-row text-square-green text-base font-bold bg-card-gray rounded-lg p-3">
        {count === 1 ? (
            <h2>Tracking {count} Habit</h2>
        ):(
            <h2>Tracking {count} Habits</h2>
        )}
        </div>
    )
};

export default HabitCounter;
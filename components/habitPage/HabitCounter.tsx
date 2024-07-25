import { getHabitsCount } from '@/actions/actions';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

const HabitCounter = async ({ className }: { className?: string }) => {
    const count = await getHabitsCount();

    return (
        <Button variant="ghost" className={cn('flex items-center', className)}>
        {count === 1 ? (
            <h2>Tracking {count} Habit</h2>
        ):(
            <h2>Tracking {count} Habits</h2>
        )}
        </Button>
    )
};

export default HabitCounter;
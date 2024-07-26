'use client'

import { useState, useEffect } from 'react';

import { getHabitsCount } from '@/actions/actions';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

const HabitCounter = ({ className }: { className?: string }) => {
    const [count, setCount] = useState<number>();

    const fetchHabitsCount = async () => {
        try {
            const habitsCount = await getHabitsCount();
            setCount(habitsCount);
            console.log(habitsCount);
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchHabitsCount();
    }, []);

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
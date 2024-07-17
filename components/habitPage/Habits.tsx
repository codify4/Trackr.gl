'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { getHabits } from '../../actions/actions';

import type { SelectHabits } from '../../db/schema/HabitsSchema';

import Habit from './Habit';

const HabitList = () => {
    const [habits, setHabits] = useState<SelectHabits[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const userHabits = await getHabits();
                setHabits(userHabits);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHabits();
        console.log(habits)
    }, []);

    if (loading) {
        return <div className="text-center">Loading habits...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="max-w-md mx-auto">
            {habits.length === 0 ? (
                <p className="text-gray-500">You haven't added any habits yet.</p>
            ) : (
                <div className="space-y-2">
                {habits.map((habit) => (
                    <Habit 
                        key={habit.id}
                        name={habit.name} 
                    />
                ))}
                </div>
            )}
        </div>
    );
};

export default HabitList;
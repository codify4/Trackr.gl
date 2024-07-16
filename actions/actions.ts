'use server'

import { auth } from '@/auth';
import { db } from '../db/drizzle';
import { habits, habitLogs } from '../db/schema/HabitsSchema';
import { eq } from 'drizzle-orm';

export const getHabits = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error('You must be logged in to add a habit');
  }

  return db.select().from(habits).where(eq(habits.userId, session.user.id));
};

export const addHabit = async (name: string) => {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('You must be logged in to add a habit');
  }

  const userId = session.user.id;

  if (!userId || !name) {
    throw new Error('Missing required fields');
  }

  await db.insert(habits).values({ userId, name });
};

export const updateHabit = async (habitId: number, name: string) => {

  if (!name) {
    throw new Error('Missing required fields');
  }

  return db.update(habits).set({ name }).where(eq(habits.id, habitId)).returning();
};

export const deleteHabit = async (habitId: number) => {
  return db.delete(habits).where(eq(habits.id, habitId)).returning();
};

export const logHabit = async (habitId: number, date: Date, completed: boolean) => {
  return db.insert(habitLogs).values({ habitId, date, completed }).returning();
};

export const getHabitLogs = async (habitId: number) => {
  return db.select().from(habitLogs).where(eq(habitLogs.habitId, habitId));
};
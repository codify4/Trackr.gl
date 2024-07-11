"use server"

import { db } from '../db/drizzle';
import { Habits } from '../db/schema/HabitsSchema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getHabits(userId: string) {
  const habits = await db.select().from(Habits).where(eq(Habits.userId, userId));
  return habits;
}

export async function addHabit(userId: string, habitName: string) {
  const now = new Date().toISOString();
  await db.insert(Habits).values({
    userId,
    name: habitName,
    createdAt: now,
    updatedAt: now,
  }).returning();

  revalidatePath('/');
}

export async function deleteHabit(habitId: number) {
  await db.delete(Habits).where(eq(Habits.id, habitId));
  revalidatePath('/habits');
}

export async function editHabit(habitId: number, habitData: { name?: string; frequency?: string }) {
  const now = new Date().toISOString();
  await db.update(Habits)
    .set({
      ...habitData,
      updatedAt: now,
    })
    .where(eq(Habits.id, habitId))
    .returning();

  revalidatePath('/habits');
}
import { pgTable, serial, boolean, integer, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./schema";
import { InferSelectModel } from "drizzle-orm";

export const habits = pgTable('habits', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const habitLogs = pgTable('habit_logs', {
  id: serial('id').primaryKey(),
  habitId: integer('habit_id').references(() => habits.id, { onDelete: 'cascade', onUpdate: 'cascade' }).notNull(),
  date: timestamp('date').notNull(),
  completed: boolean('completed').notNull(),
});

export type SelectHabits = InferSelectModel<typeof habits>;
export type SelectHabitLogs = InferSelectModel<typeof habitLogs>;
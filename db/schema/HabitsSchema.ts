import { pgTable, serial, boolean, integer, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./schema";

export const habits = pgTable('habits', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const habitLogs = pgTable('habit_logs', {
  id: serial('id').primaryKey(),
  habitId: integer('habit_id').notNull().references(() => habits.id),
  date: timestamp('date').notNull(),
  completed: boolean('completed').notNull(),
});
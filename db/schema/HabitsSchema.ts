import { pgTable, serial, varchar, date, boolean, integer } from "drizzle-orm/pg-core";
import { users } from "./schema";

export const Habits = pgTable("habits", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id).notNull(),
  name: varchar("text").notNull(),
  frequency: varchar("frequency").notNull(),
  createdAt: varchar("createdAt").notNull(),
  updatedAt: varchar("updatedAt").notNull(),
});

export const HabitsEntries = pgTable("habits_entries", {
    id: serial("id").primaryKey(),
    habitId: integer("habitId").references(() => Habits.id).notNull(),
    date: date("date").notNull(),
    completed: boolean("completed").notNull(),
    createdAt: varchar("createdAt").notNull(),
    updatedAt: varchar("updatedAt").notNull(),
});
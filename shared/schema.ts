import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const modules = pgTable("modules", {
  id: integer("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: text("duration").notNull(),
  sortOrder: integer("sort_order").notNull(),
  locked: boolean("locked").default(false),
});

export const insertModuleSchema = createInsertSchema(modules);
export type InsertModule = z.infer<typeof insertModuleSchema>;
export type Module = typeof modules.$inferSelect;

export const lessons = pgTable("lessons", {
  id: integer("id").primaryKey(),
  moduleId: integer("module_id").notNull(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  duration: text("duration").notNull(),
  type: text("type").notNull(),
  sortOrder: integer("sort_order").notNull(),
  completed: boolean("completed").default(false),
});

export const insertLessonSchema = createInsertSchema(lessons);
export type InsertLesson = z.infer<typeof insertLessonSchema>;
export type Lesson = typeof lessons.$inferSelect;

export const lessonContent = pgTable("lesson_content", {
  id: integer("id").primaryKey(),
  lessonId: integer("lesson_id").notNull(),
  moduleTitle: text("module_title").notNull(),
  lessonTitle: text("lesson_title").notNull(),
  content: json("content").notNull(),
});

export const insertLessonContentSchema = createInsertSchema(lessonContent);
export type InsertLessonContent = z.infer<typeof insertLessonContentSchema>;
export type LessonContentData = typeof lessonContent.$inferSelect;

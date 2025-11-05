import { type User, type InsertUser, type Module, type Lesson, type LessonContentData } from "@shared/schema";
import { courseModules, courseLessons, lessonContentData } from "@shared/courseData";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  listModules(): Promise<Module[]>;
  getModule(id: number): Promise<Module | undefined>;
  listLessonsByModule(moduleId: number): Promise<Lesson[]>;
  getLesson(id: number): Promise<Lesson | undefined>;
  getLessonContent(lessonId: number): Promise<LessonContentData | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private modules: Map<number, Module>;
  private lessons: Map<number, Lesson>;
  private lessonsContent: Map<number, LessonContentData>;

  constructor() {
    this.users = new Map();
    this.modules = new Map();
    this.lessons = new Map();
    this.lessonsContent = new Map();
    
    this.initializeCourseData();
  }

  private initializeCourseData() {
    courseModules.forEach((module, index) => {
      const id = index + 1;
      this.modules.set(id, { 
        id,
        title: module.title,
        description: module.description || '',
        duration: module.duration,
        sortOrder: module.sortOrder,
        lessonCount: module.lessonCount,
        progress: 0,
        locked: id > 1
      });
    });
    
    courseLessons.forEach((lesson, index) => {
      const id = index + 1;
      this.lessons.set(id, { 
        id,
        moduleId: lesson.moduleId,
        title: lesson.title,
        duration: lesson.duration,
        type: lesson.type,
        sortOrder: lesson.sortOrder,
        completed: false
      });
    });
    
    lessonContentData.forEach((content, index) => {
      const id = index + 1;
      this.lessonsContent.set(id, content);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async listModules(): Promise<Module[]> {
    return Array.from(this.modules.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getModule(id: number): Promise<Module | undefined> {
    return this.modules.get(id);
  }

  async listLessonsByModule(moduleId: number): Promise<Lesson[]> {
    return Array.from(this.lessons.values())
      .filter((lesson) => lesson.moduleId === moduleId)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getLesson(id: number): Promise<Lesson | undefined> {
    return this.lessons.get(id);
  }

  async getLessonContent(lessonId: number): Promise<LessonContentData | undefined> {
    return Array.from(this.lessonsContent.values()).find(
      (content) => content.lessonId === lessonId
    );
  }
}

export const storage = new MemStorage();

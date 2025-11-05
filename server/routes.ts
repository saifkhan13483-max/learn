import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get('/api/modules', async (req, res) => {
    try {
      const modules = await storage.listModules();
      
      const modulesWithProgress = await Promise.all(
        modules.map(async (module) => {
          const lessons = await storage.listLessonsByModule(module.id);
          const completedLessons = lessons.filter(l => l.completed).length;
          const progress = lessons.length > 0 
            ? Math.round((completedLessons / lessons.length) * 100)
            : 0;
          
          return {
            ...module,
            progress,
            lessonCount: lessons.length,
          };
        })
      );
      
      res.json(modulesWithProgress);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch modules' });
    }
  });

  app.get('/api/modules/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const module = await storage.getModule(id);
      
      if (!module) {
        return res.status(404).json({ error: 'Module not found' });
      }
      
      res.json(module);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch module' });
    }
  });

  app.get('/api/modules/:id/lessons', async (req, res) => {
    try {
      const moduleId = parseInt(req.params.id);
      const lessons = await storage.listLessonsByModule(moduleId);
      res.json(lessons);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lessons' });
    }
  });

  app.get('/api/lessons/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const lesson = await storage.getLesson(id);
      
      if (!lesson) {
        return res.status(404).json({ error: 'Lesson not found' });
      }
      
      const content = await storage.getLessonContent(id);
      
      res.json({
        ...lesson,
        content: content || null,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lesson' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

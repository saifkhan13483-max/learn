import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock, Lock, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

//todo: remove mock functionality
const modules = [
  {
    id: 1,
    title: "Introduction to Full-Stack Development",
    duration: "4 hours",
    progress: 100,
    lessons: [
      { id: 1, title: "What is Full-Stack Development?", duration: "15 min", type: "video", completed: true },
      { id: 2, title: "Setting Up Your Development Environment", duration: "30 min", type: "video", completed: true },
      { id: 3, title: "Your First Full-Stack Application", duration: "45 min", type: "project", completed: true },
    ]
  },
  {
    id: 2,
    title: "Frontend Mastery with React",
    duration: "12 hours",
    progress: 60,
    lessons: [
      { id: 4, title: "React Fundamentals", duration: "1 hour", type: "video", completed: true },
      { id: 5, title: "State Management with Hooks", duration: "1.5 hours", type: "video", completed: true },
      { id: 6, title: "Building Interactive UIs", duration: "2 hours", type: "project", completed: false },
      { id: 7, title: "Advanced Patterns", duration: "1 hour", type: "video", completed: false },
    ]
  },
  {
    id: 3,
    title: "Backend Development with Node.js",
    duration: "15 hours",
    progress: 0,
    lessons: [
      { id: 8, title: "Node.js Fundamentals", duration: "1 hour", type: "video", completed: false },
      { id: 9, title: "Express.js Framework", duration: "2 hours", type: "video", completed: false },
      { id: 10, title: "RESTful API Design", duration: "2 hours", type: "project", completed: false },
      { id: 11, title: "Authentication & Authorization", duration: "2 hours", type: "video", completed: false },
    ]
  },
  {
    id: 4,
    title: "Database Design with PostgreSQL",
    duration: "10 hours",
    progress: 0,
    locked: true,
    lessons: []
  },
  {
    id: 5,
    title: "AI-Powered Development",
    duration: "8 hours",
    progress: 0,
    locked: true,
    lessons: []
  },
];

export function ModuleList() {
  const [openItem, setOpenItem] = useState<string>("module-1");

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Overall Progress</h3>
          <span className="text-sm text-muted-foreground">35% Complete</span>
        </div>
        <Progress value={35} className="h-2" data-testid="progress-overall" />
      </div>

      <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
        {modules.map((module) => (
          <AccordionItem key={module.id} value={`module-${module.id}`} className="border rounded-lg mb-3 px-4">
            <AccordionTrigger className="hover:no-underline" data-testid={`accordion-module-${module.id}`}>
              <div className="flex items-center gap-4 w-full pr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                  {module.locked ? (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  ) : module.progress === 100 ? (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  ) : (
                    <span className="text-sm font-bold text-primary">{module.id}</span>
                  )}
                </div>
                
                <div className="flex-1 text-left">
                  <div className="font-semibold mb-1">{module.title}</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {module.duration}
                    </span>
                    {!module.locked && (
                      <span>{module.progress}% complete</span>
                    )}
                  </div>
                </div>
                
                {module.locked && (
                  <Badge variant="secondary">Locked</Badge>
                )}
              </div>
            </AccordionTrigger>
            
            {!module.locked && module.lessons.length > 0 && (
              <AccordionContent>
                <div className="space-y-2 pt-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover-elevate cursor-pointer"
                      data-testid={`lesson-${lesson.id}`}
                    >
                      {lesson.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      
                      <div className="flex-1">
                        <div className="font-medium text-sm">{lesson.title}</div>
                        <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                      </div>
                      
                      <Button size="sm" variant="ghost" className="gap-2">
                        <PlayCircle className="h-4 w-4" />
                        {lesson.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

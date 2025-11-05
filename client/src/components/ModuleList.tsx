import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock, Lock, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

interface Lesson {
  id: number;
  moduleId: number;
  title: string;
  duration: string;
  type: string;
  completed: boolean;
}

interface Module {
  id: number;
  title: string;
  duration: string;
  progress: number;
  locked: boolean;
  lessonCount: number;
}

export function ModuleList() {
  const [openItem, setOpenItem] = useState<string>("module-1");
  const [moduleLessons, setModuleLessons] = useState<Record<number, Lesson[]>>({});
  
  const { data: modules, isLoading } = useQuery<Module[]>({
    queryKey: ['/api/modules'],
  });
  
  useEffect(() => {
    if (!modules) return;
    
    const fetchLessons = async () => {
      const lessonsMap: Record<number, Lesson[]> = {};
      
      for (const module of modules) {
        if (!module.locked && module.lessonCount > 0) {
          try {
            const response = await fetch(`/api/modules/${module.id}/lessons`);
            const lessons = await response.json();
            lessonsMap[module.id] = lessons;
          } catch (error) {
            console.error(`Failed to fetch lessons for module ${module.id}`, error);
          }
        }
      }
      
      setModuleLessons(lessonsMap);
    };
    
    fetchLessons();
  }, [modules]);
  
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" data-testid="skeleton-module" />
        <Skeleton className="h-24 w-full" data-testid="skeleton-module" />
        <Skeleton className="h-24 w-full" data-testid="skeleton-module" />
      </div>
    );
  }
  
  if (!modules || modules.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No modules available</p>
      </div>
    );
  }
  
  const overallProgress = Math.round(
    modules.reduce((sum, m) => sum + m.progress, 0) / modules.length
  );

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Overall Progress</h3>
          <span className="text-sm text-muted-foreground">{overallProgress}% Complete</span>
        </div>
        <Progress value={overallProgress} className="h-2" data-testid="progress-overall" />
      </div>

      <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
        {modules.map((module) => {
          const lessons = moduleLessons[module.id] || [];
          
          return (
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
              
              {!module.locked && lessons.length > 0 && (
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {lessons.map((lesson) => (
                      <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
                        <div
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
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

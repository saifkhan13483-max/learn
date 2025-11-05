import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { LessonContent } from "@/components/LessonContent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";

interface LessonData {
  id: number;
  title: string;
  duration: string;
  type: string;
  moduleId: number;
  content?: {
    moduleTitle: string;
    lessonTitle: string;
    content: {
      overview?: string;
      sections?: Array<{
        type: string;
        text?: string;
        items?: string[];
        language?: string;
        calloutType?: string;
      }>;
    };
  };
}

export default function Lesson() {
  const [match, params] = useRoute("/lesson/:id");
  const lessonId = params?.id ? parseInt(params.id) : null;
  
  const { data: lesson, isLoading } = useQuery<LessonData>({
    queryKey: [`/api/lessons/${lessonId}`],
    enabled: !!lessonId,
  });
  
  if (!match || !lessonId) {
    return <div>Lesson not found</div>;
  }
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <Skeleton className="h-8 w-2/3 mb-8" data-testid="skeleton-breadcrumb" />
            <Skeleton className="h-12 w-3/4 mb-6" data-testid="skeleton-title" />
            <Skeleton className="h-96 w-full" data-testid="skeleton-content" />
          </div>
        </main>
      </div>
    );
  }
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/curriculum">Curriculum</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/curriculum">{lesson.content?.moduleTitle || 'Module'}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{lesson.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <LessonContent lesson={lesson} />
        </div>
      </main>
    </div>
  );
}

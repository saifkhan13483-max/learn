import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface LessonContentProps {
  lesson: {
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
  };
}

export function LessonContent({ lesson }: LessonContentProps) {
  const { title, duration, type, content } = lesson;
  const moduleTitle = content?.moduleTitle || '';
  const lessonContent = content?.content;
  
  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
            {section.text}
          </h3>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {section.text}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="space-y-2 mb-4">
            {section.items?.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      
      case 'code':
        return (
          <div key={index} className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
            <pre>{section.text}</pre>
          </div>
        );
      
      case 'callout':
        return (
          <div key={index} className="bg-primary/10 border-l-4 border-primary p-4 rounded-r mb-4">
            <p className="text-sm">{section.text}</p>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-2">{moduleTitle}</div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="flex items-center gap-4">
          <Badge>{type === 'video' ? 'Video Lesson' : 'Project'}</Badge>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
              </div>
              <p className="text-sm text-muted-foreground">Video Player</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {lessonContent && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Lesson Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            {lessonContent.overview && (
              <p className="text-muted-foreground leading-relaxed mb-4">
                {lessonContent.overview}
              </p>
            )}
            
            {lessonContent.sections?.map((section, index) => renderSection(section, index))}
          </CardContent>
        </Card>
      )}

      {!lessonContent && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Lesson Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This lesson content will be available soon. Check back later for detailed materials and resources.
            </p>
          </CardContent>
        </Card>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Downloadable Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Resources will be available when the full course content is published.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <div className="flex items-center justify-between">
        <Button variant="outline" className="gap-2" data-testid="button-previous" disabled>
          <ArrowLeft className="h-4 w-4" />
          Previous Lesson
        </Button>
        
        <Button className="gap-2" data-testid="button-next" disabled>
          Next Lesson
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface LessonContentProps {
  lessonTitle?: string;
  moduleTitle?: string;
}

export function LessonContent({ 
  lessonTitle = "React Fundamentals",
  moduleTitle = "Frontend Mastery with React"
}: LessonContentProps) {
  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-2">{moduleTitle}</div>
        <h1 className="text-3xl font-bold mb-4">{lessonTitle}</h1>
        <div className="flex items-center gap-4">
          <Badge>Video Lesson</Badge>
          <span className="text-sm text-muted-foreground">45 minutes</span>
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

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Lesson Overview</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            In this lesson, you'll learn the fundamental concepts of React including components, 
            props, and state management. We'll build a simple interactive application to 
            demonstrate these concepts in action.
          </p>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">What You'll Learn</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Understanding React components and JSX syntax</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Working with props to pass data between components</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Managing component state with useState hook</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Building your first interactive React application</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Code Example</h3>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Downloadable Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border hover-elevate cursor-pointer" data-testid="resource-1">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Lesson Notes.pdf</div>
                  <div className="text-sm text-muted-foreground">2.4 MB</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border hover-elevate cursor-pointer" data-testid="resource-2">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Code Examples.zip</div>
                  <div className="text-sm text-muted-foreground">1.8 MB</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <div className="flex items-center justify-between">
        <Button variant="outline" className="gap-2" data-testid="button-previous">
          <ArrowLeft className="h-4 w-4" />
          Previous Lesson
        </Button>
        
        <Button className="gap-2" data-testid="button-next">
          Next Lesson
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

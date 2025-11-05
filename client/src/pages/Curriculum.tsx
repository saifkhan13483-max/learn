import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Clock, Download, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Module {
  number: number;
  title: string;
  duration: string;
  description: string;
  lessons: {
    title: string;
    duration: string;
    topics: string[];
    overview?: string;
  }[];
}

export default function Curriculum() {
  const [curriculum, setCurriculum] = useState<string>("");
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    fetch('/COURSE_CURRICULUM.md')
      .then(response => response.text())
      .then(text => {
        setCurriculum(text);
        parseModules(text);
      });
  }, []);

  const parseModules = (text: string) => {
    const parsedModules: Module[] = [];
    const moduleRegex = /## MODULE (\d+): (.+?) \((\d+\+?) hours?\)/g;
    const matches = [...text.matchAll(moduleRegex)];

    matches.forEach((match, index) => {
      const moduleNumber = parseInt(match[1]);
      const moduleTitle = match[2];
      const duration = match[3];

      // Find the content between this module and the next
      const startIndex = match.index!;
      const endIndex = index < matches.length - 1 ? matches[index + 1].index! : text.length;
      const moduleContent = text.substring(startIndex, endIndex);

      // Extract description - look for text between module heading and first lesson
      let description = '';
      const firstLessonIndex = moduleContent.indexOf('### Lesson');
      if (firstLessonIndex > 0) {
        const descSection = moduleContent.substring(0, firstLessonIndex);
        const paragraphs = descSection.split('\n\n').filter(p =>
          p.trim() &&
          !p.startsWith('##') &&
          !p.startsWith('###') &&
          !p.startsWith('---')
        );
        description = paragraphs.slice(1).join(' ').trim();
      }

      // Extract lessons
      const lessonRegex = /### Lesson \d+\.\d+: (.+?) \((\d+) hours?\)/g;
      const lessonMatches = [...moduleContent.matchAll(lessonRegex)];

      const lessons = lessonMatches.map((lessonMatch, lessonIndex) => {
        const lessonTitle = lessonMatch[1];
        const lessonDuration = lessonMatch[2];

        // Find content between this lesson and next
        const lessonStartIndex = lessonMatch.index!;
        const nextLessonIndex = moduleContent.indexOf('### Lesson', lessonStartIndex + 1);
        const nextModuleIndex = moduleContent.indexOf('## MODULE', lessonStartIndex + 1);
        let lessonEndIndex = moduleContent.length;

        if (nextLessonIndex !== -1 && nextModuleIndex !== -1) {
          lessonEndIndex = Math.min(nextLessonIndex, nextModuleIndex);
        } else if (nextLessonIndex !== -1) {
          lessonEndIndex = nextLessonIndex;
        } else if (nextModuleIndex !== -1) {
          lessonEndIndex = nextModuleIndex;
        }

        const lessonContent = moduleContent.substring(lessonStartIndex, lessonEndIndex);

        // Extract overview
        let overview = '';
        const overviewMatch = lessonContent.match(/\*\*What You'll Learn:\*\*\n((?:- .+\n?)+)/);
        if (overviewMatch) {
          const items = overviewMatch[1].split('\n').filter(t => t.trim().startsWith('-')).map(t => t.replace(/^- /, '').trim());
          overview = items.join(', ');
        }

        // Extract all topics and content sections
        const topics: string[] = [];

        // Extract "What You'll Learn" items
        const learnMatch = lessonContent.match(/\*\*What You'll Learn:\*\*\n((?:- .+\n?)+)/);
        if (learnMatch) {
          const learnItems = learnMatch[1].split('\n').filter(t => t.trim().startsWith('-')).map(t => t.replace(/^- /, '').trim());
          topics.push(...learnItems);
        }

        // Extract "Key Concepts" items
        const conceptsMatch = lessonContent.match(/\*\*Key Concepts:\*\*\n((?:- .+\n?)+)/);
        if (conceptsMatch) {
          const conceptItems = conceptsMatch[1].split('\n').filter(t => t.trim().startsWith('-')).map(t => t.replace(/^- /, '').trim());
          topics.push(...conceptItems);
        }

        // Extract "Key Tools" items
        const toolsMatch = lessonContent.match(/\*\*Key Tools:\*\*\n((?:- .+\n?)+)/);
        if (toolsMatch) {
          const toolItems = toolsMatch[1].split('\n').filter(t => t.trim().startsWith('-')).map(t => t.replace(/^- \*\*(.+?)\*\*: /, '$1 - ').trim());
          topics.push(...toolItems);
        }

        // Extract "Essential [Topic]" items
        const essentialMatch = lessonContent.match(/\*\*Essential .+?:\*\*\n((?:- .+\n?)+)/);
        if (essentialMatch) {
          const essentialItems = essentialMatch[1].split('\n').filter(t => t.trim().startsWith('-')).map(t => t.replace(/^- /, '').trim());
          topics.push(...essentialItems);
        }

        // Extract practice exercises
        const practiceMatch = lessonContent.match(/\*\*(?:Practical Exercise|Practice Project|Hands-On Activity):\*\*\n((?:- .+\n?)+)/);
        if (practiceMatch) {
          const practiceItems = practiceMatch[1].split('\n').filter(t => t.trim().startsWith('-')).map(t => t.replace(/^- /, '').trim());
          topics.push(...practiceItems.map(item => `Practice: ${item}`));
        }

        // Extract code examples section headers
        const codeExampleMatch = lessonContent.match(/\*\*(.+?Concepts?|.+?Examples?|.+?Patterns?):\*\*/g);
        if (codeExampleMatch) {
          topics.push(...codeExampleMatch.map(m => m.replace(/\*\*/g, '')));
        }

        // Extract any numbered list items (common in hands-on activities)
        const numberedMatch = lessonContent.match(/\d+\.\s+\*\*(.+?)\*\*/g);
        if (numberedMatch) {
          const numberedItems = numberedMatch.map(m => m.replace(/\d+\.\s+\*\*/, '').replace(/\*\*/, ''));
          topics.push(...numberedItems);
        }

        return { title: lessonTitle, duration: lessonDuration, topics, overview };
      });

      parsedModules.push({
        number: moduleNumber,
        title: moduleTitle,
        duration: `${duration} hours`,
        description,
        lessons
      });
    });

    setModules(parsedModules);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">Full Course Curriculum</h1>
                <p className="text-lg text-muted-foreground">
                  Complete guide to full-stack web development with AI agents
                </p>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <a href="/COURSE_CURRICULUM.md" download data-testid="button-download-curriculum">
                  <Download className="h-4 w-4" />
                  Download Full PDF
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                8 Modules
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                60+ Hours
              </span>
              <Badge variant="secondary">35 Lessons</Badge>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This comprehensive course teaches you how to build modern full-stack web applications using cutting-edge AI development tools. You'll learn essential web development concepts alongside powerful prompt engineering techniques to leverage AI assistants like Replit and Lovable for faster, more efficient development.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {modules.map((module) => (
              <Card key={module.number}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <span className="text-sm font-bold text-primary">{module.number}</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{module.title}</h2>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{module.duration}</span>
                          </div>
                        </div>
                      </div>
                      {module.description && (
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          {module.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {module.lessons.map((lesson, index) => (
                      <AccordionItem key={index} value={`lesson-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-xs font-medium text-primary">{index + 1}</span>
                              </div>
                              <span className="font-medium text-left">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                              {lesson.duration}h
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-11 pt-2 space-y-4">
                            {lesson.overview && (
                              <div className="bg-muted/50 p-3 rounded-md">
                                <p className="text-sm text-muted-foreground leading-relaxed">{lesson.overview}</p>
                              </div>
                            )}
                            {lesson.topics.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                                  <Book className="h-4 w-4" />
                                  What You'll Learn:
                                </h4>
                                <ul className="space-y-2 border-l-2 border-primary/20 pl-4">
                                  {lesson.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="flex items-start gap-2 text-sm">
                                      <ChevronRight className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                                      <span className={topic.startsWith('Practice:') ? 'font-medium text-primary' : 'text-muted-foreground'}>
                                        {topic}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Course Completion</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Upon completing this course, you will have the skills to build full-stack web applications from scratch, leverage AI tools for 10x faster development, write effective prompts for any development task, and deploy production-ready applications. You'll be equipped with modern web development knowledge and AI-powered development techniques to confidently plan, build, and deploy your own web applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
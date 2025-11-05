import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Clock, PlayCircle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const recentLessons = [
  { id: 1, title: "Building Interactive UIs", module: "Frontend Mastery", progress: 45, thumbnail: "video" },
  { id: 2, title: "State Management with Hooks", module: "Frontend Mastery", progress: 100, thumbnail: "video" },
  { id: 3, title: "Your First Full-Stack Application", module: "Introduction", progress: 100, thumbnail: "project" },
];

const stats = [
  { label: "Lessons Completed", value: "24", icon: BookOpen, color: "text-blue-500" },
  { label: "Hours Learned", value: "18", icon: Clock, color: "text-green-500" },
  { label: "Modules Finished", value: "2/5", icon: TrendingUp, color: "text-purple-500" },
  { label: "Certificates", value: "0", icon: Award, color: "text-orange-500" },
];

export function UserDashboard() {
  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome back, Student!</h2>
        <p className="text-muted-foreground">Continue your learning journey</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} data-testid={`stat-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Course Completion</span>
              <span className="text-sm text-muted-foreground">35%</span>
            </div>
            <Progress value={35} className="h-2" data-testid="progress-course" />
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">3</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">42</div>
              <div className="text-sm text-muted-foreground">Remaining</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Continue Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center gap-4 p-4 rounded-lg border hover-elevate cursor-pointer"
                data-testid={`lesson-card-${lesson.id}`}
              >
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-semibold mb-1">{lesson.title}</div>
                  <div className="text-sm text-muted-foreground mb-2">{lesson.module}</div>
                  
                  <div className="flex items-center gap-2">
                    <Progress value={lesson.progress} className="h-1.5 flex-1" />
                    <span className="text-xs text-muted-foreground">{lesson.progress}%</span>
                  </div>
                </div>
                
                <Button variant="outline" className="flex-shrink-0">
                  {lesson.progress === 100 ? "Review" : "Continue"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Achievements</CardTitle>
            <Badge variant="secondary">Coming Soon</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg border-2 border-dashed flex items-center justify-center"
                data-testid={`achievement-${i}`}
              >
                <Award className="h-8 w-8 text-muted-foreground/50" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

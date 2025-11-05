import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Master both frontend and backend technologies including React, Node.js, Express, and PostgreSQL with hands-on projects."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description: "Learn to leverage AI tools like GitHub Copilot and ChatGPT to accelerate your development workflow and productivity."
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description: "Build portfolio-worthy applications from scratch and deploy them to production using modern DevOps practices."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a thriving community of developers, get mentorship, and collaborate on projects with peers worldwide."
  }
];

export function CourseOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gain comprehensive skills to become a professional full-stack developer
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_workspace_image_5a6b8558.png";

export function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                New Course Available
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Full-Stack Web Development with{" "}
                <span className="text-primary">Modern Tools and AI Agents</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Learn to build and deploy full-stack applications with cutting-edge AI assistance. 
                Master React, Node.js, PostgreSQL, and AI-powered development workflows from beginner to expert.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-start-learning">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-watch-intro">
                <PlayCircle className="h-5 w-5" />
                Watch Intro
              </Button>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 mt-4">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold">12,000+</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Students Enrolled</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold">4.9/5</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Course Rating</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold">50+</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Hours Content</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            <img
              src={heroImage}
              alt="Modern developer workspace with AI tools"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

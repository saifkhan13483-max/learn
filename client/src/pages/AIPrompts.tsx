import { Navbar } from "@/components/Navbar";
import { AIPromptBuilder } from "@/components/AIPromptBuilder";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function AIPrompts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Master AI-Powered Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn to write powerful prompts that help AI tools like Copilot, ChatGPT, and Replit Agent 
                    understand your requirements and generate high-quality code. The quality of your prompts 
                    directly impacts the quality of AI-generated solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <AIPromptBuilder />
        </div>
      </main>
    </div>
  );
}

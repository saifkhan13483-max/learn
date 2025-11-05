import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const examples = [
  {
    category: "Poor Prompt",
    prompt: "Make a website",
    explanation: "Too vague - no context about purpose, features, or tech stack"
  },
  {
    category: "Good Prompt",
    prompt: "Create a responsive landing page for a SaaS product with a hero section, features grid, pricing table, and contact form. Use React and Tailwind CSS.",
    explanation: "Specific requirements, clear deliverables, and defined tech stack"
  },
  {
    category: "Excellent Prompt",
    prompt: "Build a React dashboard for analytics using TypeScript and Recharts. Include: 1) A header with user profile and theme toggle, 2) Sidebar navigation with 5 menu items, 3) Main content area with 4 metric cards showing KPIs, 4) Line chart for monthly revenue trends, 5) Table of recent transactions. Use Tailwind for styling and ensure mobile responsivity.",
    explanation: "Highly detailed with numbered requirements, specific libraries, and clear UX expectations"
  }
];

export function AIPromptBuilder() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    //todo: remove mock functionality
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResponse(`Based on your prompt, here's a structured approach:

1. **Project Setup**
   - Initialize a new React project with Vite
   - Install required dependencies
   - Configure Tailwind CSS

2. **Component Structure**
   - Create a Layout component for overall structure
   - Build individual feature components
   - Implement responsive navigation

3. **Key Considerations**
   - Use TypeScript for type safety
   - Follow accessibility best practices
   - Implement proper error handling

Would you like me to elaborate on any specific part?`);
    setIsGenerating(false);
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">AI Prompt Engineering</h2>
        <p className="text-muted-foreground">
          Learn to write effective prompts that get accurate results from AI tools
        </p>
      </div>

      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="practice" data-testid="tab-practice">Practice</TabsTrigger>
          <TabsTrigger value="examples" data-testid="tab-examples">Examples</TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Prompt Builder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Prompt</label>
                <Textarea
                  placeholder="Write your prompt here... Be specific about what you want to build, the technologies to use, and any specific requirements."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32"
                  data-testid="input-prompt"
                />
              </div>
              
              <Button 
                onClick={handleGenerate} 
                disabled={!prompt || isGenerating}
                className="gap-2 w-full sm:w-auto"
                data-testid="button-generate"
              >
                <Sparkles className="h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate AI Response"}
              </Button>
            </CardContent>
          </Card>

          {response && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>AI Response</CardTitle>
                <Button variant="outline" size="sm" className="gap-2" data-testid="button-copy">
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg">
                    {response}
                  </pre>
                </div>
                
                <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                  <span className="text-sm text-muted-foreground">Was this helpful?</span>
                  <Button variant="outline" size="sm" className="gap-2" data-testid="button-helpful">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" data-testid="button-not-helpful">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="examples" className="space-y-4">
          {examples.map((example, index) => (
            <Card key={index} data-testid={`example-${index}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{example.category}</CardTitle>
                  <Badge variant={example.category === "Excellent Prompt" ? "default" : example.category === "Good Prompt" ? "secondary" : "outline"}>
                    {example.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm">{example.prompt}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  💡 {example.explanation}
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

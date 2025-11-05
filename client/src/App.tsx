import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Curriculum from "@/pages/Curriculum";
import FullCurriculum from "@/pages/FullCurriculum";
import AIPrompts from "@/pages/AIPrompts";
import Dashboard from "@/pages/Dashboard";
import Lesson from "@/pages/Lesson";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/full-curriculum" component={FullCurriculum} />
      <Route path="/ai-prompts" component={AIPrompts} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/lesson/:id" component={Lesson} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

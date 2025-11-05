import { Navbar } from "@/components/Navbar";
import { ModuleList } from "@/components/ModuleList";

export default function Curriculum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Course Curriculum</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive step-by-step journey from beginner to professional full-stack developer
            </p>
          </div>
          
          <ModuleList />
        </div>
      </main>
    </div>
  );
}

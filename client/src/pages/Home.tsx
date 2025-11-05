import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CourseOverview } from "@/components/CourseOverview";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CourseOverview />
        <Testimonials />
        <CTASection />
      </main>
      <footer className="border-t py-12 bg-muted/20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 DevLearn AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

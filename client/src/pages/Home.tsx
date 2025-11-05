import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Card className="max-w-2xl w-full mx-auto my-8">
          <CardHeader>
            <CardTitle className="text-3xl">Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No courses available at the moment.
            </p>
          </CardContent>
        </Card>
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
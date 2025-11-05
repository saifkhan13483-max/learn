import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of developers mastering full-stack development with AI
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2" data-testid="button-cta-enroll">
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" data-testid="button-cta-curriculum">
              View Curriculum
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Certificate of completion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

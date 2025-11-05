import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import sarahImage from "@assets/generated_images/Student_testimonial_Sarah_af9b0a4c.png";
import michaelImage from "@assets/generated_images/Student_testimonial_Michael_df619321.png";
import priyaImage from "@assets/generated_images/Student_testimonial_Priya_411bd43e.png";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full-Stack Developer at Google",
    image: sarahImage,
    quote: "This course transformed my career. The AI-powered learning approach helped me master full-stack development in just 6 months. Now I'm building production apps at Google!"
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Engineer at Stripe",
    image: michaelImage,
    quote: "The hands-on projects and real-world scenarios prepared me perfectly for my role. The AI prompting section alone was worth the entire course price."
  },
  {
    name: "Priya Patel",
    role: "Tech Lead at Microsoft",
    image: priyaImage,
    quote: "Best investment in my career. The comprehensive curriculum and supportive community made learning complex topics enjoyable and practical."
  }
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who transformed their careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

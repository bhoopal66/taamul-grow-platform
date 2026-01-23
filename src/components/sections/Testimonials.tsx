import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "Taamul Credit made opening our business account incredibly simple. What would have taken us months, they completed in just one week. Highly recommended!",
    author: "Ahmed Al Mansouri",
    role: "CEO",
    company: "Dubai Tech Solutions",
  },
  {
    quote:
      "We secured a business loan at an excellent rate thanks to Taamul's expert guidance. Their team was professional and supportive throughout the entire process.",
    author: "Sarah Johnson",
    role: "Founder",
    company: "Bloom Creative Agency",
  },
  {
    quote:
      "As a startup, we struggled to find a bank that would work with us. Taamul Credit connected us with the perfect banking partner for our needs.",
    author: "Khalid Rahman",
    role: "Co-founder",
    company: "GreenLeaf Innovations",
  },
  {
    quote:
      "The team's knowledge of UAE banking regulations saved us significant time and money. They truly understand the local market.",
    author: "Maria Chen",
    role: "Managing Director",
    company: "Asia-Gulf Trading",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Businesses Like Yours"
          subtitle="See what our clients say about working with Taamul Credit."
        />

        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-accent-foreground" />
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

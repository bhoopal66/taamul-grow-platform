import { Shield, Clock, TrendingUp, HeadphonesIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description:
      "Our team of financial experts guides you through every step, ensuring you make informed decisions.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "We streamline the process to get you approved quickly. Most accounts open within 5-7 business days.",
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description:
      "We negotiate on your behalf to secure the most competitive rates and terms from our partner banks.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Get personalized support from a dedicated relationship manager throughout your journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Choose Us"
          title="Your Success Is Our Priority"
          subtitle="We go above and beyond to make your business banking experience seamless."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

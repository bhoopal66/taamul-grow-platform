import { FileText, Users, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Apply Online",
    description:
      "Complete our simple online form in just 2 minutes. Upload your basic documents and tell us what you need.",
  },
  {
    step: 2,
    icon: Users,
    title: "Get Matched",
    description:
      "Our experts review your requirements and connect you with the best banking and financing options.",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Get Approved",
    description:
      "Complete your application with your chosen partner. Receive your account or funds quickly.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="How It Works"
          title="Simple. Fast. Transparent."
          subtitle="Get started with Taamul Credit in three easy steps."
        />

        <div className="relative mt-16">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full bg-accent/10" />
                  <div className="relative w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-accent-foreground">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-lg bg-card border border-border flex items-center justify-center mb-4 shadow-sm">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Building2, Banknote, ArrowRight, FileText, Users, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Account Opening",
    description:
      "Open your UAE business bank account quickly and hassle-free. We connect you with the right bank for your specific needs and guide you through every step of the process.",
    benefits: [
      "Access to multiple partner banks",
      "Fast-track processing (5-7 business days)",
      "Expert documentation support",
      "All business types welcome",
      "Dedicated relationship manager",
    ],
    href: "/services/business-account-opening",
  },
  {
    icon: Banknote,
    title: "Business Loans & Financing",
    description:
      "Access flexible financing solutions to fuel your business growth. From working capital to equipment financing, we help you find the right funding at competitive rates.",
    benefits: [
      "Financing up to AED 5 million",
      "Competitive interest rates",
      "Flexible repayment terms",
      "Quick approval process",
      "Multiple financing options",
    ],
    href: "/services/business-loans",
  },
];

const processSteps = [
  {
    icon: FileText,
    step: 1,
    title: "Submit Your Application",
    description: "Fill out our simple online form with your business details.",
  },
  {
    icon: Users,
    step: 2,
    title: "Expert Review",
    description: "Our team reviews your requirements and matches you with the best options.",
  },
  {
    icon: CheckCircle,
    step: 3,
    title: "Get Your Solution",
    description: "Complete the process with your chosen partner and receive your account or funds.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Financial Solutions for Your Business
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Whether you're opening your first business account or seeking funding
              to scale, we've got you covered with expert guidance and fast processing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="gold" size="lg" asChild>
                  <Link to={service.href}>
                    Explore {service.title.split(" ")[0]} Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            subtitle="A simple, transparent process designed to get you results quickly."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-accent-foreground">
                    {step.step}
                  </span>
                </div>
                <div className="w-12 h-12 mx-auto rounded-lg bg-card border border-border flex items-center justify-center mb-4 shadow-sm">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the right solution for your business.
          </p>
          <Button variant="navy" size="xl" asChild>
            <Link to="/contact">
              Talk to Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

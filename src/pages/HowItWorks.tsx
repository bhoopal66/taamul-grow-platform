import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FileText, Users, CheckCircle, Shield, DollarSign, Headphones, ArrowRight, Play } from "lucide-react";

const mainSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Apply",
    description: "Complete our simple online form in just 2 minutes. Upload basic documents and tell us about your business needs.",
    details: [
      "Fill out the eligibility form",
      "Upload required documents",
      "Specify your requirements",
    ],
  },
  {
    step: 2,
    icon: Users,
    title: "We Match You",
    description: "Our experts review your profile and connect you with the best banking and financing options available.",
    details: [
      "Expert review within 24 hours",
      "Personalized recommendations",
      "Multiple options to choose from",
    ],
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Get Approved",
    description: "Complete your application with the chosen partner and receive your account or funds quickly.",
    details: [
      "Dedicated support throughout",
      "Fast-track processing",
      "Account/funds in 5-7 days",
    ],
  },
];

const differentiators = [
  {
    icon: DollarSign,
    title: "No Upfront Fees",
    description: "Our matching service is completely free. You only pay after successful completion.",
  },
  {
    icon: Shield,
    title: "Access to Multiple Banks",
    description: "We work with 15+ partner banks to find you the best match for your needs.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our team has decades of experience in UAE banking and financing.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We're here for you even after your account is opened or loan is disbursed.",
  },
];

const transparency = [
  {
    title: "How We Earn",
    description: "We receive a commission from our partner banks when we successfully connect you. This means our service is free for you.",
  },
  {
    title: "Your Data Security",
    description: "Your information is encrypted and never shared without your consent. We comply with all UAE data protection regulations.",
  },
  {
    title: "No Hidden Fees",
    description: "We are upfront about all costs. Bank fees are disclosed before you make any commitment.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Simple. Fast. Transparent.
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We've designed our process to be as straightforward as possible.
              Get started in minutes and achieve your goals in days.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact#eligibility">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="The Process"
            title="Three Steps to Success"
            subtitle="From application to approval in just days, not weeks."
          />

          <div className="mt-16 space-y-12">
            {mainSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-10 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-muted/50 rounded-2xl p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-24 h-24 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="h-12 w-12 text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Choose Us"
            title="What Makes Us Different"
            subtitle="We go above and beyond to ensure your success."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Promise"
            title="Complete Transparency"
            subtitle="We believe in honest, clear communication at every step."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {transparency.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-xl border border-border p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-primary rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4 cursor-pointer hover:bg-accent/30 transition-colors">
                  <Play className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  Watch How It Works
                </h3>
                <p className="text-primary-foreground/70">
                  A 2-minute overview of our process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have simplified their banking with Taamul Credit.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact#eligibility">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;

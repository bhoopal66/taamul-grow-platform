import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Laptop, Handshake } from "lucide-react";

const bankLogos = [
  "Emirates NBD", "ADCB", "Mashreq", "RAK Bank", "CBD", "FAB",
  "Dubai Islamic Bank", "ENBD", "Ajman Bank", "UNB", "ADIB", "NBF"
];

const fintechPartners = [
  "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"
];

const benefits = [
  {
    icon: Building2,
    title: "Extensive Network",
    description: "Access to 15+ leading UAE banks and financial institutions.",
  },
  {
    icon: Laptop,
    title: "Streamlined Process",
    description: "Our technology integrates with partner systems for faster processing.",
  },
  {
    icon: Handshake,
    title: "Trusted Relationships",
    description: "Years of partnership ensure priority handling for our clients.",
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Trusted by Leading Financial Institutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We partner with the UAE's top banks and fintech companies to bring
              you the best banking and financing options available.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Banking Partners"
            title="Leading UAE Banks"
            subtitle="We work with major banks to offer you the widest range of options."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {bankLogos.map((bank, index) => (
              <div
                key={bank}
                className="bg-card rounded-xl border border-border p-6 flex items-center justify-center h-24 hover:border-accent/50 hover:shadow-sm transition-all animate-fade-in grayscale hover:grayscale-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-muted-foreground text-center">
                  {bank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech Partners */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Technology Partners"
            title="Fintech & Tech Partners"
            subtitle="We leverage cutting-edge technology to streamline your experience."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {fintechPartners.map((partner, index) => (
              <div
                key={partner}
                className="bg-card rounded-xl border border-border p-6 flex items-center justify-center h-24 hover:border-accent/50 hover:shadow-sm transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-muted-foreground text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why It Matters"
            title="Benefits of Our Partnerships"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-8 bg-card rounded-xl border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Join Us"
              title="Become a Partner"
              subtitle="Are you a bank or fintech company interested in partnering with us? We'd love to hear from you."
            />
            <Button variant="navy" size="xl" className="mt-8" asChild>
              <Link to="/contact">
                Partner Inquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
            Access our network of trusted partners and find the right solution for your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact#eligibility">
              Check Eligibility
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;

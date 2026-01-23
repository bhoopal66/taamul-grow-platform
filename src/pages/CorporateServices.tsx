import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FileText, Stamp, RefreshCw, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "PRO Services",
    description: "Government liaison and documentation services for visa processing, labor cards, and more.",
  },
  {
    icon: Stamp,
    title: "Business Setup Consultation",
    description: "Expert advice on company formation, licensing, and regulatory compliance in the UAE.",
  },
  {
    icon: ClipboardCheck,
    title: "Document Clearing",
    description: "Fast and reliable document attestation, legalization, and clearing services.",
  },
  {
    icon: RefreshCw,
    title: "License Renewal Support",
    description: "Hassle-free trade license renewal and compliance management.",
  },
];

const CorporateServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              Corporate Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Additional Business Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Beyond banking and financing, we offer comprehensive corporate
              services to support your business operations in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Corporate Services"
            subtitle="Comprehensive support for your business needs."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-xl border border-border p-8 hover:border-accent/50 hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inquire About Corporate Services
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our corporate services and how we can support your business.
          </p>
          <Button variant="navy" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateServices;

import { Link } from "react-router-dom";
import { Building2, Banknote, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    icon: Building2,
    title: "Business Account Opening",
    description:
      "Open your UAE business bank account quickly and hassle-free. We connect you with the right bank for your needs.",
    features: [
      "Multiple bank options",
      "Fast-track processing",
      "Expert documentation support",
      "All business types welcome",
    ],
    href: "/services/business-account-opening",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Banknote,
    title: "Business Loans & Financing",
    description:
      "Access flexible financing solutions to fuel your business growth. Competitive rates and quick approvals.",
    features: [
      "Up to AED 5 million",
      "Flexible terms",
      "Competitive interest rates",
      "Quick approval process",
    ],
    href: "/services/business-loans",
    color: "from-primary/10 to-primary/5",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Services"
          title="Financial Solutions Built for Growth"
          subtitle="Whether you're opening your first business account or seeking funding to scale, we've got you covered."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

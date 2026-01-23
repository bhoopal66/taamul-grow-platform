import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Banknote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Financial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Trusted by 500+ UAE Businesses
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Smart Business Banking &{" "}
            <span className="text-accent">Financing</span> Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Open your business account in days, not weeks. Access flexible financing 
            to fuel your growth. We make business banking simple.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact#eligibility">
                Check Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>

          {/* Quick Service Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link
              to="/services/business-account-opening"
              className="group flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Building2 className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold">Business Accounts</h3>
                <p className="text-primary-foreground/60 text-sm">Open in days</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/services/business-loans"
              className="group flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Banknote className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold">Business Loans</h3>
                <p className="text-primary-foreground/60 text-sm">Up to AED 5M</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

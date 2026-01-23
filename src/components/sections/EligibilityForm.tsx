import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function EligibilityForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application Received!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="eligibility" className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6 animate-scale-in">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Thank You!
            </h2>
            <p className="text-primary-foreground/80 text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We've received your application. One of our experts will contact you within 24 hours to discuss your options.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="eligibility" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative">
        <SectionHeading
          badge="Get Started"
          title="Check Your Eligibility in 60 Seconds"
          subtitle="Tell us about your business and we'll show you the best options available."
          className="text-primary-foreground [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80 [&_span]:bg-primary-foreground/10 [&_span]:text-accent"
        />

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto mt-12 bg-card/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-primary-foreground/10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary-foreground">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+971 XX XXX XXXX"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="business-type" className="text-primary-foreground">
                Business Type
              </Label>
              <Select required>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="llc">LLC</SelectItem>
                  <SelectItem value="freezone">Free Zone Company</SelectItem>
                  <SelectItem value="mainland">Mainland Company</SelectItem>
                  <SelectItem value="sole">Sole Proprietorship</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-primary-foreground">
                Service Needed
              </Label>
              <Select required>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">Business Account Opening</SelectItem>
                  <SelectItem value="loan">Business Loan / Financing</SelectItem>
                  <SelectItem value="both">Both Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-primary-foreground">
                Annual Revenue (AED)
              </Label>
              <Select>
                <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">Less than 500,000</SelectItem>
                  <SelectItem value="500k-1m">500,000 - 1,000,000</SelectItem>
                  <SelectItem value="1m-5m">1,000,000 - 5,000,000</SelectItem>
                  <SelectItem value="5m+">More than 5,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full mt-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Check My Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-center text-primary-foreground/60 text-sm mt-4">
            Your information is secure and will never be shared.
          </p>
        </form>
      </div>
    </section>
  );
}

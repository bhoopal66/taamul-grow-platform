import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DollarSign, Users, Megaphone, HeadphonesIcon, CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Commission",
    description: "Receive competitive commission for every successful referral.",
  },
  {
    icon: Users,
    title: "No Cost to Join",
    description: "Join our program for free with no hidden fees or commitments.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "Get access to marketing materials and resources.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Manager",
    description: "A dedicated partner manager to support you.",
  },
];

const steps = [
  { step: 1, title: "Sign Up", description: "Complete the application form below." },
  { step: 2, title: "Refer Businesses", description: "Share our services with your network." },
  { step: 3, title: "Earn Commissions", description: "Get paid for successful referrals." },
];

const faqs = [
  {
    question: "Who can become an associate?",
    answer: "Anyone with a network of business owners can join – consultants, accountants, lawyers, real estate agents, and more.",
  },
  {
    question: "How much can I earn?",
    answer: "Commission rates vary based on the service type and deal size. Contact us for specific rates.",
  },
  {
    question: "How do I track my referrals?",
    answer: "You'll receive access to a partner dashboard where you can track all your referrals and earnings.",
  },
  {
    question: "When do I get paid?",
    answer: "Commissions are paid within 30 days of successful deal completion.",
  },
];

const Associates = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you soon.",
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              Associates Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Earn by Referring Businesses
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Partner with Taamul Credit and earn commissions by referring businesses
              that need banking and financing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Program Benefits"
            title="Why Partner With Us"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="How It Works"
            title="Three Simple Steps"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                badge="Join Us"
                title="Apply to Become an Associate"
                align="left"
              />
              <p className="mt-6 text-muted-foreground">
                Fill out the form and our team will review your application.
                We'll be in touch within 2-3 business days.
              </p>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-foreground mb-6">Common Questions</h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-accent/50"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-sm">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="assoc-name">Full Name</Label>
                  <Input id="assoc-name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assoc-company">Company (if applicable)</Label>
                  <Input id="assoc-company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assoc-email">Email Address</Label>
                  <Input id="assoc-email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assoc-phone">Phone Number</Label>
                  <Input id="assoc-phone" type="tel" placeholder="+971 XX XXX XXXX" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assoc-intro">Brief Introduction</Label>
                  <Textarea
                    id="assoc-intro"
                    placeholder="Tell us about yourself and your network..."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Apply to Program
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Associates;

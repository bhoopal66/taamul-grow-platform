import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  CreditCard,
  Globe,
  Shield,
  Clock,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const benefits = [
  { icon: Building2, title: "Multiple Bank Options", description: "Access to UAE's leading banks" },
  { icon: Clock, title: "Fast Processing", description: "Account opening in 5-7 days" },
  { icon: Users, title: "Expert Guidance", description: "Dedicated relationship manager" },
  { icon: Shield, title: "Competitive Fees", description: "Best rates negotiated for you" },
  { icon: CreditCard, title: "Online Banking", description: "Full digital access" },
  { icon: Globe, title: "Multi-Currency", description: "Handle international transactions" },
];

const accountTypes = [
  {
    title: "Current Accounts",
    description: "Everyday business banking with unlimited transactions and easy fund access.",
  },
  {
    title: "Savings Accounts",
    description: "Earn competitive interest on your business reserves.",
  },
  {
    title: "Multi-Currency Accounts",
    description: "Manage multiple currencies for international trade.",
  },
];

const requirements = [
  "Trade License (valid)",
  "Emirates ID (shareholders/signatories)",
  "Passport copies (shareholders/signatories)",
  "Memorandum of Association",
  "Proof of business address",
  "Bank reference letter (if available)",
];

const timeline = [
  { step: 1, title: "Application", description: "Submit your documents", duration: "Day 1" },
  { step: 2, title: "Review", description: "We verify your documents", duration: "Day 2-3" },
  { step: 3, title: "Bank Selection", description: "Choose your preferred bank", duration: "Day 4" },
  { step: 4, title: "Account Opening", description: "Complete bank formalities", duration: "Day 5-7" },
];

const faqs = [
  {
    question: "How long does it take to open a business account?",
    answer: "With Taamul Credit, most business accounts are opened within 5-7 business days, depending on document completeness and bank processing times.",
  },
  {
    question: "What documents are needed to open an account?",
    answer: "You'll need a valid trade license, Emirates IDs of shareholders, passport copies, MOA, proof of address, and ideally a bank reference letter. We'll guide you through the specific requirements.",
  },
  {
    question: "Which banks do you work with?",
    answer: "We partner with leading UAE banks including major local and international institutions. We'll recommend the best options based on your business needs and requirements.",
  },
  {
    question: "What are the fees for your service?",
    answer: "Our consultation is free. We charge a transparent service fee only after successful account opening. Contact us for specific pricing based on your requirements.",
  },
  {
    question: "Can startups open business accounts?",
    answer: "Yes! We work with businesses of all sizes, including startups. We have experience helping new businesses find the right banking partners.",
  },
  {
    question: "Do you help with free zone company accounts?",
    answer: "Absolutely. We assist companies from all UAE free zones, mainland entities, and other business structures.",
  },
];

const BusinessAccountOpening = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              Business Accounts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Open Your Business Account in Days, Not Weeks
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We simplify the process of opening a business bank account in the UAE.
              Get expert guidance and fast-track your application.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact#eligibility">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="What We Offer"
                title="Your Path to Business Banking"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  Opening a business bank account in the UAE can be complex, with
                  varying requirements across different banks. We've built relationships
                  with major financial institutions to streamline this process for you.
                </p>
                <p>
                  Whether you're a startup, SME, or established corporation, our team
                  will guide you through document preparation, bank selection, and the
                  entire application process.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Account Types"
            title="Accounts We Help You Open"
            subtitle="Choose the right account type for your business needs."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {accountTypes.map((type, index) => (
              <div
                key={type.title}
                className="bg-card rounded-xl p-8 border border-border text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Requirements"
                title="What You'll Need"
                align="left"
              />
              <p className="mt-6 text-muted-foreground">
                Here's a general checklist of documents needed. Requirements may vary
                by bank and business type. We'll provide a personalized list based on
                your situation.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li
                    key={req}
                    className="flex items-center gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <FileCheck className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Timeline"
            title="Your Account Opening Journey"
            subtitle="From application to account access in just 5-7 business days."
          />
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-accent/20" />
              <div className="grid md:grid-cols-4 gap-8">
                {timeline.map((step, index) => (
                  <div
                    key={step.step}
                    className="relative text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-4 relative z-10 shadow-lg">
                      <span className="text-xl font-bold text-accent-foreground">{step.step}</span>
                    </div>
                    <div className="text-xs font-medium text-accent mb-2">{step.duration}</div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about opening a business account."
          />
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Open Your Account?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your application today and get your business account opened in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact#eligibility">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessAccountOpening;

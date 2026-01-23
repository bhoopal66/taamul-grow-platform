import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Banknote,
  TrendingUp,
  Clock,
  Shield,
  Calculator,
  FileText,
  ArrowRight,
  Briefcase,
  Building,
  Truck,
  Expand,
} from "lucide-react";

const loanTypes = [
  {
    icon: Briefcase,
    title: "Working Capital Loans",
    description: "Fund day-to-day operations and manage cash flow",
    amount: "Up to AED 2M",
    term: "6-24 months",
  },
  {
    icon: Truck,
    title: "Equipment Financing",
    description: "Purchase or lease business equipment and machinery",
    amount: "Up to AED 3M",
    term: "12-60 months",
  },
  {
    icon: Building,
    title: "Trade Finance",
    description: "Fund import/export and international trade",
    amount: "Up to AED 5M",
    term: "30-180 days",
  },
  {
    icon: Expand,
    title: "Expansion Loans",
    description: "Fund business growth and new ventures",
    amount: "Up to AED 5M",
    term: "12-60 months",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Competitive Rates", description: "Best rates in the market" },
  { icon: Clock, title: "Quick Approval", description: "Decision within 48 hours" },
  { icon: Shield, title: "Flexible Terms", description: "Tailored to your needs" },
  { icon: Calculator, title: "No Hidden Fees", description: "Complete transparency" },
  { icon: FileText, title: "Minimal Paperwork", description: "Streamlined process" },
  { icon: Banknote, title: "High Amounts", description: "Up to AED 5 million" },
];

const eligibility = [
  "Business operating for at least 1 year",
  "Valid UAE trade license",
  "Minimum annual revenue of AED 500,000",
  "Clean credit history",
  "Audited financial statements (for larger amounts)",
];

const faqs = [
  {
    question: "What interest rates do you offer?",
    answer: "Interest rates vary based on your business profile, loan amount, and term. We work with multiple lenders to secure competitive rates, typically ranging from 8% to 18% APR. Contact us for a personalized quote.",
  },
  {
    question: "How much can I borrow?",
    answer: "Loan amounts range from AED 50,000 to AED 5 million, depending on your business revenue, credit history, and the type of financing. We'll help you determine the optimal amount.",
  },
  {
    question: "What is the approval timeline?",
    answer: "Most applications receive a decision within 48 hours. Fund disbursement typically takes 5-7 business days after approval and documentation.",
  },
  {
    question: "Can startups apply for financing?",
    answer: "While most lenders require at least 1 year of operation, we have options for newer businesses with strong revenue or collateral. Contact us to discuss your situation.",
  },
  {
    question: "Is collateral required?",
    answer: "Collateral requirements depend on the loan amount and type. Many of our working capital loans up to AED 500,000 are unsecured. Larger amounts may require collateral.",
  },
  {
    question: "What documents are needed?",
    answer: "Basic requirements include trade license, bank statements (6-12 months), audited financials, Emirates IDs, and business plan (for larger amounts). We'll provide a complete checklist based on your application.",
  },
];

const BusinessLoans = () => {
  const [loanAmount, setLoanAmount] = useState([1000000]);
  const [loanTerm, setLoanTerm] = useState([24]);
  const interestRate = 12; // Example rate

  const monthlyPayment = (loanAmount[0] * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm[0])) / (Math.pow(1 + interestRate / 100 / 12, loanTerm[0]) - 1);
  const totalInterest = monthlyPayment * loanTerm[0] - loanAmount[0];
  const totalRepayment = loanAmount[0] + totalInterest;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              Business Financing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Flexible Financing to Grow Your Business
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Access working capital, equipment financing, and growth funding with
              competitive rates and flexible terms. Get funded in as little as 5 days.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact#eligibility">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Financing Options"
            title="Find the Right Funding"
            subtitle="We offer a range of financing solutions tailored to your business needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {loanTypes.map((loan, index) => (
              <div
                key={loan.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-accent/50 hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <loan.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{loan.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{loan.description}</p>
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium text-foreground">{loan.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Term:</span>
                    <span className="font-medium text-foreground">{loan.term}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Choose Us"
            title="Benefits of Our Financing"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Loan Calculator"
            title="Estimate Your Monthly Payments"
            subtitle="Use our calculator to get an idea of your loan costs. Actual rates may vary."
          />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Inputs */}
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-4">
                      <label className="font-medium text-foreground">Loan Amount</label>
                      <span className="text-accent font-bold">
                        AED {loanAmount[0].toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      min={50000}
                      max={5000000}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>AED 50,000</span>
                      <span>AED 5,000,000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-4">
                      <label className="font-medium text-foreground">Loan Term</label>
                      <span className="text-accent font-bold">{loanTerm[0]} months</span>
                    </div>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      min={6}
                      max={60}
                      step={6}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>6 months</span>
                      <span>60 months</span>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Estimated Interest Rate</div>
                    <div className="text-2xl font-bold text-foreground">{interestRate}% APR</div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                  <h3 className="text-lg font-medium mb-6">Estimated Payments</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-primary-foreground/70 text-sm mb-1">Monthly Payment</div>
                      <div className="text-4xl font-bold text-accent">
                        AED {Math.round(monthlyPayment).toLocaleString()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary-foreground/20">
                      <div>
                        <div className="text-primary-foreground/70 text-sm mb-1">Total Interest</div>
                        <div className="text-xl font-semibold">
                          AED {Math.round(totalInterest).toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-primary-foreground/70 text-sm mb-1">Total Repayment</div>
                        <div className="text-xl font-semibold">
                          AED {Math.round(totalRepayment).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full mt-8" asChild>
                    <Link to="/contact#eligibility">
                      Apply for This Amount
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Eligibility"
                title="Are You Eligible?"
                align="left"
              />
              <p className="mt-6 text-muted-foreground">
                While requirements vary by lender and loan type, here are the general
                criteria for business financing in the UAE.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Don't meet all criteria? Contact us anyway – we may have options for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about business financing."
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
            Ready to Fund Your Growth?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Apply today and get a decision within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact#eligibility">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessLoans;

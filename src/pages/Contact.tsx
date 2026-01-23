import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon - Fri, 9am - 6pm",
    action: "+971 4 XXX XXXX",
    href: "tel:+97140000000",
    buttonText: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses",
    action: "+971 XX XXX XXXX",
    href: "https://wa.me/971XXXXXXXXX",
    buttonText: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "We reply within 24hrs",
    action: "info@taamulcredit.ae",
    href: "mailto:info@taamulcredit.ae",
    buttonText: "Send Email",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Have questions? Need help? Our team is here to assist you.
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-accent/50 hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <option.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <p className="font-medium text-foreground mb-4">{option.action}</p>
                <Button variant="navyOutline" asChild>
                  <a href={option.href} target={option.title === "WhatsApp" ? "_blank" : undefined}>
                    {option.buttonText}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form and we'll get back to you within 24 hours."
                align="left"
              />

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+971 XX XXX XXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Business Account Opening</SelectItem>
                        <SelectItem value="loan">Business Loan / Financing</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="corporate">Corporate Services</SelectItem>
                        <SelectItem value="partner">Partnership Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div>
              <div className="bg-card rounded-2xl border border-border p-8 mb-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Our Office</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Business Bay, Dubai, UAE
                        <br />
                        (Full address available upon request)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">
                        Sunday - Thursday: 9:00 AM - 6:00 PM
                        <br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Business Bay, Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Form */}
      <section id="eligibility" className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative">
          <SectionHeading
            badge="Quick Application"
            title="Check Your Eligibility Now"
            subtitle="Complete this form and our team will contact you within 24 hours."
            className="text-primary-foreground [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80 [&_span]:bg-primary-foreground/10 [&_span]:text-accent"
          />

          <form className="max-w-3xl mx-auto mt-12 bg-card/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-primary-foreground/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="elig-name" className="text-primary-foreground">Full Name</Label>
                <Input
                  id="elig-name"
                  placeholder="Enter your full name"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="elig-email" className="text-primary-foreground">Email Address</Label>
                <Input
                  id="elig-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="elig-phone" className="text-primary-foreground">Phone Number</Label>
                <Input
                  id="elig-phone"
                  type="tel"
                  placeholder="+971 XX XXX XXXX"
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="elig-business" className="text-primary-foreground">Business Type</Label>
                <Select>
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
                <Label htmlFor="elig-service" className="text-primary-foreground">Service Needed</Label>
                <Select>
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
                <Label htmlFor="elig-revenue" className="text-primary-foreground">Annual Revenue (AED)</Label>
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

            <Button variant="hero" size="xl" className="w-full mt-8">
              Check My Eligibility
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

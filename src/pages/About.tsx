import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we provide to our clients.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building long-term partnerships with our clients and banks.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously improve our processes to serve you better.",
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "AED 50M+", label: "Total Financing" },
  { value: "15+", label: "Partner Banks" },
  { value: "98%", label: "Success Rate" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Financial Bridges for UAE Businesses
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We simplify business banking and financing, helping entrepreneurs and
              companies access the financial services they need to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="From Challenge to Solution"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  Taamul Credit was founded with a simple mission: to make business
                  banking accessible to everyone. We saw firsthand how challenging it
                  was for businesses in the UAE to navigate the complex world of
                  corporate banking and financing.
                </p>
                <p>
                  Our founders, with decades of experience in the financial sector,
                  set out to create a bridge between businesses and banks. Today, we
                  partner with leading financial institutions to provide streamlined
                  access to business accounts and financing solutions.
                </p>
                <p>
                  Whether you're a startup opening your first business account or an
                  established company seeking growth financing, Taamul Credit is your
                  trusted partner in navigating the UAE's financial landscape.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-2xl p-10">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center p-6 bg-card rounded-xl border border-border animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize access to business banking and financing in the UAE by
                providing expert guidance, fast processing, and personalized solutions
                that empower businesses to achieve their financial goals.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted financial services partner in the UAE,
                known for our commitment to client success, innovative solutions, and
                exceptional service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="Our core values guide everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

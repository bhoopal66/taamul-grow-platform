import { Building2, Clock, CheckCircle, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Businesses Served",
  },
  {
    icon: DollarSign,
    value: "AED 50M+",
    label: "Financed",
  },
  {
    icon: Clock,
    value: "24 Hours",
    label: "Approval Time",
  },
  {
    icon: CheckCircle,
    value: "98%",
    label: "Success Rate",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-accent mb-3" />
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

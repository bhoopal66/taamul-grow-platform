import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
      {children}
    </div>
  );
}

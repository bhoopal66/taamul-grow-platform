import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "bg-[#25D366] text-primary-foreground",
        "flex items-center justify-center",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 hover:scale-110",
        "animate-pulse-gold"
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

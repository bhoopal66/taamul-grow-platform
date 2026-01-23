import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that have simplified their banking with Taamul Credit.
            Let's discuss how we can help you grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="navyOutline" size="xl" asChild>
              <a href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

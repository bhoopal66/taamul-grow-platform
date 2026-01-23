import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EligibilityForm } from "@/components/sections/EligibilityForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <EligibilityForm />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;

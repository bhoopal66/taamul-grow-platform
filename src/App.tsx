import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import BusinessAccountOpening from "./pages/BusinessAccountOpening";
import BusinessLoans from "./pages/BusinessLoans";
import HowItWorks from "./pages/HowItWorks";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import CorporateServices from "./pages/CorporateServices";
import Associates from "./pages/Associates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/business-account-opening" element={<BusinessAccountOpening />} />
          <Route path="/services/business-loans" element={<BusinessLoans />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporate-services" element={<CorporateServices />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

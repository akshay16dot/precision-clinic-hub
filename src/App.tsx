import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DentalImplants from "./pages/DentalImplants";
import FullArchImplants from "./pages/FullArchImplants";
import AestheticDentistry from "./pages/AestheticDentistry";
import MaxillofacialRehabilitation from "./pages/MaxillofacialRehabilitation";
import ImmediateImplants from "./pages/ImmediateImplants";
import VeneersAesthetic from "./pages/VeneersAesthetic";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClinicalCases from "./pages/ClinicalCases";
import Education from "./pages/Education";
import PatientEducation from "./pages/PatientEducation";
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
          <Route path="/dental-implants-new-jersey" element={<DentalImplants />} />
          <Route path="/full-arch-implants-new-jersey" element={<FullArchImplants />} />
          <Route path="/immediate-implant-rehabilitation" element={<ImmediateImplants />} />
          <Route path="/aesthetic-dentistry" element={<AestheticDentistry />} />
          <Route path="/veneers-aesthetic-reconstruction" element={<VeneersAesthetic />} />
          <Route path="/maxillofacial-rehabilitation" element={<MaxillofacialRehabilitation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clinical-cases" element={<ClinicalCases />} />
          <Route path="/education" element={<Education />} />
          <Route path="/patient-education" element={<PatientEducation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

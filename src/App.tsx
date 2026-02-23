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
import ProfessionalEducation from "./pages/ProfessionalEducation";
import PatientEducation from "./pages/PatientEducation";
import SmileDesign from "./pages/SmileDesign";
import ToothWearRehabilitation from "./pages/ToothWearRehabilitation";
import TeethWhitening from "./pages/TeethWhitening";
import NotFound from "./pages/NotFound";
import DentalImplantsGuide from "./pages/guides/DentalImplantsGuide";
import ImmediateImplantsGuide from "./pages/guides/ImmediateImplantsGuide";
import FullArchGuide from "./pages/guides/FullArchGuide";
import TeethWhiteningGuide from "./pages/guides/TeethWhiteningGuide";
import VeneersGuide from "./pages/guides/VeneersGuide";
import MaxillofacialGuide from "./pages/guides/MaxillofacialGuide";
import Testimonials from "./pages/Testimonials";
import LeaveReview from "./pages/LeaveReview";
import ProfessionalTestimonials from "./pages/ProfessionalTestimonials";
import ClinicalAssessment from "./pages/ClinicalAssessment";

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
          <Route path="/smile-design" element={<SmileDesign />} />
          <Route path="/tooth-wear-rehabilitation" element={<ToothWearRehabilitation />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clinical-cases" element={<ClinicalCases />} />
          <Route path="/education" element={<Education />} />
          <Route path="/professional-education" element={<ProfessionalEducation />} />
          <Route path="/patient-education" element={<PatientEducation />} />
          <Route path="/guide/dental-implants" element={<DentalImplantsGuide />} />
          <Route path="/guide/immediate-implants" element={<ImmediateImplantsGuide />} />
          <Route path="/guide/full-arch-implants" element={<FullArchGuide />} />
          <Route path="/guide/teeth-whitening" element={<TeethWhiteningGuide />} />
          <Route path="/guide/veneers" element={<VeneersGuide />} />
          <Route path="/guide/maxillofacial-rehabilitation" element={<MaxillofacialGuide />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/leave-review" element={<LeaveReview />} />
          <Route path="/professional-testimonials" element={<ProfessionalTestimonials />} />
          <Route path="/clinical-assessment" element={<ClinicalAssessment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

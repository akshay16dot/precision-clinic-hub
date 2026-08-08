import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DentalImplants from "./pages/DentalImplants";
import FullArchImplants from "./pages/FullArchImplants";
import FullMouthReconstruction from "./pages/FullMouthReconstruction";
import MaxillofacialRehabilitation from "./pages/MaxillofacialRehabilitation";
import ImmediateImplants from "./pages/ImmediateImplants";
import VeneersAesthetic from "./pages/VeneersAesthetic";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClinicalCases from "./pages/ClinicalCases";
import ProfessionalEducation from "./pages/ProfessionalEducation";
import PatientEducation from "./pages/PatientEducation";
import SmileDesign from "./pages/SmileDesign";
import ToothWearRehabilitation from "./pages/ToothWearRehabilitation";
import TeethWhitening from "./pages/TeethWhitening";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";
import LeaveReview from "./pages/LeaveReview";
import ProfessionalTestimonials from "./pages/ProfessionalTestimonials";
import ClinicalAssessment from "./pages/ClinicalAssessment";
import VirtualConsultation from "./pages/VirtualConsultation";
import NasalProsthesis from "./pages/NasalProsthesis";
import AuricularProsthesis from "./pages/AuricularProsthesis";
import OrbitalProsthesis from "./pages/OrbitalProsthesis";
import FacialProsthesisInsurance from "./pages/FacialProsthesisInsurance";
import FailedDentalImplant from "./pages/FailedDentalImplant";
import ProsthodontistVsOralSurgeon from "./pages/ProsthodontistVsOralSurgeon";
import AllOnFourCost from "./pages/AllOnFourCost";
import AllOnFourVsAllOnSix from "./pages/AllOnFourVsAllOnSix";
import FrontToothImplant from "./pages/FrontToothImplant";
import RedirectTo from "./pages/RedirectTo";
import StableProtocol from "./pages/StableProtocol";
import PatientQuestions from "./pages/PatientQuestions";

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
          <Route path="/full-mouth-reconstruction-new-jersey" element={<FullMouthReconstruction />} />
          <Route path="/aesthetic-dentistry" element={<RedirectTo to="/full-mouth-reconstruction-new-jersey" />} />
          <Route path="/veneers-aesthetic-reconstruction" element={<VeneersAesthetic />} />
          <Route path="/maxillofacial-rehabilitation" element={<MaxillofacialRehabilitation />} />
          <Route path="/smile-design" element={<SmileDesign />} />
          <Route path="/tooth-wear-rehabilitation" element={<ToothWearRehabilitation />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clinical-cases" element={<ClinicalCases />} />
          <Route path="/professional-education" element={<ProfessionalEducation />} />
          <Route path="/patient-questions" element={<PatientQuestions />} />
          <Route path="/patient-education" element={<PatientEducation />} />
          <Route path="/guide/dental-implants" element={<RedirectTo to="/dental-implants-new-jersey" />} />
          <Route path="/guide/immediate-implants" element={<RedirectTo to="/immediate-implant-rehabilitation" />} />
          <Route path="/guide/full-arch-implants" element={<RedirectTo to="/full-arch-implants-new-jersey" />} />
          <Route path="/guide/teeth-whitening" element={<RedirectTo to="/teeth-whitening" />} />
          <Route path="/guide/veneers" element={<RedirectTo to="/veneers-aesthetic-reconstruction" />} />
          <Route path="/guide/maxillofacial-rehabilitation" element={<RedirectTo to="/maxillofacial-rehabilitation" />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/leave-review" element={<LeaveReview />} />
          <Route path="/professional-testimonials" element={<ProfessionalTestimonials />} />
          <Route path="/clinical-assessment" element={<ClinicalAssessment />} />
          <Route path="/virtual-consultation" element={<VirtualConsultation />} />

          {/* Maxillofacial prosthetics, one page per prosthesis type */}
          <Route path="/nasal-prosthesis" element={<NasalProsthesis />} />
          <Route path="/auricular-prosthesis" element={<AuricularProsthesis />} />
          <Route path="/orbital-prosthesis" element={<OrbitalProsthesis />} />
          <Route
            path="/facial-prosthesis-insurance-coverage"
            element={<FacialProsthesisInsurance />}
          />

          {/* Revision and specialist-choice content */}
          <Route path="/failed-dental-implant-revision" element={<FailedDentalImplant />} />
          <Route
            path="/prosthodontist-vs-oral-surgeon"
            element={<ProsthodontistVsOralSurgeon />}
          />

          {/* Full-arch commercial cluster */}
          <Route path="/all-on-4-cost-new-jersey" element={<AllOnFourCost />} />
          <Route path="/all-on-4-vs-all-on-6" element={<AllOnFourVsAllOnSix />} />

          {/* The STABLE Protocol, replaces the near-empty /education hub */}
          <Route path="/stable-protocol" element={<StableProtocol />} />
          <Route path="/education" element={<RedirectTo to="/stable-protocol" />} />

          {/* Anterior aesthetics */}
          <Route path="/front-tooth-implant-new-jersey" element={<FrontToothImplant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

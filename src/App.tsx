import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const DentalImplants = lazy(() => import("./pages/DentalImplants"));
const FullArchImplants = lazy(() => import("./pages/FullArchImplants"));
const FullMouthReconstruction = lazy(() => import("./pages/FullMouthReconstruction"));
const MaxillofacialRehabilitation = lazy(() => import("./pages/MaxillofacialRehabilitation"));
const ImmediateImplants = lazy(() => import("./pages/ImmediateImplants"));
const VeneersAesthetic = lazy(() => import("./pages/VeneersAesthetic"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ClinicalCases = lazy(() => import("./pages/ClinicalCases"));
const ProfessionalEducation = lazy(() => import("./pages/ProfessionalEducation"));
const PatientEducation = lazy(() => import("./pages/PatientEducation"));
const SmileDesign = lazy(() => import("./pages/SmileDesign"));
const ToothWearRehabilitation = lazy(() => import("./pages/ToothWearRehabilitation"));
const TeethWhitening = lazy(() => import("./pages/TeethWhitening"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const LeaveReview = lazy(() => import("./pages/LeaveReview"));
const ProfessionalTestimonials = lazy(() => import("./pages/ProfessionalTestimonials"));
const ClinicalAssessment = lazy(() => import("./pages/ClinicalAssessment"));
const VirtualConsultation = lazy(() => import("./pages/VirtualConsultation"));
const NasalProsthesis = lazy(() => import("./pages/NasalProsthesis"));
const AuricularProsthesis = lazy(() => import("./pages/AuricularProsthesis"));
const OrbitalProsthesis = lazy(() => import("./pages/OrbitalProsthesis"));
const FacialProsthesisInsurance = lazy(() => import("./pages/FacialProsthesisInsurance"));
const FailedDentalImplant = lazy(() => import("./pages/FailedDentalImplant"));
const ProsthodontistVsOralSurgeon = lazy(() => import("./pages/ProsthodontistVsOralSurgeon"));
const AllOnFourCost = lazy(() => import("./pages/AllOnFourCost"));
const AllOnFourVsAllOnSix = lazy(() => import("./pages/AllOnFourVsAllOnSix"));
const FrontToothImplant = lazy(() => import("./pages/FrontToothImplant"));
const RedirectTo = lazy(() => import("./pages/RedirectTo"));
const StableProtocol = lazy(() => import("./pages/StableProtocol"));
const PatientQuestions = lazy(() => import("./pages/PatientQuestions"));
const TravelingPatients = lazy(() => import("./pages/TravelingPatients"));
const RegionalCare = lazy(() => import("./pages/RegionalCare"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden="true" />}>
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
          <Route path="/patients-traveling-to-hamilton" element={<TravelingPatients />} />
          <Route path="/prosthodontist-princeton-nj" element={<RegionalCare region="princeton" />} />
          <Route path="/prosthodontist-mercer-county-nj" element={<RegionalCare region="mercer" />} />
          <Route path="/prosthodontist-robbinsville-cranbury-nj" element={<RegionalCare region="east" />} />
          <Route path="/prosthodontist-bucks-county-pa" element={<RegionalCare region="bucks" />} />
          <Route path="/prosthodontist-new-brunswick-edison-nj" element={<RegionalCare region="new-brunswick" />} />

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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

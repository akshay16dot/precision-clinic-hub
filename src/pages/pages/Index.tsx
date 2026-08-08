import SiteNavigation from "@/components/SiteNavigation";
import HeroSection from "@/components/HeroSection";
import CredentialStrip from "@/components/CredentialStrip";
import HowItWorks from "@/components/HowItWorks";
import MaxfacStrip from "@/components/MaxfacStrip";
import IntroSection from "@/components/IntroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import EducationSection from "@/components/EducationSection";
import FooterSection from "@/components/FooterSection";
import { usePageSEO } from "@/hooks/usePageSEO";

const Index = () => {
  usePageSEO({
    title: "Prosthodontist & Dental Implant Specialist | Hamilton Township NJ | Dr. Akshay Parmar",
    description: "Board-certified prosthodontist providing advanced dental implants, All-on-X rehabilitation, porcelain veneers, full mouth reconstruction, and complex restorative care in Hamilton Township NJ, Princeton, Jersey City, and surrounding New Jersey areas.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />
      <HeroSection />
      <CredentialStrip />
      <GallerySection />
      <IntroSection />
      <ServicesSection />
      <PhilosophySection />
      <MaxfacStrip />
      <AuthoritySection />
      <HowItWorks />
      <CTASection />
      <EducationSection />
      <FooterSection />
    </main>
  );
};

export default Index;

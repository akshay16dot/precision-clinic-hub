import GoogleReviewSection from "@/components/GoogleReviewSection";
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
import OneRoofCare from "@/components/OneRoofCare";
import RegionalReach from "@/components/RegionalReach";
import LocationsSection from "@/components/LocationsSection";
import { usePageSEO } from "@/hooks/usePageSEO";

const Index = () => {
  usePageSEO({
    title: "Dr. Akshay Parmar | Prosthodontist in Hamilton & Jersey City, NJ",
    description: "Board-certified prosthodontist providing dental implants, All-on-4 and All-on-X full-arch rehabilitation, porcelain veneers, full-mouth reconstruction and maxillofacial prosthetics in Hamilton Township, New Jersey.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />
      <HeroSection />
      <CredentialStrip />
      <LocationsSection />
      <GallerySection />
      <IntroSection />

      <OneRoofCare />
      <RegionalReach />
      <ServicesSection />
      <PhilosophySection />
      <MaxfacStrip />
      <AuthoritySection />
      <HowItWorks />
      <GoogleReviewSection />
      <CTASection />
      <EducationSection />
      <FooterSection />
    </main>
  );
};

export default Index;

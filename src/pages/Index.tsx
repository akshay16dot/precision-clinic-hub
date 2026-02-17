import SiteNavigation from "@/components/SiteNavigation";
import HeroSection from "@/components/HeroSection";
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
    title: "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey",
    description: "Board-Certified Prosthodontist offering advanced implant rehabilitation, full-arch reconstruction, and maxillofacial prosthetics in New Jersey. Precision-driven care for complex dental and surgical cases.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />
      <HeroSection />
      <IntroSection />
      <AuthoritySection />
      <ServicesSection />
      <PhilosophySection />
      <GallerySection />
      <CTASection />
      <EducationSection />
      <FooterSection />
    </main>
  );
};

export default Index;

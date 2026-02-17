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
    title: "Prosthodontist in New Jersey | Implant & Reconstruction Specialist",
    description: "Board-Certified Prosthodontist providing dental implant rehabilitation, full-arch reconstruction, maxillofacial prosthetics, and complex bite restoration in New Jersey. Fellowship-trained specialist care.",
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

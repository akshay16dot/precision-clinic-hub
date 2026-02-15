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

const Index = () => {
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

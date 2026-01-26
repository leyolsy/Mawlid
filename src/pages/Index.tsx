import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LegalFrameworkSection } from "@/components/LegalFrameworkSection";
import { SilenceArgumentSection } from "@/components/SilenceArgumentSection";
import { EvidenceTabs } from "@/components/EvidenceTabs";
import { ScholarsSection } from "@/components/ScholarsSection";
import { RefutationsSection } from "@/components/RefutationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
        <LegalFrameworkSection />
        <SilenceArgumentSection />
        <EvidenceTabs />
        <ScholarsSection />
        <RefutationsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

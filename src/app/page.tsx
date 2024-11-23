import AboutSection from "@/components/AboutSection";
import CallForAbstracts from "@/components/CallForAbstracts";
import HeroSection from "@/components/HeroSection";
import KeyHighlights from "@/components/KeyHighlights";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <KeyHighlights />
      <CallForAbstracts />
      {/* <EventScheduleTeaser /> */}
      {/* <SponsorsPartnersSection /> */}
      <TestimonialsSection />
    </main>
  );
}

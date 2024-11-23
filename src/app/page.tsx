import AboutSection from "@/components/AboutSection";
import CallForAbstracts from "@/components/CallForAbstracts";
import EventScheduleTeaser from "@/components/EventScheduleTeaser";
import HeroSection from "@/components/HeroSection";
import KeyHighlights from "@/components/KeyHighlights";
import SponsorsPartnersSection from "@/components/SponsorsPartnersSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <KeyHighlights />
      <CallForAbstracts />
      <EventScheduleTeaser />
      <SponsorsPartnersSection />
    </main>
  );
}

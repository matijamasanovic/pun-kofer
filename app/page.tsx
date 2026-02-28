import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";
import {
  HeroSection,
  AboutPreview,
  FeaturedDestinations,
  TourPackageSection,
  TestimonialsSection,
  StatsSection,
  WhyUsSection,
  ContactCTASection,
} from "@/components/home-sections";
import AwesomeTripsServer from "@/components/awesome-trips-server";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="pt-[64px]">
        <HeroSection />
        <AboutPreview />
        <FeaturedDestinations />
        <AwesomeTripsServer />
        <TourPackageSection />
        <TestimonialsSection />
        <StatsSection />
        <WhyUsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}

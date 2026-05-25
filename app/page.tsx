import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import CtaSection from "@/components/sections/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <WhyUsSection />
        <FeaturedProjects />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

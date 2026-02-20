import Loader from "@/components/landing/Loader";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PinnedProjects from "@/components/landing/PinnedProjects";
import MarqueeSection from "@/components/landing/MarqueeSection";
import About from "@/components/landing/About";
import StatsCards from "@/components/landing/StatsCards";
import Expertise from "@/components/landing/Expertise";
import ServicesParallax from "@/components/landing/ServicesParallax";
import Experience from "@/components/landing/Experience";
import TechStack from "@/components/landing/TechStack";
import Education from "@/components/landing/Education";
import References from "@/components/landing/References";
import ContactCTA from "@/components/landing/ContactCTA";
import Footer from "@/components/landing/Footer";

export const runtime = "nodejs";

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />
      <Header />
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <PinnedProjects />
        <MarqueeSection />
        <About />
        <StatsCards />
        <Expertise />
        <ServicesParallax />
        <Experience />
        <TechStack />
        <Education />
        <References />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

import Loader from "@/components/landing/Loader";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MarqueeSection from "@/components/landing/MarqueeSection";
import About from "@/components/landing/About";
import StatsCards from "@/components/landing/StatsCards";
import Partners from "@/components/landing/Partners";
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
        <MarqueeSection />
        <About />
        <StatsCards />
        <Partners />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

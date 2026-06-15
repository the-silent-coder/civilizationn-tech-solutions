import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import StatsSection from "../sections/StatsSection";
import ArticlesSection from "../sections/ArticlesSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import PaymentsSection from "../sections/PaymentsSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ArticlesSection />
      <TestimonialsSection />
      <PaymentsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
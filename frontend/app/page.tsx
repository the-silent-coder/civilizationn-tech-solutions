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
import WhyChooseUs from "../sections/WhyChooseUs";
import ProcessSection from "../sections/ProcessSection";
import CtaBanner from "../sections/CtaBanner";
import BackToTop from "../components/BackToTop";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <StatsSection />
      <ArticlesSection />
      <TestimonialsSection />
      <PaymentsSection />
      <CtaBanner />
      <ContactSection />
      <FooterSection />
      <BackToTop />
    </main>
  );
}
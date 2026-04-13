import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EmergencyBanner from "./components/EmergencyBanner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyCallButton from "./components/StickyCallButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCallButton />
    </div>
  );
}

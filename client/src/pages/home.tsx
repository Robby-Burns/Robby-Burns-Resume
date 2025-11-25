import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import TechStack from "@/components/TechStack";
import ChatbotSection from "@/components/ChatbotSection";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Narrative />
      <TechStack />
      <ChatbotSection />
      <AboutMe />
      <Footer />
    </div>
  );
}

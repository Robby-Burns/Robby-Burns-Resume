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
      
      {/* 1. AGENTS FIRST: Immediate proof of skills */}
      <ChatbotSection />
      
      {/* 2. TECH STACK: How you built them */}
      <TechStack />
      
      {/* 3. NARRATIVE & BIO: The backstory (moved to bottom) */}
      <Narrative />
      <AboutMe />
      
      <Footer />
    </div>
  );
}

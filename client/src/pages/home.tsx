import { useEffect } from "react"; // <--- 1. Import this
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import TechStack from "@/components/TechStack";
import ChatbotSection from "@/components/ChatbotSection";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  
  // 2. Add this block right here at the top of the function
  useEffect(() => {
    // This tells the browser to scroll to the top immediately
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <ChatbotSection />
      <TechStack />
      <Narrative />
      <AboutMe />
      <Footer />
    </div>
  );
}

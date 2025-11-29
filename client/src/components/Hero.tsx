import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f23] via-[#1e3a2e] to-[#1e3a5f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,90,69,0.4)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,95,0.3)_0%,_transparent_50%)]" />
      
      {/* Background blobs - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-6 space-y-6 md:space-y-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight"
        >
          Robby Burns
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-emerald-300">The API Between Management and AI.</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-4 md:pt-6"
        >
          <Button 
            size="lg"
            onClick={scrollToChatbot}
            data-testid="button-ask-agent"
            className="bg-white text-[#1e3a2e] hover:bg-white/90 text-sm md:text-base font-semibold px-6 py-4 md:px-8 md:py-6 h-auto rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full md:w-auto"
          >
            Check out my AI Agents
            <ArrowDown className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Removed the animated oval scroll indicator from here */}
    </section>
  );
}

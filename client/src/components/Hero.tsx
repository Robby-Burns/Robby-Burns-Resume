import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
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
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4" />
          <span>AI Product Manager</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight"
        >
          Robby Burns
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Building multi-agent systems by day.
          <br />
          <span className="text-emerald-300">Raising a family in the PNW by night.</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6"
        >
          <Button 
            size="lg"
            onClick={scrollToChatbot}
            data-testid="button-ask-agent"
            className="bg-white text-[#1e3a2e] hover:bg-white/90 text-base font-semibold px-8 py-6 h-auto rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Ask My AI Agent
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

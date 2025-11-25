import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ChatbotSection() {
  return (
    <section id="chatbot-section" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,58,46,0.08)_0%,_transparent_60%)]" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Interview My AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I trained this agent on my full professional history. Ask it about my specific projects at Dutch Bros, my Master's degree, or how I used IoT in agriculture.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            <div className="relative bg-card rounded-xl overflow-hidden">
              <iframe 
                src="https://rob200-robby-burns-chatbot.hf.space" 
                className="w-full border-0"
                style={{ minHeight: '600px' }}
                title="Robby Burns AI Chatbot"
                data-testid="iframe-chatbot"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Database, FileCode, Terminal, UserCircle } from "lucide-react";

export default function ChatbotSection() {
  return (
    <section id="chatbot-section" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,58,46,0.08)_0%,_transparent_60%)]" />
      
      {/* Changed max-w-7xl to max-w-4xl for a cleaner single-column stack */}
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>AI Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Autonomous Agent Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build agents that do real work. Below are specialized implementations demonstrating RAG, SQL generation, and secure sandboxing.
          </p>
        </motion.div>
        
        {/* VERTICAL STACK LAYOUT (Space-y-16 adds gap between agents) */}
        <div className="space-y-16">

          {/* --- AGENT 1: SELF SERVE ANALYST --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold text-xl">
                <Database className="h-6 w-6" />
                <h3>Self-Serve Credit Union Analyst</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                <span className="font-semibold text-foreground">Architecture:</span> LangGraph, Docker, SQLite.
                <br/>
                Allows non-technical users to query banking data via SQL generation and executes Python for visualization in a sandbox.
              </p>
            </div>

            <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative bg-card rounded-xl overflow-hidden">
                <iframe 
                  src="https://rob200-selfserveanalyst.hf.space"
                  className="w-full border-0 bg-white"
                  style={{ minHeight: '600px' }}
                  title="Self Serve Analyst"
                />
              </div>
            </Card>
          </motion.div>

          {/* --- AGENT 2: LEGACY CODE DOCUMENT AGENT --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
             <div className="mb-6 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold text-xl">
                <FileCode className="h-6 w-6" />
                <h3>Legacy Code Documentation Agent</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                <span className="font-semibold text-foreground">Architecture:</span> Streamlit, LLM Analysis.
                <br/>
                Ingests legacy codebases and generates comprehensive documentation to accelerate modernization.
              </p>
            </div>

            <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative bg-card rounded-xl overflow-hidden">
                <iframe 
                  src="https://rob200-legacycodedocumentagent.hf.space"
                  className="w-full border-0 bg-white"
                  style={{ minHeight: '600px' }}
                  title="Legacy Code Agent"
                />
              </div>
            </Card>
          </motion.div>

          {/* --- AGENT 3: RESUME AGENT --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             <div className="mb-6 space-y-2 text-center md:text-left">
              {/* UPDATED: Matches the Green (text-primary) style of other agents */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold text-xl">
                <UserCircle className="h-6 w-6" />
                <h3>Interactive Professional History</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                <span className="font-semibold text-foreground">Architecture:</span> RAG, OpenAI, Custom Prompt Engineering.
                <br/>
                Trained on my full resume, educational background, and project portfolio.
              </p>
            </div>

            <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative bg-card rounded-xl overflow-hidden">
                <iframe 
                  src="https://rob200-robby-burns-chatbot.hf.space"
                  className="w-full border-0"
                  style={{ minHeight: '600px' }}
                  title="Robby Burns AI Chatbot"
                />
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

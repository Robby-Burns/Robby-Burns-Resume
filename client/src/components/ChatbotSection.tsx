import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Database, FileCode, Terminal } from "lucide-react";

export default function ChatbotSection() {
  return (
    <section id="chatbot-section" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,58,46,0.08)_0%,_transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>AI Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Autonomous Agent Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build agents that do real work. Below are two specialized implementations demonstrating RAG, SQL generation, and secure sandboxing, followed by my personal interactive resume.
          </p>
        </motion.div>
        
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* --- AGENT 1: SELF SERVE ANALYST --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Database className="h-5 w-5" />
                <h3>Self-Serve Credit Union Analyst</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Architecture:</span> LangGraph, Docker, SQLite.
                <br/>
                Allows non-technical users to query banking data. It writes SQL, executes Python for visualization, and runs within an isolated Docker container for production-grade security.
              </p>
            </div>

            <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex-grow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative bg-card rounded-xl overflow-hidden h-full">
                <div className="p-2 bg-muted/50 text-xs text-center border-b flex justify-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1"><Terminal className="h-3 w-3"/> Writes SQL</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3"/> Docker Sandboxed</span>
                </div>
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
            className="flex flex-col h-full"
          >
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <FileCode className="h-5 w-5" />
                <h3>Legacy Code Documentation Agent</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Architecture:</span> Streamlit, LLM Analysis.
                <br/>
                An automated utility designed to ingest legacy codebases and generate comprehensive, human-readable documentation to accelerate modernization efforts.
              </p>
            </div>

            <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex-grow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative bg-card rounded-xl overflow-hidden h-full">
                <div className="p-2 bg-muted/50 text-xs text-center border-b flex justify-center gap-4 text-muted-foreground">
                   <span className="flex items-center gap-1"><FileCode className="h-3 w-3"/> Code Analysis</span>
                   <span className="flex items-center gap-1"><Sparkles className="h-3 w-3"/> Auto-Docs</span>
                </div>
                <iframe 
                  src="https://rob200-legacycodedocumentagent.hf.space"
                  className="w-full border-0 bg-white"
                  style={{ minHeight: '600px' }}
                  title="Legacy Code Agent"
                />
              </div>
            </Card>
          </motion.div>

          {/* --- AGENT 3: RESUME AGENT (Bottom Full Width) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 mt-8" 
          >
             <div className="mb-4 text-center">
              <h3 className="text-xl font-semibold text-foreground">Interactive Professional History</h3>
              <p className="text-sm text-muted-foreground">
                Trained on my full resume, educational background, and project portfolio.
              </p>
            </div>
            <Card className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent">
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

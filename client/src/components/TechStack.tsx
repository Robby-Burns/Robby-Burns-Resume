import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Code2, 
  Database, 
  LineChart, 
  Network, // For Agentic/LangGraph
  Container, // For Docker
  Scale, // For Evaluation
  GitGraph, // For CI/CD
  Cog, 
  Target,
  Users,
  Sparkles,
  GitBranch,
  Route,
  FlaskConical,
  Shield
} from "lucide-react";

const skills = [
  // AI & Architecture (The "New" Stuff)
  { name: "LLMs & GenAI", icon: Brain, category: "AI" },
  { name: "Agentic Workflows", icon: Network, category: "AI" }, 
  { name: "RAG Pipelines", icon: Database, category: "AI" },
  { name: "LangGraph", icon: Bot, category: "Technical" },
  { name: "Docker Sandboxing", icon: Container, category: "Technical" },
  { name: "LLM Evaluation", icon: Scale, category: "AI" }, 

  // Core Technical
  { name: "Python", icon: Code2, category: "Technical" },
  { name: "SQL", icon: Database, category: "Technical" },
  { name: "Predictive Modeling", icon: LineChart, category: "AI" },
  { name: "Process Automation", icon: Cog, category: "Technical" },

  // Product Management
  { name: "Product Lifecycle", icon: Route, category: "Product" },
  { name: "Agile/Scrum", icon: GitBranch, category: "Product" },
  { name: "A/B Testing", icon: FlaskConical, category: "Product" },
  { name: "UX Design", icon: Target, category: "Product" },
  { name: "Cross-functional Leadership", icon: Users, category: "Leadership" },
];

const categoryColors: Record<string, string> = {
  "AI": "text-emerald-500",
  "Technical": "text-blue-500",
  "Product": "text-amber-500",
  "Leadership": "text-purple-500",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,46,0.05)_0%,_transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            My Toolkit
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {Object.entries(categoryColors).map(([category, color]) => (
              <div key={category} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')}`} />
                <span className="text-muted-foreground">{category}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* SKILLS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mb-12"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            const colorClass = categoryColors[skill.category];
            return (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card
                  className="group p-4 md:p-5 flex flex-col items-center justify-center gap-3 hover-elevate transition-all duration-300 cursor-default border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm h-full"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors duration-300 ${colorClass}`}>
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-center text-foreground leading-tight">
                    {skill.name}
                  </span>
                </Card>
              </motion.div>
            );
          })}
          
          {/* ARCHITECTURE CARD (Spans multiple columns) */}
          <motion.div 
            variants={itemVariants} 
            className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 mt-4"
          >
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GitGraph className="h-6 w-6 text-primary" />
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-semibold text-lg mb-2">Portfolio CI/CD Pipeline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This website is a live demonstration of modern DevOps. I built the frontend in <strong>Replit</strong>, version controlled via <strong>GitHub</strong>, and deployed via <strong>Vercel</strong>. The AI agents are served via <strong>Hugging Face Spaces</strong> (Docker & Streamlit) and embedded here.
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 items-center">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-mono">Replit</span>
                    <span className="text-muted-foreground text-xs">→</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-mono">GitHub</span>
                    <span className="text-muted-foreground text-xs">→</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-mono">Vercel</span>
                    <span className="text-muted-foreground text-xs">+</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">Hugging Face API</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

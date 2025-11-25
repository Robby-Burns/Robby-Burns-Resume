import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Code2, 
  Database, 
  LineChart, 
  MessageSquare, 
  Cog, 
  Target,
  Users,
  Sparkles,
  GitBranch,
  BarChart3,
  Route,
  FlaskConical,
  Shield
} from "lucide-react";

const skills = [
  { name: "LLMs", icon: Brain, category: "AI" },
  { name: "Agentic AI", icon: Bot, category: "AI" },
  { name: "Python", icon: Code2, category: "Technical" },
  { name: "SQL", icon: Database, category: "Technical" },
  { name: "Machine Learning", icon: Sparkles, category: "AI" },
  { name: "Predictive Modeling", icon: LineChart, category: "AI" },
  { name: "Chatbot Development", icon: MessageSquare, category: "AI" },
  { name: "Data Visualization", icon: BarChart3, category: "Technical" },
  { name: "Process Automation", icon: Cog, category: "Technical" },
  { name: "Product Lifecycle", icon: Route, category: "Product" },
  { name: "Agile/Scrum", icon: GitBranch, category: "Product" },
  { name: "Cross-functional Leadership", icon: Users, category: "Leadership" },
  { name: "UX Design", icon: Target, category: "Product" },
  { name: "A/B Testing", icon: FlaskConical, category: "Product" },
  { name: "Regulatory Compliance", icon: Shield, category: "Leadership" },
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
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
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
        </motion.div>
      </div>
    </section>
  );
}

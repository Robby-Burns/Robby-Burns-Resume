import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiPython, SiOpenai, SiReplit } from "react-icons/si";
import { Link2, Database, BarChart3, ListTodo } from "lucide-react";

const technologies = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "OpenAI / LLMs", icon: SiOpenai, color: "#10a37f" },
  { name: "LangChain", icon: Link2, color: "#1C3C3C" },
  { name: "SQL", icon: Database, color: "#336791" },
  { name: "Tableau", icon: BarChart3, color: "#E97627" },
  { name: "Jira", icon: ListTodo, color: "#0052CC" },
  { name: "Replit", icon: SiReplit, color: "#F26207" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            My Toolkit
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div key={tech.name} variants={itemVariants}>
                <Card
                  className="group p-6 md:p-8 flex flex-col items-center justify-center gap-4 hover-elevate transition-all duration-300 cursor-default border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                  data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div 
                    className="p-4 rounded-2xl bg-muted/50 group-hover:bg-muted transition-colors duration-300"
                    style={{ color: tech.color }}
                  >
                    <Icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-center text-foreground">
                    {tech.name}
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

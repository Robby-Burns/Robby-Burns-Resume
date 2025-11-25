import { Card } from "@/components/ui/card";
import { Code2, Brain, Link2, Database, BarChart3, ListTodo, Terminal } from "lucide-react";

const technologies = [
  { name: "Python", icon: Code2 },
  { name: "OpenAI / LLMs", icon: Brain },
  { name: "LangChain", icon: Link2 },
  { name: "SQL", icon: Database },
  { name: "Tableau", icon: BarChart3 },
  { name: "Jira", icon: ListTodo },
  { name: "Replit", icon: Terminal },
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
          My Toolkit
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <Card
                key={tech.name}
                className="p-6 flex flex-col items-center justify-center gap-4 hover-elevate transition-all cursor-default"
                data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className="h-10 w-10 text-primary" />
                <span className="text-sm md:text-base font-medium text-center text-foreground">
                  {tech.name}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

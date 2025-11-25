import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Mountain, Trophy, Briefcase, Plane } from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Current Project",
    description: "Raising 4 kids (and a couple of AI chatbots).",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Mountain,
    title: "Weekend Habitat",
    description: "The ski slopes, paddleboarding, or the soccer pitch.",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Trophy,
    title: "Team Allegiances",
    description: "Seattle Sounders, Philadelphia Eagles, WSU Go Cougs!",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Briefcase,
    title: "Past Life",
    description: "Founder of a brewery & a farm.",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Plane,
    title: "Fun Fact",
    description: "I have a sports pilot license.",
    gradient: "from-rose-500/20 to-rose-500/5",
  },
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
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export default function AboutMe() {
  return (
    <section className="py-24 md:py-32 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,58,46,0.08)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            Personal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            About Me
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                Hi, I'm <span className="text-foreground font-semibold">Robby</span>. I've worn a lot of hats—I started and ran a farm and owned a brewery before I pivoted to building the future with Artificial Intelligence. <span className="italic">Life is weird, right?</span>
              </p>
              <p>
                I love skiing and snowboarding with my family, playing soccer, and paddleboarding. I'm all about good times with friends, family, art, and music (my favorite genre is punk, but the best music is whatever fits the vibe).
              </p>
              <p>
                I root for the Seattle Sounders and the Philadelphia Eagles, which makes for some <span className="text-foreground font-medium">very loud Sundays</span> in our house.
              </p>
            </div>
            <div className="pt-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/10">
              <p className="text-base text-muted-foreground italic">
                "Ask my chatbot about my work history, but ask <span className="text-foreground font-medium">me</span> if you want to grab a beer or talk sports."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">Quick Stats</h3>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.title} variants={itemVariants}>
                  <Card
                    className={`p-5 hover-elevate transition-all duration-300 border-transparent hover:border-primary/10 overflow-hidden relative`}
                    data-testid={`stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-50`} />
                    <div className="relative flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-background/80 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="font-semibold text-sm text-foreground">{stat.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

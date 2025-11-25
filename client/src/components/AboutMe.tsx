import { Card } from "@/components/ui/card";
import { Users, Mountain, Trophy, Briefcase, Plane } from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Current Project",
    description: "Raising 4 kids (and a couple of AI chatbots).",
  },
  {
    icon: Mountain,
    title: "Weekend Habitat",
    description: "The ski slopes, paddleboarding, or the soccer pitch. (But mostly trucking the kiddos around.)",
  },
  {
    icon: Trophy,
    title: "Team Allegiances",
    description: "Seattle Sounders (MLS), Philadelphia Eagles (NFL), and Washington State University (Go Cougs!).",
  },
  {
    icon: Briefcase,
    title: "Past Life",
    description: "Founder of a brewery & a farm.",
  },
  {
    icon: Plane,
    title: "Fun Fact",
    description: "I have a sports pilot license. ✈️",
  },
];

export default function AboutMe() {
  return (
    <section className="py-20 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
              <p>
                Hi, I'm Robby. I've worn a lot of hats—I started and ran a farm and owned a brewery before I pivoted to building the future with Artificial Intelligence. Life is weird, right?
              </p>
              <p>
                I love skiing and snowboarding with my family, playing soccer, and paddleboarding. I'm all about good times with friends, family, art, and music (my favorite genre is punk, but the best music is whatever fits the vibe). I root for the Seattle Sounders and the Philadelphia Eagles, which makes for some very loud Sundays in our house.
              </p>
              <p>
                Ask my chatbot about my work history, but ask me if you want to grab a beer or talk sports.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Quick Stats</h3>
            <div className="space-y-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.title}
                    className="p-4 space-y-2"
                    data-testid={`stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <h4 className="font-semibold text-sm text-foreground">{stat.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">
                      {stat.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-slate-800 text-primary-foreground px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Robby Burns
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-primary-foreground/90">
          AI Product Manager & Builder
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Building multi-agent systems by day. Raising a family in the PNW by night.
        </p>
        <div className="pt-4">
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToChatbot}
            data-testid="button-ask-agent"
            className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-lg px-8 py-6 h-auto"
          >
            Ask My AI Agent
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

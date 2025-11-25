import { Card } from "@/components/ui/card";

export default function ChatbotSection() {
  return (
    <section id="chatbot-section" className="py-20 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Interview My AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I trained this agent on my full professional history. Ask it about my specific projects at Dutch Bros, my Master's degree, or how I used IoT in agriculture.
          </p>
        </div>
        <Card className="p-8 md:p-12 min-h-[500px] flex items-center justify-center border-2 shadow-lg">
          <div className="text-center space-y-4">
            <div className="text-6xl">🤖</div>
            <p className="text-xl font-medium text-muted-foreground" data-testid="text-chatbot-placeholder">
              Chatbot loads here
            </p>
            <p className="text-sm text-muted-foreground/70">
              Iframe integration point for AI agent
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

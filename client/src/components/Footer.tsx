import { Linkedin, Github, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Robby Burns</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> in the PNW
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <a
                href="mailto:contact@robbyburns.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

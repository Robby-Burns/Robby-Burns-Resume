import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-background border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 Robby Burns. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
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

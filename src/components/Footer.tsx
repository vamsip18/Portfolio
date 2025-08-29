import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Quote */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-space-grotesk gradient-text">
              Vamsi Peela
            </div>
            <p className="text-muted-foreground text-sm">
              "Code is poetry written in logic"
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Made by Vamsi Peela
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © 2024 All rights reserved
            </p>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="hover-glow-secondary transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">
              Built with React.js, TypeScript, and Tailwind CSS
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Open to opportunities</span>
              <span>•</span>
              <span>Available for collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
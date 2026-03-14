import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { EmailCaptureModal } from "./EmailCaptureModal";

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary"></div>
            <span className="font-semibold">BustaPagaFacile</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Funzionalità
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Prezzi
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Recensioni
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Guida
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Accedi
          </Button>
          <Button onClick={() => setModalOpen(true)}>Inizia Gratis</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <EmailCaptureModal open={modalOpen} onOpenChange={setModalOpen} source="header" />
    </header>
  );
}
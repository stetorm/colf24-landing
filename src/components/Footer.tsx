import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="font-semibold">BustaPagaFacile</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Il modo più semplice per generare buste paga per colf e badanti, 
              sempre aggiornato con le normative INPS e CCNL.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="La tua email" 
                className="max-w-xs"
              />
              <Button>Iscriviti</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Prodotto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Funzionalità</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Prezzi</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Novità</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Risorse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Guida completa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">CCNL Colf 2026</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Normative INPS</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Azienda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Chi siamo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contatti</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Supporto</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Partnership</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2026 BustaPagaFacile. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
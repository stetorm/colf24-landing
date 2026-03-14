import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play, Euro, FileText, Calculator } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EmailCaptureModal } from "./EmailCaptureModal";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll('.floating-card');
    
    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.5;
        
        const x = Math.sin(time + offset) * 30;
        const y = Math.cos(time + offset * 1.2) * 20;
        const rotateX = Math.sin(time + offset) * 10;
        const rotateY = Math.cos(time + offset * 0.8) * 15;
        
        element.style.transform = `
          translate3d(${x}px, ${y}px, 0) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
      
      requestAnimationFrame(animateCards);
    };
    
    animateCards();
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          ✨ Nuovo: Calcolo automatico contributi 2026
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          Genera le{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            buste paga
          </span>{" "}
          per la tua colf in pochi click
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Semplice, veloce e conforme alla legge. Calcola automaticamente stipendio, 
          contributi INPS, TFR, ferie e tredicesima per i tuoi lavoratori domestici.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => setModalOpen(true)}>
            Prova Gratuitamente
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" />
            Guarda la Demo
          </Button>
        </div>
        
        {/* 3D Graphics Scene */}
        <div className="relative mx-auto max-w-5xl h-96 lg:h-[500px]">
          <div 
            ref={sceneRef}
            className="relative w-full h-full perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-3xl shadow-2xl flex items-center justify-center z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Euro className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            {/* Floating Payroll Components */}
            
            {/* Busta Paga Card */}
            <div className="floating-card absolute top-16 left-20 w-40 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Busta Paga</div>
              <div className="space-y-2">
                <div className="h-3 bg-primary rounded w-full"></div>
                <div className="h-2 bg-muted rounded w-3/4"></div>
                <div className="h-2 bg-muted rounded w-5/6"></div>
              </div>
            </div>
            
            {/* Contributi INPS Card */}
            <div className="floating-card absolute top-32 right-16 w-36 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Contributi</div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>INPS</span>
                  <span className="font-semibold">€ 45</span>
                </div>
                <div className="h-1 bg-primary rounded w-full"></div>
                <div className="flex justify-between text-xs">
                  <span>Tot.</span>
                  <span className="font-semibold">€ 45</span>
                </div>
              </div>
            </div>
            
            {/* TFR Card */}
            <div className="floating-card absolute bottom-20 left-12 w-44 h-32 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">TFR Maturato</div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">€ 520</div>
                <div className="h-1 bg-green-500 rounded w-3/4"></div>
                <div className="text-xs text-muted-foreground">Aggiornato mensilmente</div>
              </div>
            </div>
            
            {/* Ferie e Permessi Card */}
            <div className="floating-card absolute bottom-24 right-20 w-38 h-36 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Ferie</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Maturate</span>
                  <span className="text-sm font-semibold">26 gg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Godute</span>
                  <span className="text-sm font-semibold">12 gg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Residue</span>
                  <span className="text-sm font-semibold text-primary">14 gg</span>
                </div>
              </div>
            </div>
            
            {/* Calcolo Stipendio */}
            <div className="floating-card absolute top-20 right-32 w-32 h-20 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Stipendio</div>
              <div className="text-lg font-bold text-primary">€ 1.200</div>
            </div>
            
            {/* Tredicesima Card */}
            <div className="floating-card absolute bottom-32 left-32 w-36 h-24 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Tredicesima</div>
              <div className="space-y-1">
                <div className="h-2 bg-primary rounded w-full"></div>
                <div className="h-2 bg-primary rounded w-3/4"></div>
                <div className="text-xs font-semibold mt-1">€ 850</div>
              </div>
            </div>
            
            {/* Malattia Card */}
            <div className="floating-card absolute top-40 left-40 w-40 h-28 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">Malattia</div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Giorni</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Importo</span>
                  <span className="font-semibold">€ 120</span>
                </div>
              </div>
            </div>
            
            {/* CCNL Card */}
            <div className="floating-card absolute top-12 right-48 w-34 h-26 bg-card border rounded-2xl shadow-lg p-4 transform-gpu">
              <div className="text-xs text-muted-foreground mb-2">CCNL</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs">Colf 2026</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="text-xs">Livello C</div>
                </div>
              </div>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </svg>
            
            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <EmailCaptureModal open={modalOpen} onOpenChange={setModalOpen} source="hero" />
    </section>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  FileText, 
  Calculator, 
  Shield, 
  Clock, 
  Euro, 
  Bell,
  Download,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Calcolo Automatico",
    description: "Calcolo preciso di stipendio, contributi INPS, TFR e tredicesima secondo il CCNL Colf aggiornato al 2026.",
    badge: "Base"
  },
  {
    icon: FileText,
    title: "Buste Paga PDF",
    description: "Genera buste paga professionali in formato PDF, pronte da stampare e consegnare al tuo lavoratore domestico.",
    badge: "Base"
  },
  {
    icon: Shield,
    title: "Conformità Legale",
    description: "Sempre aggiornato con le ultime normative INPS e CCNL. Garantiamo la massima conformità legale.",
    badge: "Pro"
  },
  {
    icon: Clock,
    title: "Gestione Ferie",
    description: "Monitora automaticamente ferie maturate, godute e residue. Calcola l'indennità sostitutiva alla cessazione.",
    badge: "Base"
  },
  {
    icon: Euro,
    title: "Contributi INPS",
    description: "Calcolo automatico dei contributi trimestrali INPS con bollettini MAV precompilati pronti per il pagamento.",
    badge: "Pro"
  },
  {
    icon: Bell,
    title: "Promemoria",
    description: "Ricevi notifiche per scadenze pagamenti, versamenti INPS e altre comunicazioni importanti.",
    badge: "Pro"
  },
  {
    icon: Download,
    title: "Archivio Digitale",
    description: "Tutte le buste paga archiviate in cloud, accessibili sempre e ovunque. Esporta lo storico quando vuoi.",
    badge: "Base"
  },
  {
    icon: CheckCircle2,
    title: "Calcolo TFR",
    description: "Traccia il TFR maturato mese per mese con calcoli precisi al centesimo. Genera il prospetto di liquidazione.",
    badge: "Pro"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Tutto ciò che ti serve per le buste paga
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Gestisci in modo semplice e professionale tutti gli aspetti della retribuzione 
            dei tuoi lavoratori domestici, risparmiando tempo e denaro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
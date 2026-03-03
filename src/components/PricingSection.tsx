import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Base",
    price: "Gratis",
    description: "Perfetto per chi ha una sola colf o badante",
    features: [
      "1 lavoratore domestico",
      "Buste paga illimitate",
      "Calcolo automatico contributi",
      "Download PDF",
      "Gestione ferie e TFR",
      "Supporto email"
    ],
    cta: "Inizia Gratis",
    popular: false
  },
  {
    name: "Pro",
    price: "€9,90",
    description: "Ideale per famiglie con più collaboratori",
    features: [
      "Fino a 5 lavoratori",
      "Tutto del piano Base",
      "Bollettini INPS precompilati",
      "Promemoria scadenze",
      "Archivio storico completo",
      "Supporto prioritario",
      "Esportazione dati"
    ],
    cta: "Prova 30 Giorni Gratis",
    popular: true
  },
  {
    name: "Commercialista",
    price: "€29,90",
    description: "Per professionisti che gestiscono più clienti",
    features: [
      "Lavoratori illimitati",
      "Gestione multi-cliente",
      "Dashboard completa",
      "API di integrazione",
      "White-label",
      "Supporto dedicato",
      "Formazione inclusa"
    ],
    cta: "Contatta il Team",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Prezzi trasparenti e convenienti
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Scegli il piano più adatto alle tue esigenze. Inizia gratuitamente e passa a un piano superiore quando vuoi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Più Popolare
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Gratis" && plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/mese</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
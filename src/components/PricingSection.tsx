import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
import { EmailCaptureModal } from "./EmailCaptureModal";

const plans = [
  {
    name: "Base",
    price: "€5",
    description: "Per chi ha una sola colf o badante",
    features: [
      "1 datore, 1 collaboratore",
      "Cedolini illimitati",
      "Calcolo contributi INPS",
      "Gestione TFR e tredicesima",
      "Download PDF storico",
    ],
    cta: "Inizia gratis",
    popular: false
  },
  {
    name: "Plus",
    price: "€10",
    description: "Per famiglie con più collaboratori domestici",
    features: [
      "1 datore, fino a 3 collaboratori",
      "Tutto del piano Base",
      "Gestione ferie e malattie",
      "Calcolo liquidazione",
      "Promemoria scadenze",
      "Esportazione dati",
    ],
    cta: "Inizia gratis",
    popular: true
  },
  {
    name: "Pro",
    price: "€30",
    description: "Per commercialisti e professionisti del settore",
    features: [
      "Datori e collaboratori illimitati",
      "Tutto del piano Plus",
      "Multi-utenza",
      "Elaborazione in batch",
      "Report avanzati",
      "Branding personalizzato",
      "Integrazioni e supporto dedicato",
    ],
    cta: "Contattaci",
    popular: false
  }
];

export function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Prezzi trasparenti e convenienti
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Piani chiari, senza sorprese. Scegli in base al numero di collaboratori che gestisci.
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
                  onClick={() => setModalOpen(true)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        source="pricing"
      />
    </section>
  );
}
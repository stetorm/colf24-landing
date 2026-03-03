import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    content: "Finalmente ho trovato un modo semplice per gestire la busta paga della mia colf. In 5 minuti ho tutto pronto!",
    author: "Maria Rossi",
    role: "Famiglia",
    company: "Milano",
    avatar: "MR"
  },
  {
    content: "Risparmio tempo prezioso ogni mese. Non devo più fare calcoli manuali e sono sicura che tutto sia a norma di legge.",
    author: "Giuseppe Verdi",
    role: "Datore di lavoro",
    company: "Roma",
    avatar: "GV"
  },
  {
    content: "Gestisco le buste paga per 3 badanti e questo servizio mi ha semplificato enormemente la vita. Consigliatissimo!",
    author: "Anna Bianchi",
    role: "Famiglia",
    company: "Torino",
    avatar: "AB"
  },
  {
    content: "Come commercialista uso BustaPagaFacile per tutti i miei clienti con colf e badanti. Efficiente e preciso.",
    author: "Luca Ferrari",
    role: "Commercialista",
    company: "Bologna",
    avatar: "LF"
  },
  {
    content: "I promemoria per le scadenze INPS sono fantastici. Non devo più preoccuparmi di dimenticare i pagamenti!",
    author: "Elena Russo",
    role: "Datore di lavoro",
    company: "Napoli",
    avatar: "ER"
  },
  {
    content: "Le buste paga generate sono professionali e chiare. La mia collaboratrice domestica le apprezza molto.",
    author: "Marco Colombo",
    role: "Famiglia",
    company: "Firenze",
    avatar: "MC"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Usato da migliaia di famiglie italiane
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Scopri cosa dicono le persone che hanno semplificato la gestione delle buste paga con BustaPagaFacile.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <blockquote className="text-sm mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
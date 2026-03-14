import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

// ⚠️ Sostituisci con il tuo URL di deployment Google Apps Script:
// Apps Script → Deploy → Manage deployments → copia "Web app URL"
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string;
interface EmailCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export function EmailCaptureModal({
  open,
  onOpenChange,
  source = "landing",
}: EmailCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMsg("Inserisci un indirizzo email valido.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    console.log("[EmailCapture] URL:", APPS_SCRIPT_URL);
    console.log("[EmailCapture] email:", email, "source:", source);

    if (!APPS_SCRIPT_URL) {
      console.error("[EmailCapture] VITE_APPS_SCRIPT_URL non definita nel .env");
      setStatus("error");
      setErrorMsg("Configurazione mancante: contatta il supporto.");
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("source", source);

      console.log("[EmailCapture] Invio fetch...");
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      console.log("[EmailCapture] Fetch completata.");

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("[EmailCapture] Errore fetch:", err);
      setStatus("error");
      setErrorMsg("Qualcosa è andato storto. Riprova tra qualche secondo.");
    }
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      // reset stato alla chiusura
      setEmail("");
      setStatus("idle");
      setErrorMsg("");
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="h-14 w-14 text-green-500" />
            <DialogTitle className="text-xl">Ottimo, ci sei!</DialogTitle>
            <p className="text-muted-foreground">
              Abbiamo ricevuto la tua email. Ti contatteremo presto con tutti i dettagli per iniziare.
            </p>
            <Button onClick={() => handleOpenChange(false)} className="mt-2">
              Chiudi
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Inizia gratis</DialogTitle>
              <DialogDescription>
                Inserisci la tua email e ti contatteremo per configurare il tuo account.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="la-tua@email.it"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  }}
                  disabled={status === "loading"}
                  autoFocus
                />
                {errorMsg && (
                  <p className="text-sm text-destructive">{errorMsg}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading" || !email}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Invio in corso…
                  </>
                ) : (
                  "Inizia gratis"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Nessuna carta di credito richiesta. Gratuito per sempre sul piano Base.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

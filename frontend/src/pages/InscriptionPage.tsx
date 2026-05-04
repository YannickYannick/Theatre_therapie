import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

import { BilletterieAtelierButtons, BilletterieImproFootnote } from "@/components/BilletterieAtelierButtons";
import { getSupabase, isSupabaseConfigured } from "@/integrations/supabase/client";

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(80),
  nom: z.string().trim().min(1, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z
    .string()
    .trim()
    .min(6, "Numéro trop court")
    .max(30, "Numéro trop long"),
  atelier: z
    .union([z.literal(""), z.enum(["emotions", "impro"])])
    .refine((v): v is "emotions" | "impro" => v !== "", { message: "Choisissez un atelier" }),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormInput = z.input<typeof schema>;
type FormValues = z.output<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-11";

export function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      message: "",
      atelier: "",
    },
  });

  useEffect(() => {
    document.title = "Inscription — Théâtre Thérapie · Paris";
    const desc =
      "Inscrivez-vous à un atelier Théâtre Thérapie à l'Âge d'or (Paris 13e) : Émotions encore et toujours ou Et... IMPRO.";
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", desc);
  }, []);

  const onSubmit = async (values: FormValues) => {
    if (!isSupabaseConfigured()) {
      toast.error(
        "Envoi en ligne indisponible : configurez VITE_SUPABASE_URL et VITE_SUPABASE_PUBLISHABLE_KEY, ou écrivez à kenza.elghadouini@gmail.com.",
      );
      return;
    }

    const { error } = await getSupabase().from("inscriptions").insert({
      prenom: values.prenom,
      nom: values.nom,
      email: values.email,
      telephone: values.telephone,
      atelier: values.atelier,
      message: values.message?.trim() ? values.message.trim() : null,
    });

    if (error) {
      toast.error("Une erreur est survenue. Merci de réessayer.");
      return;
    }

    toast.success("Inscription envoyée — Kenza vous recontactera bientôt.");
    setSubmitted(true);
    reset();
  };

  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-14 pb-20 lg:pt-20">
      <header className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--mint-soft)]/40 text-[color:var(--mint-soft-foreground)] px-3 py-1 text-xs font-semibold">
          Inscription
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl text-primary leading-tight">
          Réservez votre place
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Réservez d&apos;abord via la billetterie lorsqu&apos;elle est disponible, ou écrivez à Kenza avec le
          formulaire ci-dessous.
        </p>
      </header>

      <div className="mb-10 rounded-[2rem] bg-[color:var(--cream-deep)] border border-border/60 p-6 sm:p-8 text-center">
        <h2 className="font-display text-xl sm:text-2xl text-primary">Billetterie</h2>
        <BilletterieImproFootnote className="mt-3 mx-auto" />
        <div className="mt-6 flex justify-center">
          <BilletterieAtelierButtons className="justify-center" />
        </div>
      </div>

      {submitted ? (
        <div className="rounded-[2rem] bg-card border border-border/60 shadow-sm p-8 sm:p-10 text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-[color:var(--mint-soft)]/40 flex items-center justify-center text-primary">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="mt-5 font-display text-2xl text-foreground">Merci !</h2>
          <p className="mt-3 text-foreground/75">
            Votre demande d'inscription a bien été envoyée. Vous recevrez bientôt une réponse de
            Kenza.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
            onClick={() => setSubmitted(false)}
          >
            Envoyer une autre inscription
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[2rem] bg-card border border-border/60 shadow-sm p-6 sm:p-10 space-y-5"
          aria-label="Formulaire de contact pour une question ou une demande"
        >
          <p className="text-sm font-semibold text-foreground text-center -mt-1 pb-1">
            Message à Kenza (hors billetterie ou complément)
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Prénom" error={errors.prenom?.message}>
              <input {...register("prenom")} placeholder="Camille" className={inputClass} />
            </Field>
            <Field label="Nom" error={errors.nom?.message}>
              <input {...register("nom")} placeholder="Dupont" className={inputClass} />
            </Field>
          </div>

          <Field label="Email" error={errors.email?.message}>
            <input
              type="email"
              {...register("email")}
              placeholder="camille@exemple.com"
              className={inputClass}
            />
          </Field>

          <Field label="Téléphone" error={errors.telephone?.message}>
            <input
              type="tel"
              {...register("telephone")}
              placeholder="06 12 34 56 78"
              className={inputClass}
            />
          </Field>

          <Field label="Atelier choisi" error={errors.atelier?.message}>
            <select {...register("atelier")} className={inputClass}>
              <option value="">Sélectionnez un atelier</option>
              <option value="emotions">Émotions encore et toujours</option>
              <option value="impro">Et... IMPRO</option>
            </select>
          </Field>

          <Field label="Message (optionnel)" error={errors.message?.message}>
            <textarea
              {...register("message")}
              placeholder="Quelques mots sur votre parcours, vos attentes…"
              rows={5}
              className={`${inputClass} min-h-[120px] py-3 resize-y`}
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition disabled:opacity-60 inline-flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "Envoi…"
            ) : (
              <>
                Envoyer la demande
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center pt-2">
            Vos informations restent confidentielles et ne servent qu'à gérer votre inscription.
          </p>
        </form>
      )}
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

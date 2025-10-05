import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Transparent pricing for every stage
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Scale your workflows with simple, predictable plans
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p, i) => (
          <div key={i} className="relative rounded-2xl border bg-card p-6 shadow-sm">
            {'badge' in p && p.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border bg-background px-3 py-1 text-xs font-medium shadow-sm">
                {p.badge}
              </div>
            )}
            <div className="mb-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{p.price}</span>
                {p.period && <span className="text-muted-foreground">{p.period}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>
            </div>
            <ul className="space-y-3 text-sm">
              {p.features.map((f, k) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-muted p-1">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button className={p.ctaVariant === "outline" ? "" : "w-full"} variant={p.ctaVariant as any}>
                {p.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const plans = [
  {
    title: "Starter",
    price: "€59/month",
    period: "",
    subtitle: "Perfect for small teams getting started",
    features: [
      "1 website",
      "5 competitor tracking",
      "50 prompt simulations/ 6000 answers",
      "3 AI Platforms (ChatGPT, Perplexity, Google AI, Grok, Copilot, Meta)",
      "Email alerts"
    ],
    cta: "Get Started",
    ctaVariant: "outline",
  },
  {
    title: "Professional",
    badge: "Most Popular",
    price: "€149/month",
    period: "",
    subtitle: "For growing teams with higher volumes",
    features: [
      "2 websites",
      "15 competitor tracking",
      "150 prompt simulations",
      "3 AI Platforms (ChatGPT, Perplexity, Google AI)",
      "Content optimization",
      "2 seats",
      "Email alerts",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "default",
  },
  {
    title: "Business",
    price: "349/month",
    period: "",
    subtitle: "For large organizations with complex needs",
    features: [
      "5 websites",
      "30 competitor tracking",
      "Track 300+ prompts",
      "All platforms (ChatGPT, Perplexity, Google AI, Grok, Copilot, Meta, Claude, Deepseek, Qwen)",
      "Content optimization",
      "5 seats",
      "Email alerts",
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary",
  },
] as const;

export default Pricing;
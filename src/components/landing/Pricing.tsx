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
            {p.badge && (
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
    price: "Free",
    period: "",
    subtitle: "Perfect for small teams getting started",
    features: [
      "Access to ChatGPT, Perplexity, and AIO",
      "Track up to 25 prompts",
      "Prompts run across models on a daily interval",
      "Up to 2250 AI answers analyzed per month",
      "Access to 3 countries",
      "Unlimited seats",
      "Email Support",
    ],
    cta: "Get Started",
    ctaVariant: "outline",
  },
  {
    title: "Professional",
    badge: "Most Popular",
    price: "$99",
    period: "per month",
    subtitle: "For growing teams with higher volumes",
    features: [
      "Access to ChatGPT, Perplexity, and AIO",
      "Track up to 100 prompts",
      "Prompts run across models on a daily interval",
      "Up to 9000 AI answers analyzed per month",
      "Access to 5 countries",
      "Unlimited seats",
      "Email + Slack Support",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "default",
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    subtitle: "For large organizations with complex needs",
    features: [
      "Access to ChatGPT, Perplexity, and AIO",
      "Track 300+ prompts",
      "Prompts run across models on a daily interval",
      "27000+ AI answers analyzed per month",
      "Access to over 10 countries",
      "Unlimited seats",
      "Dedicated Account Rep",
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary",
  },
] as const;

export default Pricing;
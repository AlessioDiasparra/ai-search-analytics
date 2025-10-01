import Hero from "@/components/landing/Hero";
import ScrapingTools from "@/components/landing/ScrapingTools";
import PreviewTable from "@/components/landing/PreviewTable";
import { AnimatedPrompts } from "@/components/landing/AnimatedPrompts";
import { FloatingSectionNav } from "@/components/landing/FloatingSectionNav";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FloatingSectionNav />

      <section id="features">
        <ScrapingTools />
      </section>

      <AnimatedPrompts />

      <section id="dashboard">
        <PreviewTable />
      </section>

      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
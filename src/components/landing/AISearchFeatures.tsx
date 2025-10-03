"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BarChart3, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const AISearchFeatures = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
      
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
        >
          AI Search Strategies Backed By Real Data From{" "}
          <span 
            className="italic"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            ChatGPT
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground"
        >
          Build winning brand visibility & marketing strategies using live AI search analysis and prompt tracking data. Optimize your presence automatically with AI insights. Get recommendations based on what actually ranks—not theory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8"
        >
          <Button asChild size="lg" className="group">
            <Link href="/sign-up">
              Build Your AI Strategy
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
          >
            <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className={`inline-flex w-fit rounded-lg p-2 mb-3 ${feature.iconBg}`}>
                  <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className={`mt-6 rounded-lg overflow-hidden border ${feature.previewBg} p-4`}>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted-foreground/20 rounded w-3/4" />
                    <div className="h-2 bg-muted-foreground/20 rounded w-full" />
                    <div className="h-2 bg-muted-foreground/20 rounded w-5/6" />
                    <div className="flex gap-2 mt-4">
                      <div className="h-8 w-8 rounded bg-muted-foreground/10" />
                      <div className="flex-1">
                        <div className="h-2 bg-muted-foreground/20 rounded w-1/2 mb-1" />
                        <div className="h-2 bg-muted-foreground/20 rounded w-1/3" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    icon: Bot,
    iconBg: "bg-rose-500/10 border border-rose-500/20",
    iconColor: "text-rose-600 dark:text-rose-400",
    previewBg: "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20",
    title: "Track Brand Mentions Across AI Search",
    description: "Monitor 100+ prompts daily across ChatGPT, Perplexity, and AIO. Analyze visibility trends, citation patterns, and brand positioning in AI-generated responses—in real-time, not guesswork."
  },
  {
    icon: BarChart3,
    iconBg: "bg-purple-500/10 border border-purple-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    previewBg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    title: "AI-Powered Competitive Intelligence at Scale",
    description: "Analyze competitor strategies and benchmark performance. Get AI-generated insights on prompt clusters, sentiment analysis, and content gaps based on real ranking data across multiple countries."
  },
  {
    icon: Target,
    iconBg: "bg-teal-500/10 border border-teal-500/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    previewBg: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
    title: "Automated Visibility Optimization",
    description: "Track daily intervals, identify trending prompts, and optimize your content strategy. No manual research, no scattered data, no waiting—just actionable insights delivered to your dashboard."
  }
];

export default AISearchFeatures;
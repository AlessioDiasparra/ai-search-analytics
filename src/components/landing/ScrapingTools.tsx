"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

export const ScrapingTools = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_0%,_rgba(0,0,0,0.04),_transparent_60%)] dark:bg-[radial-gradient(80%_80%_at_50%_0%,_rgba(255,255,255,0.04),_transparent_60%)]" />

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Key Performance Metrics
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
        className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
      >
        Three essential metrics to monitor and optimize your brand's AI search presence.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Visibility */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={1}
        >
          <Card className="h-full border-blue-500/40 hover:border-blue-500 transition-colors">
            <CardHeader className="flex-row items-center gap-3">
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                <Eye className="size-5" />
              </div>
              <CardTitle className="text-base">Visibility</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Track how often your brand appears in AI search results across multiple platforms and queries.
            </CardContent>
          </Card>
        </motion.div>

        {/* Position */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={2}
        >
          <Card className="h-full border-emerald-500/40 hover:border-emerald-500 transition-colors">
            <CardHeader className="flex-row items-center gap-3">
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="size-5" />
              </div>
              <CardTitle className="text-base">Position</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Monitor your ranking placement and prominence within AI-generated responses and citations.
            </CardContent>
          </Card>
        </motion.div>

        {/* Sentiment */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={3}
        >
          <Card className="h-full border-rose-500/40 hover:border-rose-500 transition-colors">
            <CardHeader className="flex-row items-center gap-3">
              <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-2 text-rose-600 dark:text-rose-400">
                <Heart className="size-5" />
              </div>
              <CardTitle className="text-base">Sentiment</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Analyze the tone and context of how AI platforms reference and describe your brand.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrapingTools;
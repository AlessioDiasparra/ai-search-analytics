"use client";

import { motion } from "framer-motion";

const prompts = [
  { text: "Best CRM software with intuitive user interfaces", rotation: -15, delay: 0 },
  { text: "and customizable workflows", rotation: 5, delay: 0.1 },
  { text: "Based on what users are actually asking", rotation: -8, delay: 0.2 },
  { text: "Auto-generated Tags", rotation: 12, delay: 0.3 },
  { text: "Solution Aware", rotation: -5, delay: 0.4 },
  { text: "Feature", rotation: 8, delay: 0.5 },
  { text: "Estimated Volume", rotation: -12, delay: 0.6 },
  { text: "High Volume", rotation: 15, delay: 0.7 },
  { text: "What are the top CRM systems that provide", rotation: -10, delay: 0.8 },
  { text: "insights and automation?", rotation: 7, delay: 0.9 },
];

export const AnimatedPrompts = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Use Data to Pick Winners
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Leverage AI-suggested prompts and search volumes to focus on the biggest opportunities.
        </p>
      </div>

      <div className="relative h-[500px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Central title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute z-10 text-center bg-background/80 backdrop-blur-sm rounded-lg p-6 border shadow-lg max-w-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Suggested Prompts</h3>
            <p className="text-sm text-muted-foreground">(14)</p>
            <p className="text-xs text-muted-foreground mt-2">
              Based on what users are actually asking
            </p>
          </motion.div>

          {/* Animated floating prompts */}
          {prompts.map((prompt, idx) => {
            const angle = (idx / prompts.length) * 360;
            const radius = 280;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                whileInView={{
                  opacity: 0.7,
                  x,
                  y,
                  rotate: prompt.rotation,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: prompt.delay,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute text-xs sm:text-sm font-medium text-foreground/60 whitespace-nowrap pointer-events-none"
                style={{
                  left: "50%",
                  top: "50%",
                }}
              >
                {prompt.text}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedPrompts;
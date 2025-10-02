"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const SearchPrompt = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      className="mt-6 flex justify-center"
    >
      <div className="group relative w-full max-w-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0a1f3d] to-[#0d2847] rounded-full border border-white/10 shadow-2xl">
          <span className="flex-1 text-lg text-white/90 font-medium">
            How do you get discovered in AI search?
          </span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
            <ArrowRight className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
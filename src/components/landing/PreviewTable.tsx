"use client";

import { motion } from "framer-motion";

export const PreviewTable = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 sm:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-xl border bg-card shadow-sm"
      >
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 border-b px-3 py-2 sm:px-4">
          <div className="inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-emerald-500" aria-hidden />
              Tracked Prompts
            </span>
            <span className="text-muted-foreground">▼</span>
          </div>
          <div className="text-sm text-muted-foreground">Sorted by <span className="font-medium text-foreground">Created date</span></div>
          <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">View settings</span>
            <span>•</span>
            <span className="hidden sm:inline">Import / Export</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-muted/60 text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">Prompt</th>
                <th className="px-4 py-2 font-medium">Visibility</th>
                <th className="px-4 py-2 font-medium">Created</th>
                <th className="px-4 py-2 font-medium">Location</th>
                <th className="px-4 py-2 font-medium">Tags</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">
                    <span className="font-medium">{r.prompt}</span>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs ${
                      r.visibility === "High" 
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" 
                        : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
                    }`}>
                      {r.visibility}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{r.created}</td>
                  <td className="px-4 py-2">
                    <span className="rounded-md border px-2 py-0.5 text-foreground/80">
                      {r.location}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.map((tag) => (
                        <span key={tag} className="rounded-md border px-2 py-0.5 text-foreground/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

const rows = [
  {
    prompt: "Best AI search tools for marketing",
    visibility: "High",
    created: "2 days ago",
    location: "ChatGPT",
    tags: ["Marketing", "Tools"],
  },
  {
    prompt: "Compare SEO analytics platforms",
    visibility: "Medium",
    created: "5 days ago",
    location: "Perplexity",
    tags: ["SEO", "Analytics"],
  },
  {
    prompt: "AI-powered marketing automation",
    visibility: "High",
    created: "1 week ago",
    location: "Claude",
    tags: ["Marketing", "Automation"],
  },
];

export default PreviewTable;
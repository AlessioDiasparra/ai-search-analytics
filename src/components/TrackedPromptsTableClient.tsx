"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { ColumnDef } from "@tanstack/react-table";

// Skeleton fallback while the table code loads
function SkeletonTable() {
  return (
    <div className="space-y-3 p-2 min-h-[420px]">
      <div className="h-6 w-40 rounded bg-muted animate-pulse" />
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="col-span-5 grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((__, j) => (
              <div key={j} className="h-9 rounded bg-muted animate-pulse" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const DataTable = dynamic(
  () => import("@/components/DataTable").then((m) => m.DataTable),
  {
    ssr: false,
    loading: () => <SkeletonTable />,
  }
);

export type TrackedPrompt = {
  id: string;
  prompt: string;
  visibility: "High" | "Medium" | "Low";
  created: string;
  location: string;
  tags: string[];
};

const initialPrompts: TrackedPrompt[] = [
  {
    id: "1",
    prompt: "Best AI search tools for marketing",
    visibility: "High",
    created: "2 days ago",
    location: "ChatGPT",
    tags: ["Marketing", "Tools"],
  },
  {
    id: "2",
    prompt: "Compare SEO analytics platforms",
    visibility: "Medium",
    created: "5 days ago",
    location: "Perplexity",
    tags: ["SEO", "Analytics"],
  },
  {
    id: "3",
    prompt: "AI-powered marketing automation",
    visibility: "High",
    created: "1 week ago",
    location: "Claude",
    tags: ["Marketing", "Automation"],
  },
  {
    id: "4",
    prompt: "Best CRM software with intuitive interfaces",
    visibility: "High",
    created: "1 week ago",
    location: "ChatGPT",
    tags: ["CRM", "Software"],
  },
  {
    id: "5",
    prompt: "Top content marketing strategies 2025",
    visibility: "Medium",
    created: "2 weeks ago",
    location: "Perplexity",
    tags: ["Content", "Strategy"],
  },
];

export const TrackedPromptsTableClient = () => {
  const [data, setData] = React.useState<TrackedPrompt[]>(initialPrompts);

  const updatePrompt = (id: string, key: keyof TrackedPrompt, value: any) => {
    setData((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [key]: value } : p))
    );
  };

  const columns: ColumnDef<TrackedPrompt>[] = [
    {
      accessorKey: "prompt",
      header: "Prompt",
      cell: ({ row }) => (
        <input
          className="w-full bg-transparent outline-none font-medium"
          value={row.original.prompt}
          onChange={(e) => updatePrompt(row.original.id, "prompt", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "visibility",
      header: "Visibility",
      cell: ({ row }) => (
        <select
          className={`bg-transparent outline-none rounded-md px-2 py-0.5 text-xs ${
            row.original.visibility === "High"
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
              : row.original.visibility === "Medium"
              ? "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
              : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300"
          }`}
          value={row.original.visibility}
          onChange={(e) =>
            updatePrompt(row.original.id, "visibility", e.target.value)
          }
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      ),
    },
    {
      accessorKey: "created",
      header: "Created",
      cell: ({ row }) => (
        <span className="text-muted-foreground">{row.original.created}</span>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <select
          className="w-full bg-transparent outline-none rounded-md border px-2 py-0.5"
          value={row.original.location}
          onChange={(e) =>
            updatePrompt(row.original.id, "location", e.target.value)
          }
        >
          <option value="ChatGPT">ChatGPT</option>
          <option value="Perplexity">Perplexity</option>
          <option value="Claude">Claude</option>
          <option value="Gemini">Gemini</option>
        </select>
      ),
    },
    {
      accessorKey: "tags",
      header: "Tags",
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-1.5">
          {row.original.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border px-2 py-0.5 text-xs text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-md border bg-card p-2 min-h-[420px]">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
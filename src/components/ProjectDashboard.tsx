"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Info, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Mock data for brand mentions
const brandData = [
  { date: "04/20/2025", mentions: 6, prompts: 5.8 },
  { date: "04/21/2025", mentions: 5.8, prompts: 5.6 },
  { date: "04/22/2025", mentions: 5.5, prompts: 5.4 },
  { date: "04/23/2025", mentions: 5.3, prompts: 5.2 },
  { date: "04/24/2025", mentions: 5.2, prompts: 5.1 },
  { date: "04/25/2025", mentions: 5.0, prompts: 5.0 },
];

// Mock data for competitor mentions
const competitorData = [
  { date: "04/20/2025", websiteBrand: 84.8, adobeExpress: 30.8, figma: 27.9, visme: 25.7, piktochart: 9.2 },
  { date: "04/21/2025", websiteBrand: 84.5, adobeExpress: 30.5, figma: 27.7, visme: 25.5, piktochart: 9.1 },
  { date: "04/22/2025", websiteBrand: 84.3, adobeExpress: 30.3, figma: 27.5, visme: 25.3, piktochart: 9.0 },
  { date: "04/23/2025", websiteBrand: 84.0, adobeExpress: 30.0, figma: 27.3, visme: 25.1, piktochart: 8.9 },
  { date: "04/24/2025", websiteBrand: 83.8, adobeExpress: 29.8, figma: 27.1, visme: 24.9, piktochart: 8.8 },
  { date: "04/25/2025", websiteBrand: 83.5, adobeExpress: 29.5, figma: 26.9, visme: 24.7, piktochart: 8.7 },
];

const competitors = [
  { name: "Website Brand", value: 84.8, color: "#8b5cf6" },
  { name: "Adobe Express", value: 30.8, color: "#ec4899" },
  { name: "Figma", value: 27.9, color: "#f59e0b" },
  { name: "Visme", value: 25.7, color: "#10b981" },
  { name: "Piktochart", value: 9.2, color: "#3b82f6" },
];

export function ProjectDashboard() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Olympus</h1>
          <p className="text-sm text-muted-foreground mt-1">Project Overview</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Apr 19, 2025 - May 02, 2025
          </Button>
          <Select defaultValue="lastweek">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lastweek">Last week</SelectItem>
              <SelectItem value="lastmonth">Last month</SelectItem>
              <SelectItem value="last3months">Last 3 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Brand Mentions */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-base font-medium">Brand Mentions</h2>
              <Info className="h-4 w-4 text-muted-foreground" />
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                +1.4%
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">4.4%</span>
              <span className="text-sm text-muted-foreground">average</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">20 mentions / 455 responses</p>
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            View by Prompt →
          </Button>
        </div>
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={brandData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-xs"
                tick={{ fill: "var(--color-muted-foreground)" }}
              />
              <YAxis
                className="text-xs"
                tick={{ fill: "var(--color-muted-foreground)" }}
                domain={[0, 25]}
                ticks={[0, 6, 12, 23]}
                label={{ value: "%", angle: 0, position: "top" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="mentions"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Mentions"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="prompts"
                stroke="#94a3b8"
                strokeWidth={2}
                name="Prompts"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Competitor Mentions */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-base font-medium">Competitor Mentions</h2>
              <Info className="h-4 w-4 text-muted-foreground" />
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                +1.5%
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">30.6%</span>
              <span className="text-sm text-muted-foreground">average</span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm text-muted-foreground">836 mentions / 455 responses</p>
              <span className="text-xs text-muted-foreground">from 29.1% average</span>
            </div>
          </div>
        </div>

        {/* Competitor Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {competitors.map((comp) => (
            <div key={comp.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: comp.color }}
              />
              <span className="text-xs text-muted-foreground">
                {comp.name} ({comp.value}%)
              </span>
            </div>
          ))}
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs ml-auto">
            <span className="mr-1">›</span>
          </Button>
        </div>

        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={competitorData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-xs"
                tick={{ fill: "var(--color-muted-foreground)" }}
              />
              <YAxis
                className="text-xs"
                tick={{ fill: "var(--color-muted-foreground)" }}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                label={{ value: "%", angle: 0, position: "top" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Line
                type="monotone"
                dataKey="websiteBrand"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Website Brand"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="adobeExpress"
                stroke="#ec4899"
                strokeWidth={2}
                name="Adobe Express"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="figma"
                stroke="#f59e0b"
                strokeWidth={2}
                name="Figma"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="visme"
                stroke="#10b981"
                strokeWidth={2}
                name="Visme"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="piktochart"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Piktochart"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </main>
  );
}
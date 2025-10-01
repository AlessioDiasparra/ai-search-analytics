import { MetricsCards } from "@/components/MetricsCards"

export default function DashboardPage() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <MetricsCards totalLeads={1240} enrichmentProgress={68} recentActivityCount={27} />
      {/* ... add more dashboard widgets later ... */}
    </main>
  )
}
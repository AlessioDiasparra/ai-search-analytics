import { TrackedPromptsTableClient } from "@/components/TrackedPromptsTableClient"

export default function TrackedPromptsPage() {
  return (
    <main className="p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tracked Prompts</h1>
      </div>
      <TrackedPromptsTableClient />
      <p className="text-xs text-muted-foreground mt-2">
        Track and analyze your brand&apos;s visibility across AI search platforms. Click a cell to edit.
      </p>
    </main>
  )
}
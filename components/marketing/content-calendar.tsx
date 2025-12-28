"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

const scheduledDrops = [
  {
    date: "Oct 04",
    title: "River North Reel",
    channel: "Instagram + TikTok",
  },
  {
    date: "Oct 07",
    title: "Loop Cinematic Teaser",
    channel: "Vimeo + YouTube",
  },
  {
    date: "Oct 10",
    title: "Client Proofs Newsletter",
    channel: "Beehiiv",
  },
]

export function ContentCalendar() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date())

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr]">
      <div className="glass-effect rounded-2xl border border-border p-4">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="bg-transparent"
        />
      </div>
      <div className="glass-effect rounded-2xl border border-border p-6 space-y-4">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Planned Drops
        </div>
        <div className="space-y-3">
          {scheduledDrops.map((drop) => (
            <div key={drop.title} className="rounded-xl border border-border/60 p-4 bg-background/40">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{drop.date}</div>
              <div className="text-lg font-semibold text-foreground mt-1">{drop.title}</div>
              <div className="text-sm text-muted-foreground">{drop.channel}</div>
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Sync to Google Calendar, Asana, or Notion and auto-queue edits.
        </div>
      </div>
    </div>
  )
}

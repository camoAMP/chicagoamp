"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const watchData = [
  { day: "Mon", views: 1200, watchTime: 4800 },
  { day: "Tue", views: 1600, watchTime: 6100 },
  { day: "Wed", views: 2100, watchTime: 7200 },
  { day: "Thu", views: 1900, watchTime: 6900 },
  { day: "Fri", views: 2600, watchTime: 8200 },
  { day: "Sat", views: 1800, watchTime: 5400 },
  { day: "Sun", views: 2300, watchTime: 7600 },
]

const channelData = [
  { channel: "Vimeo", plays: 4100 },
  { channel: "Site", plays: 3500 },
  { channel: "YouTube", plays: 2900 },
  { channel: "Social", plays: 2100 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass-effect rounded-2xl border border-border p-6">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Watch Momentum</div>
        <div className="text-2xl font-semibold text-primary mt-2">Weekly Engagement</div>
        <div className="h-64 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={watchData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
              <YAxis stroke="rgba(255,255,255,0.6)" />
              <Tooltip
                contentStyle={{
                  background: "rgba(17,17,17,0.95)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  color: "#f8f8f8",
                }}
              />
              <Line type="monotone" dataKey="views" stroke="#00d4ff" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="watchTime" stroke="#ffd700" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-effect rounded-2xl border border-border p-6">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Channel Split</div>
        <div className="text-2xl font-semibold text-secondary mt-2">Distribution Reach</div>
        <div className="h-64 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={channelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="channel" stroke="rgba(255,255,255,0.6)" />
              <YAxis stroke="rgba(255,255,255,0.6)" />
              <Tooltip
                contentStyle={{
                  background: "rgba(17,17,17,0.95)",
                  border: "1px solid rgba(255,107,53,0.2)",
                  color: "#f8f8f8",
                }}
              />
              <Bar dataKey="plays" fill="#ff6b35" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

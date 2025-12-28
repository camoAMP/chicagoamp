import { AnalyticsCharts } from "@/components/analytics/analytics-charts"
import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { StatCard } from "@/components/amp/stat-card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const analyticsStats = [
  { label: "Total Plays", value: "42.1k", detail: "Last 30 days" },
  { label: "Avg Watch", value: "68%", detail: "Completion rate" },
  { label: "Top Region", value: "Chicago", detail: "31% of views" },
  { label: "Conversions", value: "1,204", detail: "Landing page" },
]

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PageHeader
          eyebrow="Analytics"
          title="Watch Analytics + Audience Signals"
          subtitle="Track watch time, heatmaps, and campaign lift across Vimeo and owned channels."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {analyticsStats.map((stat, index) => (
            <MotionReveal key={stat.label} delay={index * 0.05}>
              <StatCard {...stat} />
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10">
          <AnalyticsCharts />
        </div>
      </div>
      <Footer />
    </main>
  )
}

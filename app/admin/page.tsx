import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { StatCard } from "@/components/amp/stat-card"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { adminStats } from "@/lib/amp-data"

const workflows = [
  {
    title: "Vimeo Upload Pipeline",
    description: "Drag-drop multi-format video, auto-transcode, and schedule release windows.",
    action: "Go to Videos",
    href: "/admin/videos",
  },
  {
    title: "Smart Image Manager",
    description: "Auto-grab thumbnails, detect duplicates by SHA256, and batch optimize.",
    action: "Open Images",
    href: "/admin/images",
  },
  {
    title: "Marketing Suite",
    description: "Launch social blasts, publish Beehiiv newsletters, and sync content calendars.",
    action: "Open Marketing",
    href: "/marketing",
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Vimeo Admin Dashboard"
        title="Chicago AMP Command Center"
        subtitle="Monitor every upload, campaign, and monetized view from one neon-lit console."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat, index) => (
          <MotionReveal key={stat.label} delay={index * 0.05}>
            <StatCard {...stat} />
          </MotionReveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {workflows.map((flow, index) => (
          <MotionReveal key={flow.title} delay={0.1 + index * 0.08}>
            <Card className="glass-effect border-primary/20 h-full">
              <CardContent className="px-6 pt-6 flex flex-col h-full">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Workflow {index + 1}
                </div>
                <div className="text-2xl font-semibold mt-2">{flow.title}</div>
                <p className="text-sm text-muted-foreground mt-3 flex-1">{flow.description}</p>
                <Button
                  variant="outline"
                  className="mt-6 border-primary/40 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={flow.href}>{flow.action}</a>
                </Button>
              </CardContent>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </div>
  )
}

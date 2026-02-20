import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { ContentCalendar } from "@/components/marketing/content-calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { marketingActions } from "@/lib/amp-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const audience = [
  "Small to mid-size businesses running multi-channel campaigns",
  "Marketing teams that need one source of truth for content planning",
  "Founders who need faster campaign launches without agency bloat",
]

const painPoints = [
  "Scattered campaign planning across docs, chats, and spreadsheets",
  "Missed posting windows and inconsistent social/email output",
  "Slow content approval and launch workflows across teams",
]

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PageHeader
          eyebrow="Marketing Suite"
          title="A Single Operating Hub for Campaign Planning and Distribution"
          subtitle="Chicago AMP Marketing Suite helps teams plan content, align approvals, and launch across social plus newsletter channels without fragmented tools."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="glass-effect border-border">
            <CardContent className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What It Is</p>
              <h2 className="text-xl font-semibold">Planning + Publishing Workspace</h2>
              <p className="text-sm text-muted-foreground">
                A practical workspace to schedule content, track status, and trigger launches across social and email.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border">
            <CardContent className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Who It Is For</p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border">
            <CardContent className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Problems It Solves</p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {painPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 space-y-10">
          <MotionReveal>
            <Card className="glass-effect border-border">
              <CardContent className="p-6">
                <div className="space-y-2 mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Campaign Calendar</p>
                  <h3 className="text-2xl font-semibold">Plan Weekly and Monthly Campaign Cycles</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep your team synchronized with a clear planning surface for upcoming content, launch windows, and channel priorities.
                  </p>
                </div>
                <ContentCalendar />
              </CardContent>
            </Card>
          </MotionReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {marketingActions.map((action, index) => {
              const Icon = action.icon
              return (
                <MotionReveal key={action.title} delay={0.1 + index * 0.06}>
                  <Card className="glass-effect border-border">
                    <CardContent className="px-6 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Icon size={20} />
                      </div>
                      <div className="text-xl font-semibold mt-4">{action.title}</div>
                      <p className="text-sm text-muted-foreground mt-2">{action.description}</p>
                      <Button variant="outline" className="mt-5 border-primary/40 text-primary hover:bg-primary/10">
                        Launch Flow
                      </Button>
                    </CardContent>
                  </Card>
                </MotionReveal>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

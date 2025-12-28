import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { ContentCalendar } from "@/components/marketing/content-calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { marketingActions } from "@/lib/amp-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PageHeader
          eyebrow="Marketing Suite"
          title="Content Planner + Social Blast"
          subtitle="Queue campaigns, sync calendars, and launch multi-channel drops with Beehiiv newsletters built in."
        />

        <div className="mt-10 space-y-10">
          <MotionReveal>
            <ContentCalendar />
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
                      <Button
                        variant="outline"
                        className="mt-5 border-primary/40 text-primary hover:bg-primary/10"
                      >
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

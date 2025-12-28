import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { revenueStreams } from "@/lib/amp-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RevenuePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PageHeader
          eyebrow="Revenue Dashboard"
          title="Monetization Signals"
          subtitle="Track Ezoic ads, Vimeo tips, and affiliate performance in a single ledger."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon
            return (
              <MotionReveal key={stream.title} delay={0.05 * index}>
                <Card className="glass-effect border-border">
                  <CardContent className="px-6 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                      <Icon size={20} />
                    </div>
                    <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-4">
                      {stream.title}
                    </div>
                    <div className="text-3xl font-semibold mt-2 text-foreground">{stream.value}</div>
                    <div className="text-sm text-muted-foreground mt-2">{stream.detail}</div>
                  </CardContent>
                </Card>
              </MotionReveal>
            )
          })}
        </div>

        <div className="mt-10 glass-effect rounded-2xl border border-border p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Affiliate Tracking</div>
          <div className="text-2xl font-semibold mt-2">Top Performing Gear Links</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["DJI Pocket 3", "Aputure 600x", "Blackmagic 6K Pro"].map((item) => (
              <div key={item} className="rounded-xl border border-border/60 p-4 bg-background/40">
                <div className="text-lg font-semibold">{item}</div>
                <div className="text-sm text-muted-foreground">Conversion rate 6.2%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

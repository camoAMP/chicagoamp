import { MotionReveal } from "@/components/motion-reveal"
import { PageHeader } from "@/components/amp/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { seoChecklist } from "@/lib/amp-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const statusStyles: Record<string, string> = {
  Healthy: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Needs update": "bg-secondary/15 text-secondary border-secondary/30",
}

export default function SeoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PageHeader
          eyebrow="SEO Optimizer"
          title="Auto-sitemaps + Schema Control"
          subtitle="Keep OpenGraph cards, structured data, and sitemaps synchronized with every Vimeo upload."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {seoChecklist.map((item, index) => (
            <MotionReveal key={item.title} delay={0.05 * index}>
              <Card className="glass-effect border-border">
                <CardContent className="px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.detail}</div>
                    </div>
                    <Badge className={statusStyles[item.status] ?? "bg-muted"}>{item.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 glass-effect rounded-2xl border border-border p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">OpenGraph Studio</div>
          <div className="text-2xl font-semibold mt-2">Social-ready visuals</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            Generate branded OG and Twitter card images with watermarking, CTA overlays, and dynamic campaign tags.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Cinematic Dark", "Neon Glow", "Gold Highlight"].map((theme) => (
              <div key={theme} className="rounded-xl border border-border/60 p-4 bg-background/40">
                <div className="text-lg font-semibold">{theme}</div>
                <div className="text-sm text-muted-foreground">Auto-export 1200x630</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

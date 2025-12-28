import { PageHeader } from "@/components/amp/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { StatCard } from "@/components/amp/stat-card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const stats = [
  { label: "Plays", value: "14.2k", detail: "Last 7 days" },
  { label: "Avg Watch", value: "71%", detail: "Completion rate" },
  { label: "Top Device", value: "Mobile", detail: "62%" },
]

export default function PlayerPage({ params }: { params: { id: string } }) {
  const videoId = params.id

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PageHeader
          eyebrow="Player"
          title={`Video Player: ${videoId}`}
          subtitle="Responsive embed with watch analytics, playlists, and engagement hotspots."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Card className="glass-effect border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}?autoplay=0&title=0&byline=0&portrait=0`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute inset-0 h-full w-full"
                  title="Chicago AMP Player"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
            <Card className="glass-effect border-border">
              <CardContent className="px-6 pt-6 space-y-3">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Playlist</div>
                {["Agency Sizzle", "Product Launch", "Chicago After Dark"].map((item) => (
                  <div key={item} className="rounded-xl border border-border/60 p-3 bg-background/40">
                    <div className="text-sm font-medium">{item}</div>
                    <div className="text-xs text-muted-foreground">Next up in 00:08</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

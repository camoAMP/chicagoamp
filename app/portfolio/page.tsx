import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { CTASection } from "@/components/cta-section"

const featuredVideoEmbeds = [
  {
    title: "Real Estate Showcase",
    description: "Property storytelling built for buyer attention and agent conversion.",
    embedUrl: "https://player.vimeo.com/video/1143186935?badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Event Highlight Reel",
    description: "On-site event coverage with pacing optimized for social playback.",
    embedUrl:
      "https://player.vimeo.com/video/1148500445?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Commercial Spot",
    description: "Short-form campaign video designed for high-impact seasonal launches.",
    embedUrl:
      "https://player.vimeo.com/video/1146799101?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <PortfolioGrid />

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Featured Video Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Video <span className="text-primary glow-cyan">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated reel selection from our broader multi-discipline portfolio.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredVideoEmbeds.map((item) => (
              <article key={item.title} className="space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden glass-effect border border-border">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

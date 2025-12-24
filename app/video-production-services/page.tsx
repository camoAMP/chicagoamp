import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { servicesData, type ServiceDetail } from "@/lib/services-data"

const featuredSlugs = [
  "commercial-video",
  "music-videos",
  "event-coverage",
  "wedding-films",
  "lighting-set-design",
  "sound-design",
]

const featuredServices: ServiceDetail[] = featuredSlugs
  .map((slug) => servicesData.find((service) => service.slug === slug))
  .filter((service): service is ServiceDetail => Boolean(service))

export default function VideoProductionServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
            Video Production Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl mx-auto">Crafting cinematic stories across every medium</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From commercials and music videos to live events and weddings, Chicago AMP delivers end-to-end production services
            backed by crews, creative, and gear that scale to your ambitions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {featuredServices.map((service) => (
              <Card key={service.slug} className="glass-effect border-border p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    {service.statLine && <span className="text-xs text-primary font-semibold uppercase">{service.statLine}</span>}
                  </div>
                  {service.heroTagline && <p className="text-base font-semibold text-muted-foreground">{service.heroTagline}</p>}
                  <p className="text-sm text-muted-foreground">
                    {(service.introParagraph ?? service.longDescription).split(".")[0]}.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href={`/${service.slug}`}>View Service</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/contact">Start a project</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project begins with a conversation. Reach out to discuss your vision, timeline, and budget. We'll provide a
            detailed proposal outlining our approach, deliverables, and investment required.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

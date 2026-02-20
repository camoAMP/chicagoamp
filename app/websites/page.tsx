import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"

const externalSites = [
  {
    name: "Beloveful",
    url: "https://beloveful.com",
    description: "Brand-forward storytelling and community-first design with a calm, editorial layout.",
    tags: ["Brand", "Lifestyle", "Content"],
  },
  {
    name: "Our Community in Unity",
    url: "https://ourcommunityinunity.org",
    description: "Community-centered nonprofit site focused on impact, programs, and local outreach.",
    tags: ["Nonprofit", "Community", "Program"],
  },
]

export default function WebsitesShowcasePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
            Website Builds & Experiences
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold">All the experiences we&apos;ve crafted</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore every standalone page in the Chicago AMP ecosystem—from commercial campaigns to music videos and production
            departments. Each link opens one of our immersive website builds.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Client Websites</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Mini site previews</h2>
            <p className="text-lg text-muted-foreground">
              Live previews of the client websites we&apos;ve shipped. Tap any site to open the full experience.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {externalSites.map((site) => (
              <Card key={site.url} className="glass-effect border-border overflow-hidden">
                <div className="relative bg-black/30">
                  <div className="pt-[62%]" />
                  <div className="absolute inset-0">
                    <iframe
                      src={site.url}
                      title={`${site.name} preview`}
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="h-[200%] w-[200%] origin-top-left scale-[0.5] pointer-events-none"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Live website</p>
                      <h3 className="text-xl font-semibold">{site.name}</h3>
                    </div>
                    <Button asChild size="sm">
                      <a href={site.url} target="_blank" rel="noreferrer">
                        Open site
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">{site.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Some websites may block embedded previews. If you see a blank frame, click “Open site.”
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Card key={service.slug} className="glass-effect border-border p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`${service.color} w-10 h-10 rounded-full flex items-center justify-center bg-background/70`}>
                      <service.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Website Build</p>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                  </div>
                  {service.heroTagline && <p className="text-base font-semibold text-muted-foreground">{service.heroTagline}</p>}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {service.introParagraph ?? service.longDescription}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href={`/services/${service.slug}`}>Open page</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/contact">Talk with us</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

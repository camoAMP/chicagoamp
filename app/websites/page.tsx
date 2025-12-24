import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/lib/services-data"

export default function WebsitesShowcasePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
            Our Website Builds & Experiences
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold">All the experiences we&apos;ve crafted</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore every standalone page in the Chicago AMP ecosystem—from commercial campaigns to music videos and production
            departments. Each link opens one of our immersive website builds.
          </p>
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
                    <Link href={`/${service.slug}`}>Open page</Link>
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

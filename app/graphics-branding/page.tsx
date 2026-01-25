import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { withBasePath } from "@/lib/with-base-path"

const brandingPillars = [
  {
    title: "Identity systems",
    description: "Logos, typography, color, and usage rules that make your brand consistent everywhere.",
  },
  {
    title: "Graphic assets",
    description: "Campaign graphics, social templates, and presentation decks that keep the story tight.",
  },
  {
    title: "Brand launch kits",
    description: "Everything your team needs to roll out the brand with confidence.",
  },
]

const deliverables = [
  "Logo suite and brand mark variations",
  "Color palettes, typography, and usage guidelines",
  "Social templates, ads, and launch graphics",
  "Pitch decks, one-pagers, and sales collateral",
  "Packaging or merch design when needed",
  "Digital copy pairing for consistency across channels",
]

const processSteps = [
  {
    title: "Discovery + goals",
    description: "We align on audience, tone, and what success needs to look like.",
  },
  {
    title: "Concept + system",
    description: "We design the visual language and build the assets that carry it.",
  },
  {
    title: "Rollout + refinement",
    description: "We deliver production-ready files and polish everything for launch.",
  },
]

export default function GraphicsBrandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground px-4 py-1 uppercase tracking-[0.3em]">
                Graphics + Branding
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-balance">
                Graphic design that makes your brand feel undeniable.
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                We build visual identities and graphic systems that hold up across every touchpoint - from logo to full
                campaign.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Build my brand</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/portfolio">See branding work</Link>
                </Button>
              </div>
            </div>
            <div className="glass-effect rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src={withBasePath("/portfolio-tech-branding.jpg")}
                alt="Branding boards and graphic design assets"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {brandingPillars.map((pillar) => (
              <Card key={pillar.title} className="glass-effect border-border p-6 space-y-3">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <Card className="glass-effect border-border p-8 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Deliverables</p>
              <h2 className="text-3xl font-bold">Everything you need to launch</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card className="glass-effect border-border p-8 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Process</p>
              <h2 className="text-3xl font-bold">A fast, clear creative flow</h2>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">Step {index + 1}</p>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-border p-10 text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Ready to build</p>
            <h3 className="text-3xl sm:text-4xl font-bold">Bring the brand to life</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tell us what the brand should feel like and we will design the visuals that make it real.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a branding project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

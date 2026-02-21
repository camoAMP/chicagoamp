import type { Metadata } from "next"
import Link from "next/link"
import { Lightbulb, Sparkles, FlaskConical, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { DynamicCursor } from "@/components/dynamic-cursor"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LabsPrototypeTools } from "@/components/labs-prototype-tools"
import { withBasePath } from "@/lib/with-base-path"

const baseTitle = "Labs | Innovation Hub"
const baseDescription =
  "Chicago AMP Labs explores AI video personalization, synthetic media production, and 3D web animation trends through experimental prototypes."

export const metadata: Metadata = {
  title: baseTitle,
  description: baseDescription,
  keywords: [
    "AI Video Personalization",
    "Synthetic Media Production",
    "3D Web Animation Trends",
    "Innovation Hub",
    "Chicago Creative Technology Lab",
  ],
  openGraph: {
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    url: "https://www.chicagoamp.com/labs",
    images: ["/chicago-amp-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    images: ["/chicago-amp-logo.png"],
  },
}

const labExperiments = [
  {
    title: "Atmosphere Engineering R&D",
    summary: "Precision lighting and soundscape prototypes designed to increase emotional retention in branded films.",
    icon: Lightbulb,
    media: "/6e7099ba-52f1-4ed4-861c-d4b168b315ae.mp4",
    poster: "/L1000582-2.jpg",
  },
  {
    title: "AI-Assisted Scene Variations",
    summary: "Rapid visual variant generation used to test audience response before final production deployment.",
    icon: Cpu,
    media: "/7b7d2056-b7e4-44a9-9c58-0512d82d003c.mp4",
    poster: "/L1000639.jpg",
  },
  {
    title: "Realtime Event Narrative Engine",
    summary: "Live and hybrid experiment stack for turning on-site captures into same-day social story arcs.",
    icon: FlaskConical,
    media: "/ChicagoAmp-LogoBuild.mp4",
    poster: "/movie.jpg",
  },
]

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DynamicCursor />
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,212,255,0.16),transparent_40%),radial-gradient(circle_at_82%_75%,rgba(255,107,53,0.12),transparent_42%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <Badge className="border border-primary/40 bg-primary/20 text-primary uppercase tracking-[0.2em]">Labs</Badge>
            <h1 className="text-4xl font-bold text-balance sm:text-6xl">The Innovation Hub</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This is where we bet on ideas. We test atmospheres, formats, AI-assisted workflows, and production systems
              before they graduate into client-facing campaigns.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-3">
            {labExperiments.map((experiment) => (
              <Card key={experiment.title} className="overflow-hidden border-border/70 bg-card/70 backdrop-blur">
                <div className="relative aspect-video bg-black/35">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={withBasePath(experiment.poster)}
                    className="h-full w-full object-cover"
                    data-cursor="play"
                  >
                    <source src={withBasePath(experiment.media)} type="video/mp4" />
                  </video>
                  <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60">
                    <experiment.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <h2 className="text-xl font-semibold">{experiment.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{experiment.summary}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-10 border-border/70 bg-card/70 p-6 text-center backdrop-blur sm:p-9">
            <div className="mx-auto max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Next Experiment Track</p>
              <h2 className="text-3xl font-bold">Want to co-build a pilot with us?</h2>
              <p className="text-muted-foreground">
                Bring a hypothesis, audience, or channel challenge. We’ll engineer a test and map it to outcomes.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
                <Link href="/#project-builder">
                  Start Discovery
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Prototype Tools</p>
            <h2 className="text-3xl font-bold">Interactive concept testing surfaces</h2>
          </div>
          <LabsPrototypeTools />
        </div>
      </section>

      <Footer />
    </main>
  )
}

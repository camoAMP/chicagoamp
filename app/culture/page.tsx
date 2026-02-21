import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DynamicCursor } from "@/components/dynamic-cursor"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CultureMotionPortraits } from "@/components/culture-motion-portraits"

const baseTitle = "Culture | Reason to Trust"
const baseDescription =
  "Chicago AMP culture: a quality manifesto, Chicago-rooted creative authority, and the creative pursuit of serious results."

export const metadata: Metadata = {
  title: baseTitle,
  description: baseDescription,
  keywords: [
    "Chicago Creative Agency Culture",
    "Quality Manifesto",
    "Never Settle Standards",
    "The creative pursuit of serious results",
    "Chicago Brand Storytelling Authority",
  ],
  openGraph: {
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    url: "https://www.chicagoamp.com/culture",
    images: ["/chicago-amp-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    images: ["/chicago-amp-logo.png"],
  },
}

const manifestoPoints = [
  {
    principle: "Always Curious",
    detail:
      "We test new formats, channels, and technologies continuously so narrative strategy evolves with audience behavior.",
  },
  {
    principle: "Performance Driven",
    detail:
      "Creative output is instrumented to measurable outcomes, including conversion lift, lead quality, and pipeline impact.",
  },
  {
    principle: "Build Relationships",
    detail:
      "We prioritize long-term trust with clients and audiences by making empathy, clarity, and communication visible in every project.",
  },
  {
    principle: "Bet on Ideas",
    detail:
      "We prototype bold concepts early, pressure-test them quickly, and scale what proves strategic and creative value.",
  },
  {
    principle: "Never Settle",
    detail:
      "Our quality floor is high: 8K-ready capture standards, precision color grading, and strategic soundscapes tuned for narrative impact.",
  },
]

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DynamicCursor />
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,212,255,0.14),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(255,215,0,0.12),transparent_44%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <Badge className="border border-accent/40 bg-accent/20 text-accent uppercase tracking-[0.2em]">Culture</Badge>
            <h1 className="text-4xl font-bold text-balance sm:text-6xl">Reason to trust the partnership.</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We built Chicago AMP around a simple standard: cinematic craft and performance outcomes are not separate
              disciplines. They are one operating system.
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">The creative pursuit of serious results.</p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border/70 bg-card/70 p-6 backdrop-blur sm:p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Quality Manifesto</p>
                <h2 className="text-3xl font-bold">How we hold the line on standards</h2>
              </div>
              <ul className="space-y-4">
                {manifestoPoints.map((point) => (
                  <li
                    key={point.principle}
                    className="rounded-xl border border-border bg-background/45 px-4 py-3 text-sm leading-relaxed"
                  >
                    <p className="font-semibold text-foreground">{point.principle}</p>
                    <p className="mt-1 text-muted-foreground">{point.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Motion Portraits</p>
            <h2 className="text-3xl font-bold">The team in motion</h2>
          </div>
          <CultureMotionPortraits />
          <div className="pt-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
              <Link href="/#project-builder">Build Your World</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Brain, Bot, Megaphone, Sparkles, Globe, Layers3 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { DynamicCursor } from "@/components/dynamic-cursor"
import { Footer } from "@/components/footer"
import { DiscoveryBot } from "@/components/discovery-bot"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const baseTitle = "Services | Discovery Lab"
const baseDescription =
  "Chicago AMP Discovery Lab: full-funnel campaign strategy, immersive UX design, managed TikTok/Meta ad distribution, and AI-enhanced creative systems."

export const metadata: Metadata = {
  title: baseTitle,
  description: baseDescription,
  keywords: [
    "Full-Funnel Campaign Strategy",
    "Managed Ad Spend for TikTok/Meta",
    "Immersive UX Design",
    "Performance Marketing and Paid Distribution",
    "Chicago Video Marketing Agency",
  ],
  openGraph: {
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    url: "https://www.chicagoamp.com/services",
    images: ["/chicago-amp-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${baseTitle} | Chicago AMP`,
    description: baseDescription,
    images: ["/chicago-amp-logo.png"],
  },
}

const solutionTracks = [
  {
    title: "Short-Form Social Dominance",
    icon: Sparkles,
    detail:
      "High-frequency short-form creative systems designed for retention, saves, and conversion intent across Reels, TikTok, and Shorts.",
    seo: "Video SEO + creative testing for rapid narrative distribution.",
  },
  {
    title: "Strategic Website Design",
    icon: Globe,
    detail:
      "Narrative-first web architecture that combines cinematic presentation with frictionless conversion pathways.",
    seo: "Immersive UX design tuned for conversion performance and speed.",
  },
  {
    title: "Performance Marketing & Paid Distribution",
    icon: Megaphone,
    detail:
      "Managed ad spend, channel sequencing, and media strategy across TikTok, Meta, YouTube, and high-intent search ecosystems.",
    seo: "Full-funnel campaign strategy with measurable attribution frameworks.",
  },
  {
    title: "AI-Enhanced Suite",
    icon: Brain,
    detail:
      "AI-assisted variation generation, audience-adapted messaging, and synthetic creative iterations for faster learning loops.",
    seo: "High-speed concept adaptation without lowering creative quality standards.",
  },
]

const packages = [
  {
    title: "Starter World-Builder",
    fit: "For focused campaign launches",
    includes: [
      "Discovery sprint + psychographic mapping",
      "One narrative campaign system",
      "Channel-ready core asset set",
    ],
  },
  {
    title: "Growth Accelerator",
    fit: "For scaling multi-channel demand",
    includes: [
      "Always-on creative and paid distribution",
      "Weekly performance and story iteration loops",
      "Narrative + funnel optimization cadence",
    ],
  },
  {
    title: "Enterprise Immersion",
    fit: "For high-stakes market leadership",
    includes: [
      "Cross-team narrative operating system",
      "High-volume production + advanced delivery stack",
      "Executive reporting tied to pipeline outcomes",
    ],
  },
]

const technicalPlaybook = [
  "Psychographic segmentation before production planning",
  "HLS/DASH adaptive delivery for stable high-bitrate playback",
  "AI-enhanced variation testing and audience adaptation",
  "Performance telemetry integrated with creative decision loops",
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DynamicCursor />
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,212,255,0.16),transparent_42%),radial-gradient(circle_at_83%_76%,rgba(255,107,53,0.13),transparent_44%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <Badge className="border border-primary/40 bg-primary/20 text-primary uppercase tracking-[0.2em]">
              Services / Discovery Lab
            </Badge>
            <h1 className="text-4xl font-bold text-balance sm:text-6xl">
              Research-first service architecture for market-dominating narratives.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We do not start with a commodity task list. We start with audience psychographics, market position, and
              behavior-change goals, then engineer the right production and distribution system.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
              <Link href="/#project-builder">Start Discovery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {solutionTracks.map((track, index) => (
              <Card key={track.title} className="relative overflow-hidden border-border/70 bg-card/70 p-6 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70">
                    <track.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Solution {index + 1}</p>
                    <h2 className="text-2xl font-bold">{track.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{track.detail}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-accent">{track.seo}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <Card className="border-border/70 bg-card/70 p-6 backdrop-blur sm:p-8">
            <div className="mb-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Productized Packages</p>
              <h2 className="text-3xl font-bold">Choose your world-building scope</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg.title} className="rounded-xl border border-border bg-background/45 p-4">
                  <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{pkg.fit}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-border/70 bg-card/70 p-6 backdrop-blur">
            <div className="mb-5 flex items-center gap-2">
              <Layers3 className="h-4 w-4 text-primary" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technical Playbook</p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {technicalPlaybook.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-background/45 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <DiscoveryBot />
          <Card className="border-border/70 bg-card/70 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <Bot className="h-4 w-4 text-accent" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Conversion Engine</p>
            </div>
            <h3 className="text-2xl font-bold">Ready to define your world?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Move from chat to action: open the multi-step builder, define goals, and route directly to discovery
              scheduling with context preserved.
            </p>
            <Button asChild className="mt-5 bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
              <Link href="/#project-builder">Build Your World</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

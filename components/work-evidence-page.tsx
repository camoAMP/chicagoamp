"use client"

import { useEffect, useRef, useState, type MouseEventHandler } from "react"
import Link from "next/link"
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { ArrowRight, Play, Sparkles, TrendingUp, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/with-base-path"

type PerformanceMetric = {
  label: string
  value: string
  score: number
  note: string
}

type CaseStudy = {
  slug: string
  title: string
  client: string
  year: string
  cardHeight: string
  tagline: string
  previewVideo: string
  previewPoster: string
  pinnaclePrinciple: string
  pinnacleHeading: string
  pinnacleNarrative: string
  pinnacleValue: string
  atmosphereEngineering: {
    precisionLighting: string
    strategicSoundscapes: string
    highFidelityDelivery: string
  }
  performancePanel: PerformanceMetric[]
}

const workCaseStudies: CaseStudy[] = [
  {
    slug: "hp-amug-2024",
    title: "HP AMUG 2024",
    client: "HP 3D Printing",
    year: "2024",
    cardHeight: "aspect-[4/5]",
    tagline: "Immersive 3D printing narrative engineered for technical authority and human wonder.",
    previewVideo: "/6e7099ba-52f1-4ed4-861c-d4b168b315ae.mp4",
    previewPoster: "/portfolio-tech-conference.jpg",
    pinnaclePrinciple: "Bet on Ideas",
    pinnacleHeading: "How 'Bet on Ideas' Led the Strategy",
    pinnacleNarrative:
      "We framed AMUG as a story of makers shaping the future, not just a product showcase. Experimental scene sequencing and AI-assisted edit variants helped us find the strongest emotional arc around invention and craftsmanship.",
    pinnacleValue: "Pinnacle Value: Positioned HP as both technical leader and cultural catalyst in additive manufacturing.",
    atmosphereEngineering: {
      precisionLighting:
        "8K capture with precision color grading to reveal material texture, machine detail, and on-stage product fidelity.",
      strategicSoundscapes:
        "Layered servo hum, crowd tension beds, and heartbeat pulses were designed to amplify the reveal moments.",
      highFidelityDelivery:
        "Delivered through multi-bitrate HLS/DASH ladders for buffer-free 4K playback across event and web surfaces.",
    },
    performancePanel: [
      { label: "View-Through Rate", value: "71%", score: 71, note: "Technical demo sequences held attention past the midpoint." },
      { label: "Qualified Leads", value: "+200%", score: 88, note: "Post-event demand forms outperformed the prior AMUG cycle." },
      { label: "Session Dwell Lift", value: "+54%", score: 54, note: "Audience stayed longer on engineering-focused modules." },
    ],
  },
  {
    slug: "abta-2023",
    title: "ABTA 2023",
    client: "ABTA",
    year: "2023",
    cardHeight: "aspect-[4/6]",
    tagline: "Cinematic field storytelling around compassionate people helping others through difficult moments.",
    previewVideo: "/7b7d2056-b7e4-44a9-9c58-0512d82d003c.mp4",
    previewPoster: "/portfolio-festival-event.jpg",
    pinnaclePrinciple: "Build Relationships",
    pinnacleHeading: "How 'Build Relationships' Shaped the Narrative",
    pinnacleNarrative:
      "We prioritized human connection over institutional messaging, capturing volunteer-to-community interactions as the narrative spine. The strategy made trust and empathy visible in every sequence.",
    pinnacleValue: "Pinnacle Value: Increased trust signal and partnership momentum for community-facing initiatives.",
    atmosphereEngineering: {
      precisionLighting:
        "Natural-key lighting ratios were calibrated for clarity and warmth, then finished with consistent tonal balance in grade.",
      strategicSoundscapes:
        "Dialogue-first mixes layered with environmental textures to keep compassion and urgency present without overpowering voices.",
      highFidelityDelivery:
        "Built 4K master + adaptive HLS/DASH streams so playback remained stable in low-bandwidth community environments.",
    },
    performancePanel: [
      { label: "View-Through Rate", value: "64%", score: 64, note: "Story-first structure sustained long-form completion." },
      { label: "Volunteer Inquiries", value: "+118%", score: 78, note: "Post-campaign outreach volume increased substantially." },
      { label: "Action Intent Lift", value: "+43%", score: 43, note: "More users moved from viewing to participation actions." },
    ],
  },
  {
    slug: "saybrook-brand-film",
    title: "Saybrook",
    client: "Saybrook",
    year: "2025",
    cardHeight: "aspect-[4/5]",
    tagline: "High-production cinematic frames engineered around the 'World is Worth Fighting For' narrative.",
    previewVideo: "/ChicagoAmp-LogoBuild.mp4",
    previewPoster: "/portfolio-food-film.jpg",
    pinnaclePrinciple: "Never Settle",
    pinnacleHeading: "How 'Never Settle' Drove Execution",
    pinnacleNarrative:
      "Every scene was iterated for emotional resonance and strategic clarity. We refined pacing, visual density, and copy rhythm until the brand position felt both premium and urgent.",
    pinnacleValue: "Pinnacle Value: Turned brand story into a conversion-driving campaign system.",
    atmosphereEngineering: {
      precisionLighting:
        "Cinematic contrast maps and selective color isolation were used to reinforce conflict, resolve, and conviction in each frame.",
      strategicSoundscapes:
        "Pulse-forward percussion, low-end tension beds, and high-frequency detail cues were composed for narrative acceleration.",
      highFidelityDelivery:
        "Mastered for high-bitrate 4K with adaptive HLS/DASH streaming to preserve texture and color intent on every screen.",
    },
    performancePanel: [
      { label: "Conversion Lift", value: "+162%", score: 86, note: "Campaign landing flows converted significantly above baseline." },
      { label: "Qualified Leads", value: "+200%", score: 90, note: "Enterprise-fit inquiry quality and volume rose sharply." },
      { label: "Video Completion", value: "68%", score: 68, note: "Narrative retention held through closing CTA sequence." },
    ],
  },
  {
    slug: "legacy-social-engine",
    title: "Legacy Social Engine",
    client: "Chicago AMP Internal",
    year: "2026",
    cardHeight: "aspect-[4/6]",
    tagline: "Short-form dominance system that converts event stories into sustained social authority.",
    previewVideo: "/6e7099ba-52f1-4ed4-861c-d4b168b315ae.mp4",
    previewPoster: "/portfolio-marketing-campaign.jpg",
    pinnaclePrinciple: "Always Curious",
    pinnacleHeading: "How 'Always Curious' Expanded Reach",
    pinnacleNarrative:
      "We used rapid edit experimentation, copy angle testing, and AI-assisted variation maps to identify which story sequences drove saves, shares, and pipeline actions.",
    pinnacleValue: "Pinnacle Value: Increased narrative testing velocity without sacrificing craft quality.",
    atmosphereEngineering: {
      precisionLighting: "Cross-platform grade targets maintained visual consistency across vertical and cinematic aspect ratios.",
      strategicSoundscapes: "Format-specific mixes tuned intros and hooks for retention in autoplay social environments.",
      highFidelityDelivery: "Built adaptive, platform-aware delivery chains to keep playback quality stable at scale.",
    },
    performancePanel: [
      { label: "Average VTR", value: "63%", score: 63, note: "Hook density and pacing improved short-form completion." },
      { label: "Engagement Lift", value: "+112%", score: 76, note: "Interaction rate climbed after iterative creative testing." },
      { label: "Lead Flow Lift", value: "+38%", score: 38, note: "Social sequences drove measurable pipeline contribution." },
    ],
  },
]

type CaseCardProps = {
  caseStudy: CaseStudy
  index: number
  onOpen: (caseStudy: CaseStudy) => void
}

function CaseCard({ caseStudy, index, onOpen }: CaseCardProps) {
  const cardRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const inView = useInView(cardRef, { amount: 0.45 })
  const [hovered, setHovered] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 180, damping: 18, mass: 0.8 })
  const y = useSpring(rawY, { stiffness: 180, damping: 18, mass: 0.8 })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (inView) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [inView])

  const handleMouseMove: MouseEventHandler<HTMLButtonElement> = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const localX = event.clientX - (bounds.left + bounds.width / 2)
    const localY = event.clientY - (bounds.top + bounds.height / 2)
    rawX.set(localX * 0.08)
    rawY.set(localY * 0.08)
  }

  const resetMagnet = () => {
    animate(rawX, 0, { type: "spring", stiffness: 280, damping: 22 })
    animate(rawY, 0, { type: "spring", stiffness: 280, damping: 22 })
    setHovered(false)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="mb-5 break-inside-avoid"
    >
      <motion.button
        type="button"
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMagnet}
        onMouseEnter={() => setHovered(true)}
        onClick={() => onOpen(caseStudy)}
        className="group relative w-full overflow-hidden rounded-2xl border border-border/80 bg-card/70 text-left backdrop-blur-sm"
        data-cursor="play"
      >
        <motion.div layoutId={`work-media-${caseStudy.slug}`} className={`relative ${caseStudy.cardHeight}`}>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={withBasePath(caseStudy.previewPoster)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
            <source src={withBasePath(caseStudy.previewVideo)} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
            <Badge className="border border-primary/45 bg-background/70 text-primary backdrop-blur">
              {caseStudy.pinnaclePrinciple}
            </Badge>
            <motion.div
              animate={hovered ? { rotate: [0, 10, -10, 0], y: [0, -2, 2, 0] } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.6, repeat: hovered ? Number.POSITIVE_INFINITY : 0, repeatDelay: 1.1 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/70"
            >
              <Play className="h-4 w-4 text-primary" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <motion.h3 layoutId={`work-title-${caseStudy.slug}`} className="text-2xl font-bold text-foreground">
              {caseStudy.title}
            </motion.h3>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {caseStudy.client} / {caseStudy.year}
            </p>
          </div>
        </motion.div>
      </motion.button>
    </motion.article>
  )
}

type CaseStudyModalProps = {
  caseStudy: CaseStudy
  onClose: () => void
}

function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  return (
    <motion.div className="fixed inset-0 z-[90] flex items-end justify-center px-3 pb-3 pt-20 sm:items-center sm:px-6">
      <motion.button
        type="button"
        aria-label="Close case study"
        onClick={onClose}
        className="absolute inset-0 bg-background/75 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-border/80 bg-card/95 p-5 shadow-2xl sm:p-8"
        initial={{ opacity: 0, y: 26, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div className="space-y-4">
              <motion.div layoutId={`work-media-${caseStudy.slug}`} className="relative aspect-video overflow-hidden rounded-2xl border border-border/80">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={withBasePath(caseStudy.previewPoster)}
                  className="h-full w-full object-cover"
                >
                  <source src={withBasePath(caseStudy.previewVideo)} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </motion.div>
              <p className="text-sm leading-relaxed text-muted-foreground">{caseStudy.tagline}</p>
            </div>

            <div className="space-y-4">
              <motion.h2 layoutId={`work-title-${caseStudy.slug}`} className="text-4xl font-bold">
                {caseStudy.title}
              </motion.h2>
              <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {caseStudy.client} / {caseStudy.year}
              </div>
              <Badge className="border border-primary/45 bg-primary/15 text-primary">{caseStudy.pinnaclePrinciple}</Badge>
              <p className="text-sm leading-relaxed text-muted-foreground">{caseStudy.pinnacleValue}</p>
            </div>
          </div>

          <Card className="border-border/70 bg-background/50 p-5 sm:p-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">AMP Culture Principle</p>
              <h3 className="text-2xl font-bold">{caseStudy.pinnacleHeading}</h3>
              <p className="leading-relaxed text-muted-foreground">{caseStudy.pinnacleNarrative}</p>
            </div>
          </Card>

          <Card className="border-border/70 bg-background/50 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Atmosphere Engineering</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2 rounded-xl border border-border/80 bg-card/70 p-4">
                <p className="text-sm font-semibold text-foreground">Precision Lighting</p>
                <p className="text-sm text-muted-foreground">{caseStudy.atmosphereEngineering.precisionLighting}</p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/80 bg-card/70 p-4">
                <p className="text-sm font-semibold text-foreground">Strategic Soundscapes</p>
                <p className="text-sm text-muted-foreground">{caseStudy.atmosphereEngineering.strategicSoundscapes}</p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/80 bg-card/70 p-4">
                <p className="text-sm font-semibold text-foreground">High-Fidelity Delivery</p>
                <p className="text-sm text-muted-foreground">{caseStudy.atmosphereEngineering.highFidelityDelivery}</p>
              </div>
            </div>
          </Card>

          <Card className="border-border/70 bg-background/50 p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Performance Panel</p>
            </div>
            <div className="space-y-4">
              {caseStudy.performancePanel.map((metric, index) => (
                <div key={metric.label} className="space-y-1.5 rounded-xl border border-border/70 bg-card/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium">{metric.label}</p>
                    <p className="text-sm font-semibold text-primary">{metric.value}</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.score}%` }}
                      transition={{ duration: 0.55, delay: 0.06 * index }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.note}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function WorkEvidencePage() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const depthLayerOne = useTransform(scrollYProgress, [0, 1], [-110, 120])
  const depthLayerTwo = useTransform(scrollYProgress, [0, 1], [90, -130])

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-20 pt-32">
      <motion.div
        style={{ y: depthLayerOne }}
        className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        style={{ y: depthLayerTwo }}
        className="pointer-events-none absolute -right-24 top-64 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(0,212,255,0.14),transparent_42%),radial-gradient(circle_at_82%_74%,rgba(255,107,53,0.16),transparent_44%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-4xl space-y-5">
          <Badge className="border border-primary/45 bg-primary/15 text-primary uppercase tracking-[0.25em]">
            Work / Evidence of Craft
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-balance sm:text-6xl">
            The portfolio is not an archive.
            <span className="block text-primary glow-cyan">It is a Digital Theatre.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Explore scroll-triggered case narratives where atmosphere engineering, AMP culture principles, and
            measurable outcomes are surfaced in the same frame.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
            <Link href="/#project-builder">
              Build Your World
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
          {workCaseStudies.map((caseStudy, index) => (
            <CaseCard key={caseStudy.slug} caseStudy={caseStudy} index={index} onOpen={setActiveCase} />
          ))}
        </div>
      </div>

      <AnimatePresence>{activeCase ? <CaseStudyModal caseStudy={activeCase} onClose={() => setActiveCase(null)} /> : null}</AnimatePresence>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { withBasePath } from "@/lib/with-base-path"

type MetricPanel = {
  label: string
  value: number
  suffix: string
  context: string
  caseStudy: string
}

type PortraitClip = {
  name: string
  role: string
  source: string
  poster: string
}

const performancePanels: MetricPanel[] = [
  {
    label: "Conversion Lift",
    value: 218,
    suffix: "%",
    context: "Commercial narrative + campaign landing architecture",
    caseStudy: "B2B product relaunch",
  },
  {
    label: "Qualified Leads",
    value: 173,
    suffix: "%",
    context: "Executive-targeted documentary + paid distribution mix",
    caseStudy: "Enterprise services campaign",
  },
  {
    label: "Audience Retention",
    value: 64,
    suffix: "%",
    context: "Event highlight system deployed across social channels",
    caseStudy: "Hybrid conference media engine",
  },
]

const portraitClips: PortraitClip[] = [
  {
    name: "Strategy Architect",
    role: "Narrative Systems",
    source: "/6e7099ba-52f1-4ed4-861c-d4b168b315ae.mp4",
    poster: "/L1000582-2.jpg",
  },
  {
    name: "Production Architect",
    role: "Atmosphere Engineering",
    source: "/7b7d2056-b7e4-44a9-9c58-0512d82d003c.mp4",
    poster: "/L1000639.jpg",
  },
  {
    name: "Growth Architect",
    role: "Performance Operations",
    source: "/ChicagoAmp-LogoBuild.mp4",
    poster: "/movie.jpg",
  },
]

function MetricCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 900
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplayValue(Math.round(value * progress))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl font-bold text-primary sm:text-5xl">
      +{displayValue}
      {suffix}
    </span>
  )
}

function FiveSecondPortrait({ source, poster, title }: { source: string; poster: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    if (videoRef.current.currentTime >= 5) {
      videoRef.current.currentTime = 0
    }
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="metadata"
      poster={withBasePath(poster)}
      onTimeUpdate={handleTimeUpdate}
      className="h-full w-full object-cover"
      title={title}
      data-cursor="play"
    >
      <source src={withBasePath(source)} type="video/mp4" />
    </video>
  )
}

export function PerformanceProofSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,212,255,0.14),transparent_45%),radial-gradient(circle_at_20%_85%,rgba(255,215,0,0.12),transparent_45%)]" />

      <div className="container relative z-10 mx-auto space-y-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge className="bg-secondary/20 text-secondary border border-secondary/40 uppercase tracking-[0.2em]">
            Performance Proof
          </Badge>
          <h2 className="text-4xl font-bold text-balance sm:text-5xl">Results embedded directly into the narrative.</h2>
          <p className="text-lg text-muted-foreground">
            Every campaign module is instrumented to show measurable movement in conversion, qualified demand, and
            retained attention.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {performancePanels.map((panel, index) => (
            <motion.div
              key={panel.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              data-cursor="explore"
            >
              <Card className="h-full space-y-5 border-border/70 bg-card/70 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{panel.label}</p>
                <MetricCounter value={panel.value} suffix={panel.suffix} />
                <p className="text-sm leading-relaxed text-muted-foreground">{panel.context}</p>
                <div className="rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm">
                  <span className="text-muted-foreground">Case Study: </span>
                  <span className="font-medium">{panel.caseStudy}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-3xl font-bold">Motion Portraits: the architects at work</h3>
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">5-second loops</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {portraitClips.map((portrait, index) => (
              <motion.article
                key={portrait.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/80"
                data-cursor="play"
              >
                <div className="aspect-[3/4]">
                  <FiveSecondPortrait source={portrait.source} poster={portrait.poster} title={portrait.name} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 space-y-1 px-5 pb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{portrait.role}</p>
                  <p className="text-lg font-semibold">{portrait.name}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

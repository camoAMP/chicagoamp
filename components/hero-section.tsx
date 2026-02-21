"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/with-base-path"

const rhythmStatements = ["ATMOSPHERE ENGINEERING", "THE EVIDENCE OF CRAFT", "NEVER SETTLE"]
const storyTools = [
  "Narrative Strategy",
  "Precision Lighting",
  "Strategic Sound Design",
  "Set & Spatial Design",
  "Performance Analytics",
]

const heroHlsStream = process.env.NEXT_PUBLIC_HERO_HLS_URL
const heroDashStream = process.env.NEXT_PUBLIC_HERO_DASH_URL

export function HeroSection() {
  const [statementIndex, setStatementIndex] = useState(0)
  const [modeIndex, setModeIndex] = useState(0)

  useEffect(() => {
    const statementTimer = window.setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % rhythmStatements.length)
    }, 2600)

    const modeTimer = window.setInterval(() => {
      setModeIndex((prev) => (prev + 1) % 2)
    }, 3200)

    return () => {
      window.clearInterval(statementTimer)
      window.clearInterval(modeTimer)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover md:scale-[1.03]"
        poster={withBasePath("/movie.jpg")}
        aria-hidden="true"
        tabIndex={-1}
        data-cursor="play"
      >
        {heroHlsStream ? <source src={heroHlsStream} type="application/vnd.apple.mpegurl" /> : null}
        {heroDashStream ? <source src={heroDashStream} type="application/dash+xml" /> : null}
        <source src={withBasePath("/chigacoherovid.mp4")} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/80 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(0,212,255,0.26),transparent_38%),radial-gradient(circle_at_84%_68%,rgba(255,107,53,0.2),transparent_44%)]" />

      <div className="relative z-10 flex min-h-screen items-end pt-24">
        <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-5xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/45 bg-background/35 px-5 py-2 text-xs tracking-[0.3em] text-primary">
              <span className={modeIndex === 0 ? "glow-cyan" : ""}>ATMOSPHERE ENGINEERING</span>
              <span className="text-muted-foreground">/</span>
              <span className={modeIndex === 1 ? "glow-cyan" : ""}>THE EVIDENCE OF CRAFT</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
              YOUR BRAND IS A WORLD.
              <span className="block text-primary glow-cyan">WE ARE THE ARCHITECTS.</span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-2xl">
              Where cinematic craft meets performance-driven strategy. We transform brand narratives into
              market-dominating realities.
            </p>

            <div className="h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={rhythmStatements[statementIndex]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="text-sm uppercase tracking-[0.35em] text-accent"
                >
                  {rhythmStatements[statementIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="max-w-3xl rounded-2xl border border-border/70 bg-background/40 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Building Stories</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                As humans, we use stories to share experiences. From cave walls to modern screens, we build worlds with
                light, sound, and design to shape the stories we tell.
              </p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {storyTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-border bg-background/45 px-4 py-2 text-sm text-foreground backdrop-blur-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-cursor="explore"
              >
                <Link href="#project-builder">
                  Build Your World
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/20 backdrop-blur border-primary/45">
                <Link href="/work" data-cursor="play">
                  <Play className="mr-2 h-5 w-5" />
                  Watch the Evidence
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

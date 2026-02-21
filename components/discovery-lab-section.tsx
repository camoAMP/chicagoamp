"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Film, RadioTower, Sparkles, Target } from "lucide-react"

type AuditQuestion = {
  id: "world" | "behavior"
  prompt: string
  options: string[]
}

type ServiceModule = {
  title: string
  detail: string
  notes: string
  icon: typeof Film
  gradientClass: string
}

const auditQuestions: AuditQuestion[] = [
  {
    id: "world",
    prompt: "What world are you trying to build?",
    options: ["Category leader", "Cultural icon", "High-trust enterprise", "Launch-ready newcomer"],
  },
  {
    id: "behavior",
    prompt: "Whose behavior are you trying to change?",
    options: ["Executive buyers", "Event audiences", "Consumer communities", "Internal teams"],
  },
]

const serviceModules: ServiceModule[] = [
  {
    title: "Live & Hybrid Event IP",
    detail: "Stagecraft, multicam capture, real-time social cutdowns, and post-event demand generation.",
    notes: "Engineered for audience carryover beyond event day.",
    icon: RadioTower,
    gradientClass: "from-primary/35 to-primary/5",
  },
  {
    title: "Corporate Legacy Documentaries",
    detail: "Founder narratives, culture arcs, and credibility films built for long-tail brand equity.",
    notes: "Turns institutional memory into strategic leverage.",
    icon: Film,
    gradientClass: "from-secondary/35 to-secondary/5",
  },
  {
    title: "Short-Form Social Dominance",
    detail: "High-frequency short-form production tuned for retention, saves, and conversion intent.",
    notes: "Designed to own attention in noisy channels.",
    icon: Sparkles,
    gradientClass: "from-accent/35 to-accent/5",
  },
  {
    title: "Performance Narrative Systems",
    detail: "Campaign architecture that links creative output to qualified pipeline outcomes.",
    notes: "Creative and growth functions move as one system.",
    icon: Target,
    gradientClass: "from-[#6ee7ff]/35 to-[#6ee7ff]/5",
  },
]

export function DiscoveryLabSection() {
  const [answers, setAnswers] = useState<Record<AuditQuestion["id"], string>>({
    world: auditQuestions[0].options[0],
    behavior: auditQuestions[1].options[0],
  })

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(0,212,255,0.12),transparent_42%),radial-gradient(circle_at_82%_80%,rgba(255,107,53,0.14),transparent_48%)]" />
      <div className="container relative z-10 mx-auto space-y-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <Badge className="bg-primary/20 text-primary border border-primary/40 tracking-[0.2em] uppercase">
            Discovery Lab
          </Badge>
          <h2 className="text-4xl font-bold text-balance sm:text-5xl">
            Capability discovery before execution. Strategy first, then world-building.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We start by pressure-testing narrative direction, behavior targets, and growth intent before production
            resources move.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {auditQuestions.map((question) => (
            <Card key={question.id} className="space-y-6 border-border/70 bg-card/70 p-6 backdrop-blur">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Interactive Brand Audit</p>
                <h3 className="text-2xl font-semibold">{question.prompt}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option }))}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        selected
                          ? "border-primary bg-primary/20 text-primary"
                          : "border-border bg-background/40 text-muted-foreground hover:border-primary/45 hover:text-foreground"
                      }`}
                      data-cursor="explore"
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </Card>
          ))}
        </div>

        <Card className="border-border/70 bg-card/70 p-6 sm:p-8 backdrop-blur">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Service Mix</p>
              <h3 className="text-3xl font-bold">Build the right world architecture</h3>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
              <a href="#project-builder">Launch Discovery Sprint</a>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceModules.map((module, index) => (
              <motion.article
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background/70 p-6"
                data-cursor="explore"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradientClass} opacity-45`} />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70">
                    <module.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{module.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{module.detail}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-accent">{module.notes}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

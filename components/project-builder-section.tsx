"use client"

import Link from "next/link"
import { FormEvent, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type BuilderForm = {
  worldGoal: string
  behaviorShift: string
  selectedTracks: string[]
  timeline: string
  scope: string
  outcome: string
  name: string
  email: string
  company: string
}

const serviceTracks = [
  "Live & Hybrid Event IP",
  "Corporate Legacy Documentary",
  "Short-Form Social Dominance",
  "Performance Narrative System",
]

const initialForm: BuilderForm = {
  worldGoal: "",
  behaviorShift: "",
  selectedTracks: [],
  timeline: "",
  scope: "",
  outcome: "",
  name: "",
  email: "",
  company: "",
}

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/chicagoamp/discovery"

function withQueryParams(base: string, params: Record<string, string>) {
  const filtered = Object.fromEntries(Object.entries(params).filter(([, value]) => value.trim().length > 0))

  try {
    const url = new URL(base)
    Object.entries(filtered).forEach(([key, value]) => url.searchParams.set(key, value))
    return url.toString()
  } catch {
    const query = new URLSearchParams(filtered).toString()
    if (!query) return base
    return `${base}${base.includes("?") ? "&" : "?"}${query}`
  }
}

export function ProjectBuilderSection() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<BuilderForm>(initialForm)

  const completion = useMemo(() => Math.round(((step + 1) / 3) * 100), [step])
  const schedulingParams = useMemo(
    () => ({
      name: form.name,
      email: form.email,
      a1: form.worldGoal,
      a2: form.behaviorShift,
      a3: form.selectedTracks.join(", "),
      a4: `${form.timeline}${form.timeline && form.scope ? " | " : ""}${form.scope}`,
      a5: form.outcome,
      company: form.company,
    }),
    [form],
  )
  const bookingUrl = useMemo(() => withQueryParams(calendlyUrl, schedulingParams), [schedulingParams])
  const fullBuilderUrl = useMemo(
    () =>
      withQueryParams("/intakeform", {
        world_goal: form.worldGoal,
        behavior_shift: form.behaviorShift,
        service_mix: form.selectedTracks.join(", "),
        timeline: form.timeline,
        scope: form.scope,
        primary_kpi: form.outcome,
        contact_name: form.name,
        contact_email: form.email,
        company: form.company,
      }),
    [form],
  )

  const canMoveNext =
    (step === 0 && form.worldGoal.trim().length > 0 && form.behaviorShift.trim().length > 0) ||
    (step === 1 && form.timeline && form.scope && form.outcome.trim().length > 0) ||
    step === 2

  const toggleTrack = (track: string) => {
    setForm((prev) => {
      const hasTrack = prev.selectedTracks.includes(track)
      return {
        ...prev,
        selectedTracks: hasTrack
          ? prev.selectedTracks.filter((entry) => entry !== track)
          : [...prev.selectedTracks, track],
      }
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="project-builder" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,212,255,0.15),transparent_45%),radial-gradient(circle_at_80%_82%,rgba(255,107,53,0.12),transparent_45%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-5xl border-border/70 bg-card/80 p-6 backdrop-blur sm:p-9">
          {!submitted ? (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-2">
                  <Badge className="border border-primary/40 bg-primary/20 text-primary uppercase tracking-[0.22em]">
                    Results-First Funnel
                  </Badge>
                  <h2 className="text-3xl font-bold sm:text-4xl">Multi-Step Project Builder</h2>
                  <p className="text-sm text-muted-foreground">
                    Define your world-building goal, timeline, and scope. Then move directly into scheduling.
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Step {step + 1} of 3</p>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                  animate={{ width: `${completion}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>

              {step === 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">World Objective</span>
                    <textarea
                      value={form.worldGoal}
                      onChange={(event) => setForm((prev) => ({ ...prev, worldGoal: event.target.value }))}
                      className="min-h-32 w-full rounded-xl border border-border bg-background/50 p-4 text-sm"
                      placeholder="What world are you trying to build?"
                      required
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Behavior Change</span>
                    <textarea
                      value={form.behaviorShift}
                      onChange={(event) => setForm((prev) => ({ ...prev, behaviorShift: event.target.value }))}
                      className="min-h-32 w-full rounded-xl border border-border bg-background/50 p-4 text-sm"
                      placeholder="Whose behavior are you trying to change and how?"
                      required
                    />
                  </label>
                  <div className="space-y-3 md:col-span-2">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Service Mix</p>
                    <div className="flex flex-wrap gap-3">
                      {serviceTracks.map((track) => {
                        const active = form.selectedTracks.includes(track)
                        return (
                          <button
                            key={track}
                            type="button"
                            onClick={() => toggleTrack(track)}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                              active
                                ? "border-primary bg-primary/20 text-primary"
                                : "border-border bg-background/40 text-muted-foreground hover:border-primary/45 hover:text-foreground"
                            }`}
                            data-cursor="explore"
                          >
                            {track}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="grid gap-6 md:grid-cols-3">
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Timeline</span>
                    <select
                      value={form.timeline}
                      onChange={(event) => setForm((prev) => ({ ...prev, timeline: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-border bg-background/50 px-3 text-sm"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="0-30 days">0-30 days</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Quarter-scale rollout">Quarter-scale rollout</option>
                    </select>
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Scope</span>
                    <select
                      value={form.scope}
                      onChange={(event) => setForm((prev) => ({ ...prev, scope: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-border bg-background/50 px-3 text-sm"
                      required
                    >
                      <option value="">Select scope</option>
                      <option value="Single campaign sprint">Single campaign sprint</option>
                      <option value="Multi-channel launch">Multi-channel launch</option>
                      <option value="Always-on growth engine">Always-on growth engine</option>
                    </select>
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Primary KPI</span>
                    <input
                      value={form.outcome}
                      onChange={(event) => setForm((prev) => ({ ...prev, outcome: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-border bg-background/50 px-3 text-sm"
                      placeholder="Conversion lift, lead quality, etc."
                      required
                    />
                  </label>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Name</span>
                    <input
                      value={form.name}
                      onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-border bg-background/50 px-3 text-sm"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Work Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-border bg-background/50 px-3 text-sm"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                  <label className="space-y-2 md:col-span-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Company</span>
                    <input
                      value={form.company}
                      onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-border bg-background/50 px-3 text-sm"
                      placeholder="Company name"
                      required
                    />
                  </label>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                  disabled={step === 0}
                  className="bg-transparent"
                >
                  Previous
                </Button>

                {step < 2 ? (
                  <Button
                    type="button"
                    onClick={() => setStep((prev) => Math.min(2, prev + 1))}
                    disabled={!canMoveNext}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Complete Builder
                  </Button>
                )}
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="space-y-3">
                <Badge className="border border-accent/45 bg-accent/20 text-accent uppercase tracking-[0.2em]">
                  Intake Complete
                </Badge>
                <h2 className="text-3xl font-bold sm:text-4xl">Next step: schedule your discovery call.</h2>
                <p className="text-muted-foreground">
                  Your project profile is ready. Book a time with the strategy team to turn this into an execution
                  roadmap.
                </p>
              </div>

              <div className="grid gap-4 rounded-2xl border border-border bg-background/45 p-5 text-sm md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">World Goal</p>
                  <p className="mt-2 text-foreground">{form.worldGoal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Timeline & Scope</p>
                  <p className="mt-2 text-foreground">
                    {form.timeline} / {form.scope}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Primary KPI</p>
                  <p className="mt-2 text-foreground">{form.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    Book Discovery Call
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href={fullBuilderUrl} data-cursor="explore">
                    Open Full Interactive Builder
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}

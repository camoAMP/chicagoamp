"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Calculator, SlidersHorizontal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const outputOptions = ["Campaign Film", "Event Highlight Engine", "Social Burst Stack", "Narrative Site Launch"]

export function LabsPrototypeTools() {
  const [selectedOutput, setSelectedOutput] = useState(outputOptions[0])
  const [productionDays, setProductionDays] = useState(3)
  const [distributionChannels, setDistributionChannels] = useState(2)
  const [aiVariationDepth, setAiVariationDepth] = useState(1)

  const quoteRange = useMemo(() => {
    const base = 8500
    const productionFactor = productionDays * 2200
    const distributionFactor = distributionChannels * 1600
    const aiFactor = aiVariationDepth * 1400
    const low = base + productionFactor + distributionFactor + aiFactor
    const high = Math.round(low * 1.35)
    return { low, high }
  }, [productionDays, distributionChannels, aiVariationDepth])

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-border/70 bg-card/70 p-6 backdrop-blur">
        <div className="mb-4 flex items-center gap-2">
          <Calculator className="h-4 w-4 text-primary" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Menu-Style Quote Builder</p>
        </div>
        <div className="space-y-4">
          <label className="space-y-1">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Output Type</span>
            <select
              value={selectedOutput}
              onChange={(event) => setSelectedOutput(event.target.value)}
              className="h-11 w-full rounded-lg border border-border bg-background/45 px-3 text-sm"
            >
              {outputOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Production Days ({productionDays})
            </span>
            <input
              type="range"
              min={1}
              max={8}
              value={productionDays}
              onChange={(event) => setProductionDays(Number(event.target.value))}
              className="w-full"
            />
          </label>

          <label className="space-y-1">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Distribution Channels ({distributionChannels})
            </span>
            <input
              type="range"
              min={1}
              max={6}
              value={distributionChannels}
              onChange={(event) => setDistributionChannels(Number(event.target.value))}
              className="w-full"
            />
          </label>

          <label className="space-y-1">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              AI Variation Depth ({aiVariationDepth})
            </span>
            <input
              type="range"
              min={0}
              max={4}
              value={aiVariationDepth}
              onChange={(event) => setAiVariationDepth(Number(event.target.value))}
              className="w-full"
            />
          </label>

          <div className="rounded-xl border border-border bg-background/45 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Prototype Estimate</p>
            <p className="mt-2 text-lg font-semibold text-primary">
              ${quoteRange.low.toLocaleString()} - ${quoteRange.high.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{selectedOutput}</p>
          </div>
        </div>
      </Card>

      <Card className="border-border/70 bg-card/70 p-6 backdrop-blur">
        <div className="mb-4 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-accent" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Interactive Audit Calculator</p>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            This prototype ranks readiness across narrative clarity, creative throughput, and channel efficiency before
            a sprint starts.
          </p>
          <ul className="space-y-2">
            <li className="rounded-lg border border-border bg-background/45 px-3 py-2">Narrative clarity score mapping</li>
            <li className="rounded-lg border border-border bg-background/45 px-3 py-2">Audience psychographic fit index</li>
            <li className="rounded-lg border border-border bg-background/45 px-3 py-2">Distribution pressure test model</li>
          </ul>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90" data-cursor="explore">
            <Link href="/#project-builder">Run Full Discovery</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { withBasePath } from "@/lib/with-base-path"

const portraitClips = [
  {
    name: "Strategy",
    role: "Narrative Architecture",
    source: "/6e7099ba-52f1-4ed4-861c-d4b168b315ae.mp4",
    poster: "/L1000582-2.jpg",
  },
  {
    name: "Production",
    role: "On-Set Craft",
    source: "/7b7d2056-b7e4-44a9-9c58-0512d82d003c.mp4",
    poster: "/L1000639.jpg",
  },
  {
    name: "Direction",
    role: "Atmosphere Engineering",
    source: "/ChicagoAmp-LogoBuild.mp4",
    poster: "/movie.jpg",
  },
]

function FiveSecondPortrait({
  source,
  poster,
  title,
}: {
  source: string
  poster: string
  title: string
}) {
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

export function CultureMotionPortraits() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {portraitClips.map((portrait) => (
        <Card key={portrait.name} className="overflow-hidden border-border/70 bg-card/70 backdrop-blur">
          <div className="relative aspect-[3/4]">
            <FiveSecondPortrait source={portrait.source} poster={portrait.poster} title={portrait.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 space-y-1 px-4 pb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{portrait.role}</p>
              <p className="text-lg font-semibold">{portrait.name}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
